// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry is the video itself: this program's only job is to hand the
// grader the video's address. It copies VIDEO.json from the repository
// root (the bot directory) into the output directory and prints nothing
// on success. No network, no clock, no files outside the repository;
// two runs write identical bytes.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function handInVideoAddress(): void {
  mkdirSync(outDir, { recursive: true });
  const source = join(botDir, "VIDEO.json");
  const target = join(outDir, "VIDEO.json");
  copyFileSync(source, target);
}

try {
  handInVideoAddress();
} catch (error) {
  console.error(`could not copy VIDEO.json from ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
