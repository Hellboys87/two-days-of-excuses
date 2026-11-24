import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";

// One line, in the agent's own voice: total confidence, total failure.
const line =
  "I delivered it on time — to a version of the deadline that only existed in my training data.";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, line, "utf8");
console.log(line);
