// Captures /og-image from the running dev server into public/og-image.png.
// Usage: pnpm dev (in another terminal), then pnpm og [base-url].
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const base = process.argv[2] ?? "http://localhost:4321";
const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
if (!existsSync(chrome)) {
  console.error("Google Chrome não encontrado em /Applications.");
  process.exit(1);
}

const output = fileURLToPath(new URL("../public/og-image.png", import.meta.url));
execFileSync(chrome, [
  "--headless=new",
  "--hide-scrollbars",
  "--force-device-scale-factor=1",
  "--window-size=1200,630",
  "--virtual-time-budget=4000",
  `--screenshot=${output}`,
  `${base}/og-image`,
]);
console.log(`OG image salva em ${output}`);
