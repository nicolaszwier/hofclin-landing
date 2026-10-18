import type { AstroIntegration } from "astro";
import { findGoLiveProblems } from "../config/site";

/**
 * Fails a production build while src/config/site.ts still holds placeholders or the
 * legal pages are unreviewed. Production = Vercel production deploys, or GO_LIVE=1.
 * Every other build only warns, so previews keep working with visible placeholders.
 */
export function goLiveCheck(): AstroIntegration {
  return {
    name: "go-live-check",
    hooks: {
      "astro:build:start": ({ logger }) => {
        const problems = findGoLiveProblems();
        if (problems.length === 0) return;
        const report = `Pendências de go-live (docs/go-live-checklist.md):\n  - ${problems.join("\n  - ")}`;
        const isProduction = process.env.VERCEL_ENV === "production" || process.env.GO_LIVE === "1";
        if (isProduction) throw new Error(report);
        logger.warn(report);
      },
    },
  };
}
