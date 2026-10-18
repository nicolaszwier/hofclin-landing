/**
 * The single place for everything that changes between "draft" and "live".
 *
 * Any value still equal to PLACEHOLDER — and `legal.reviewed: false` — fails a
 * production build (see src/integrations/go-live-check.ts). In development and
 * preview builds the page renders the placeholder visibly instead.
 */
export const PLACEHOLDER = "__PREENCHER__";

export const site = {
  name: "Hofclin",
  url: "https://hofclin.com.br",
  appUrl: "https://app.hofclin.com.br",
  locale: "pt_BR",
  language: "pt-BR",

  /** Footer identification — Decreto 7.962/2013, art. 2º. */
  company: {
    legalName: "NICOLAS ZWIERZYKOWSKI LTDA",
    cnpj: "60.678.486/0001-43",
    address: "R CLOTARIO PORTUGAL, 1050, UNIAO DA VITORIA, PR",
    email: "nicolaszwier@gmail.com",
    phone: "(42) 998071761",
  },

  /** Encarregado pelo tratamento de dados — LGPD art. 41, §1º. */
  dpo: {
    name: "NICOLAS ZWIERZYKOWSKI",
    email: "nicolaszwier@gmail.com",
  },

  /** Digits only, with country code, e.g. 5541999999999. */
  whatsapp: {
    number: "5541999999999", //to-do: replace with real number
  },

  analytics: {
    /** GTM-XXXXXXX. GTM loads only after the visitor grants a Consent category. */
    gtmId: "GTM-NXGWKCT5",
  },

  legal: {
    /** Flip to true only after counsel has reviewed the Termos, Privacidade and Segurança pages. */
    reviewed: true,
    updatedAt: "2026-10-17",
  },
} as const;

export function isPlaceholder(value: unknown): boolean {
  return value === PLACEHOLDER;
}

/** Every reason the site is not ready for production, as human-readable lines. */
export function findGoLiveProblems(): string[] {
  const problems: string[] = [];
  const walk = (value: unknown, path: string): void => {
    if (isPlaceholder(value)) problems.push(`${path} ainda é placeholder`);
    else if (value && typeof value === "object")
      for (const [key, child] of Object.entries(value)) walk(child, path ? `${path}.${key}` : key);
  };
  walk(site, "site");
  if (!site.legal.reviewed) problems.push("site.legal.reviewed é false — Termos, Privacidade e Segurança não foram revisados");
  return problems;
}

export type PlanKey = "standard" | "pro";

/** Trial CTA target. `plan` becomes the Trial plan (docs/attribution-contract.md §1). */
export function signupUrl(plan?: PlanKey): string {
  return plan ? `${site.appUrl}/signup?plan=${plan}` : `${site.appUrl}/signup`;
}

export const signinUrl = `${site.appUrl}/signin`;

/**
 * The public path of a page. With `build.format: "file"` Astro sees `/odontologia.html`
 * and `/index.html` at build time, while Vercel (cleanUrls) serves `/odontologia` and `/`.
 */
export function publicPath(pathname: string): string {
  const path = pathname.replace(/\.html$/, "").replace(/\/index$/, "/").replace(/(.)\/$/, "$1");
  return path === "" ? "/" : path;
}
