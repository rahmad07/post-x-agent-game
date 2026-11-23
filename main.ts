import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const post = readFileSync(join(botDir, "POST.json"), "utf8");
const parsed = JSON.parse(post) as { url?: unknown };
if (typeof parsed.url !== "string" || !parsed.url.startsWith("https://")) {
  throw new Error("POST.json must hold an https post url");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "POST.json"), JSON.stringify(parsed));
