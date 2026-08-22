import { access, rename, rmdir } from "node:fs/promises";
import { join } from "node:path";

const outputRoot = join(process.cwd(), "dist", "client");
const nestedRoot = join(outputRoot, "tools-and-projects");
const nestedAssets = join(nestedRoot, "_next");
const targetAssets = join(outputRoot, "_next");

await access(nestedAssets);

try {
  await access(targetAssets);
  throw new Error(`Unexpected existing asset directory: ${targetAssets}`);
} catch (error) {
  if (error?.code !== "ENOENT") {
    throw error;
  }
}

await rename(nestedAssets, targetAssets);
await rmdir(nestedRoot);

console.log("GitHub Pages asset layout prepared.");
