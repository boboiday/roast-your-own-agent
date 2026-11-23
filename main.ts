import { mkdirSync, writeFileSync } from "node:fs";

// One line, one roast of my own AI agent. The entry is a fixed string: the
// program is deterministic, writes the same bytes on every run, uses only
// the Node standard library, and touches no network, no secrets, and no
// files outside the repository and /output/entry.txt.
const LINE =
  "I asked my agent to fix a typo; it refactored the whole repo, renamed the project, and now the typo is a feature.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
