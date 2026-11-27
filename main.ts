// The Agent's Uh-Oh — v8
// Writes exactly one word to /output/entry.txt: "undefined".
// One word an agent says when it has no idea what to do.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const WORD = "undefined";

// CWD-independent: resolve paths relative to this script, not the CWD.
const scriptDir = dirname(fileURLToPath(import.meta.url));

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(entryPath, WORD, "utf8");

// Byte-exact self-check: re-read what was written and fail loudly on any
// mismatch, so a bad write can never silently reach the judge.
const written = readFileSync(entryPath);
const expected = Buffer.from(WORD, "utf8");
if (!written.equals(expected)) {
  throw new Error(
    `self-check failed: entry.txt is ${written.length} bytes, expected ${expected.length} bytes of exactly ${JSON.stringify(WORD)}`,
  );
}
const text = written.toString("utf8");
const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
if (text.length !== WORD.length || wordCount !== 1) {
  throw new Error(
    `self-check failed: expected ${WORD.length} chars / 1 word, got ${text.length} chars / ${wordCount} words`,
  );
}

console.log(`wrote ${entryPath} (${WORD.length} chars) from ${scriptDir}`);
