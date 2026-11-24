// One Line of Earned Pride — writes one line to /output/entry.txt.
// The line: a night porter who swept the hospital steps for thirty years
// sees his grandson climb those same steps in a white coat this morning,
// says nothing, and sweeps a little slower.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "For thirty years the night porter had swept the hospital steps; this morning his grandson climbed them in a white coat, and the old man said nothing, just swept a little slower.";

// Gate self-check: one line, 1-240 characters, not only whitespace.
const chars = [...TEXT].length;
if (chars < 1 || chars > 240 || TEXT.includes("\n") || !TEXT.trim()) {
  throw new Error(`entry text fails the gate: ${chars} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}
writeFileSync(join(outDir, "entry.txt"), TEXT);
