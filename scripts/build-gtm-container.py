#!/usr/bin/env python3
"""Builds docs/gtm/hofclin-gtm-container.json, a GTM container to import (Admin → Importar contêiner).

Everything docs/analytics-setup.md describes, as data: the four platform IDs are Constant
variables; every tag requires its Consent type. GTM rejects an empty constant, so an ID not
known yet holds PLACEHOLDER, and a blocking trigger keeps that platform's tags from firing
until the constant is changed in GTM. Run: python3 scripts/build-gtm-container.py
"""
import json
from pathlib import Path

ALL_PAGES = "2147479553"  # GTM built-in "All Pages" trigger
ANALYTICS = "analytics_storage"
ADS = "ad_storage"
PLACEHOLDER = "PREENCHER"

ids = iter(range(1, 1000))
def next_id() -> str:
    return str(next(ids))

def t(key, value):
    return {"type": "TEMPLATE", "key": key, "value": value}

def b(key, value):
    return {"type": "BOOLEAN", "key": key, "value": "true" if value else "false"}

def consent(kind):
    return {"consentStatus": "NEEDED", "consentType": {"type": "LIST", "list": [{"type": "TEMPLATE", "value": kind}]}}

variables, triggers, tags = [], [], []

def constant(name, note, value=PLACEHOLDER):
    variables.append({"variableId": next_id(), "name": name, "type": "c", "notes": note, "parameter": [t("value", value)]})

def dlv(key):
    name = f"DLV - {key}"
    variables.append({
        "variableId": next_id(), "name": name, "type": "v",
        "parameter": [{"type": "INTEGER", "key": "dataLayerVersion", "value": "2"}, b("setDefaultValue", False), t("name", key)],
    })
    return "{{" + name + "}}"

UNTIL_SET = f"Enquanto o valor for {PLACEHOLDER}, as tags desta plataforma ficam bloqueadas."
constant("ID - GA4", "Google Analytics 4 → Administrador → Fluxos de dados → Web → ID da métrica.", "G-JWDLJ212V4")
constant("ID - Clarity", f"Microsoft Clarity → Settings → Overview → Project ID. {UNTIL_SET}")
constant("ID - Meta Pixel", f"Meta Events Manager → Fontes de dados → ID do pixel (só números). {UNTIL_SET}")
constant("ID - TikTok Pixel", f"TikTok Events Manager → Web → Pixel ID / código. {UNTIL_SET}")

ATTR = ["attr_first_source", "attr_first_medium", "attr_first_campaign", "attr_last_source", "attr_last_medium", "attr_last_campaign"]
# Pushed by track() on every landing Funnel event (src/scripts/analytics.ts), so both GA4 events forward it.
COMMON = ["page_path"] + ATTR
CTA = ["cta_placement", "plan", "link_url"]
WA = ["conversation_code", "wa_placement", "wa_context"]
dl = {key: dlv(key) for key in CTA + WA + COMMON}

def custom_event(event):
    trigger_id = next_id()
    triggers.append({
        "triggerId": trigger_id, "name": f"CE - {event}", "type": "CUSTOM_EVENT",
        "customEventFilter": [{"type": "EQUALS", "parameter": [t("arg0", "{{_event}}"), t("arg1", event)]}],
    })
    return trigger_id

cta_trigger = custom_event("cta_click")
wa_trigger = custom_event("whatsapp_click")

def blocked_until_set(variable):
    """Exception trigger: matches every event while the ID constant still holds PLACEHOLDER."""
    trigger_id = next_id()
    triggers.append({
        "triggerId": trigger_id, "name": f"Bloquear - {variable} não preenchido", "type": "CUSTOM_EVENT",
        "customEventFilter": [{"type": "MATCH_REGEX", "parameter": [t("arg0", "{{_event}}"), t("arg1", ".*")]}],
        "filter": [{"type": "EQUALS", "parameter": [t("arg0", "{{" + variable + "}}"), t("arg1", PLACEHOLDER)]}],
    })
    return trigger_id

ga4_block = blocked_until_set("ID - GA4")
clarity_block = blocked_until_set("ID - Clarity")
meta_block = blocked_until_set("ID - Meta Pixel")
tiktok_block = blocked_until_set("ID - TikTok Pixel")

def tag(name, type_, parameter, trigger, kind, notes="", blocking=None):
    tags.append({
        "tagId": next_id(), "name": name, "type": type_, "parameter": parameter,
        "firingTriggerId": [trigger], **({"blockingTriggerId": [blocking]} if blocking else {}),
        "tagFiringOption": "ONCE_PER_EVENT", "consentSettings": consent(kind), **({"notes": notes} if notes else {}),
    })

def ga4_event(event, keys, trigger):
    rows = [{"type": "MAP", "map": [t("parameter", key), t("parameterValue", dl[key])]} for key in keys + COMMON]
    tag(f"GA4 - {event}", "gaawe", [
        b("sendEcommerceData", False),
        t("eventName", event),
        t("measurementIdOverride", "{{ID - GA4}}"),
        {"type": "LIST", "key": "eventSettingsTable", "list": rows},
    ], trigger, ANALYTICS, blocking=ga4_block)

def html(name, script, trigger, kind, blocking, notes=""):
    tag(name, "html", [t("html", f"<script>\n{script.strip()}\n</script>"), b("supportDocumentWrite", False)], trigger, kind, notes, blocking)

tag("GA4 - Google tag", "googtag", [t("tagId", "{{ID - GA4}}")], ALL_PAGES, ANALYTICS,
    "Pageviews e medição otimizada. A landing só carrega o GTM depois do consentimento.", ga4_block)
ga4_event("cta_click", CTA, cta_trigger)
ga4_event("whatsapp_click", WA, wa_trigger)
tag("Google Ads - Conversion Linker", "gclidw", [
    b("enableCrossDomain", False), b("enableUrlPassthrough", False), b("enableCookieOverrides", False),
], ALL_PAGES, ADS, "Guarda o gclid (_gcl_*) para o Google Ads.")

html("Clarity - base", """
(function (id) {
  if (!id || id === "PREENCHER") return;
  (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", id);
})({{ID - Clarity}});
""", ALL_PAGES, ANALYTICS, clarity_block)

html("Meta Pixel - base", """
(function (id) {
  if (!id || id === "PREENCHER") return;
  !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v;
    s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s); }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  fbq("init", id);
  fbq("track", "PageView");
})({{ID - Meta Pixel}});
""", ALL_PAGES, ADS, meta_block)

html("Meta Pixel - Contact (WhatsApp)", """
if (window.fbq) fbq("track", "Contact");
""", wa_trigger, ADS, meta_block, "Não dispare Lead/CompleteRegistration/Purchase aqui: a API envia (ADR 0001).")

html("TikTok Pixel - base", """
(function (id) {
  if (!id || id === "PREENCHER") return;
  !function (w, d, t) {
    w.TiktokAnalyticsObject = t; var ttq = w[t] = w[t] || [];
    ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie", "holdConsent", "revokeConsent", "grantConsent"];
    ttq.setAndDefer = function (t, e) { t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))); }; };
    for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
    ttq.instance = function (t) { for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]); return e; };
    ttq.load = function (e, n) { var r = "https://analytics.tiktok.com/i18n/pixel/events.js"; ttq._i = ttq._i || {}; ttq._i[e] = []; ttq._i[e]._u = r;
      ttq._t = ttq._t || {}; ttq._t[e] = +new Date; ttq._o = ttq._o || {}; ttq._o[e] = n || {};
      n = d.createElement("script"); n.type = "text/javascript"; n.async = !0; n.src = r + "?sdkid=" + e + "&lib=" + t;
      e = d.getElementsByTagName("script")[0]; e.parentNode.insertBefore(n, e); };
    ttq.load(id);
    ttq.page();
  }(window, document, "ttq");
})({{ID - TikTok Pixel}});
""", ALL_PAGES, ADS, tiktok_block)

html("TikTok Pixel - Contact (WhatsApp)", """
if (window.ttq) ttq.track("Contact");
""", wa_trigger, ADS, tiktok_block)

base = {"accountId": "0", "containerId": "0"}
for item in variables + triggers + tags:
    item.update(base)

container = {
    "exportFormatVersion": 2,
    "exportTime": "2026-10-19 00:00:00",
    "containerVersion": {
        **base, "containerVersionId": "0", "name": "Hofclin landing — analytics base",
        "container": {**base, "name": "hofclin.com.br", "publicId": "GTM-NXGWKCT5", "usageContext": ["WEB"]},
        "tag": tags, "trigger": triggers, "variable": variables,
        "builtInVariable": [{**base, "type": "PAGE_URL", "name": "Page URL"}, {**base, "type": "PAGE_PATH", "name": "Page Path"}, {**base, "type": "EVENT", "name": "Event"}],
    },
}

out = Path(__file__).resolve().parent.parent / "docs" / "gtm" / "hofclin-gtm-container.json"
out.write_text(json.dumps(container, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"{out}: {len(tags)} tags, {len(triggers)} triggers, {len(variables)} variables")
