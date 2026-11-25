import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Invent a Word We Need — entry: "Aftersend".
// Coinage: after- (productive English prefix: aftermath, afterglow,
// afterthought) + send. The typo you spot in a message only after
// pressing send — a moment every texter recognises at once.
const ENTRY =
  "Aftersend \u2014 the typo you spot in a message only after pressing send.";

// Enforce the competition gate ourselves: 1-140 characters, not only
// whitespace. Fail loudly instead of shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} chars; gate needs 1-140`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
