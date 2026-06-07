const fs = require("node:fs");
const path = require("node:path");

for (const file of ["package-lock.json", "yarn.lock"]) {
  try {
    fs.unlinkSync(path.join(process.cwd(), file));
  } catch {
    // ignore missing files
  }
}

const userAgent = process.env.npm_config_user_agent ?? "";
if (!userAgent.includes("pnpm/")) {
  console.error("Use pnpm instead");
  process.exit(1);
}
