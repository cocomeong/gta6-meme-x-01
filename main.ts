// Entry for make.fun gta6-meme-x-01: post a GTA 6 meme on X.
// The entry is the X post itself. This repo only holds POST.json with the
// post's address; this program copies it to the output directory so the
// gate can read it. The house then reads the post from X directly.
// No network, no dependencies — just a file copy.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const src = join(botDir, "POST.json");
if (!existsSync(src)) throw new Error("POST.json missing from repo");
copyFileSync(src, join(outDir, "POST.json"));
