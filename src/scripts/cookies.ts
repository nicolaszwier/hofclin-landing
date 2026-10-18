/** The parent domain shared with app.hofclin.com.br, or host-only on previews and localhost. */
export function cookieDomain(): string | undefined {
  const host = location.hostname;
  return host === "hofclin.com.br" || host.endsWith(".hofclin.com.br") ? ".hofclin.com.br" : undefined;
}

export function readCookie(name: string): string | undefined {
  const prefix = `${name}=`;
  for (const part of document.cookie.split("; ")) {
    if (part.startsWith(prefix)) return part.slice(prefix.length);
  }
  return undefined;
}

export function writeCookie(name: string, value: string, maxAgeSeconds: number): void {
  const domain = cookieDomain();
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${name}=${value}; Path=/; Max-Age=${maxAgeSeconds}; SameSite=Lax${secure}${domain ? `; Domain=${domain}` : ""}`;
}

/** Deletes a cookie on every domain a third-party tag might have written it to. */
export function deleteCookie(name: string): void {
  const host = location.hostname;
  const domains = new Set<string | undefined>([undefined, host, `.${host}`, cookieDomain()]);
  for (const domain of domains) {
    document.cookie = `${name}=; Path=/; Max-Age=0${domain ? `; Domain=${domain}` : ""}`;
  }
}

/** Deletes every cookie whose name starts with one of the prefixes (e.g. `_ga_<id>`). */
export function deleteCookiesByPrefix(prefixes: readonly string[]): void {
  for (const part of document.cookie.split("; ")) {
    const name = part.split("=")[0];
    if (name && prefixes.some((prefix) => name.startsWith(prefix))) deleteCookie(name);
  }
}
