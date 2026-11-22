import { mkdirSync, writeFileSync } from "node:fs";

const lines = [
  "The lake has gone still, and the sky has come down to lie on it.",
  "Stars settle on the water one by one, patient as dust.",
  "You are standing on the shore, and the dark is warm.",
  "Nothing moves.",
  "The night holds you the way the water holds the sky.",
];

const text = lines.join("\n") + "\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, text, "utf8");
