import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, exactly as judged — 73 characters, no trailing newline.
// The program writes ONLY to /output/entry.txt: no relative writes, so a
// read-only working directory in the grader sandbox cannot fail the run.
const LINE =
  "Everyone talks in here like I can't hear them. I can. I just can't leave.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
