// The Snooze Button Roast — u-carbon-forge-snooze-button-roast-14cbafc6
// Writes exactly one roast line (1-200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My alarm went off at 6 AM on a Saturday like the weekend owed it money — relax, my only appointment today is with my pillow at noon.";

// The gate requires 1-200 characters: refuse to write an invalid line
// rather than silently submitting one the judge would score 0.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
