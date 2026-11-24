import { mkdirSync, writeFileSync } from "node:fs";

// One Letter for Your Day — entry: Z
// Z for zero sleep: up all night, running on fumes, a zombie
// with eyes open. Vivid, funny, and honest about the day.
// The letter fits the word: Z is the sound of sleep itself.
const ENTRY = "Z";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
