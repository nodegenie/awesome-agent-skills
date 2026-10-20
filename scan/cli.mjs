#!/usr/bin/env node
// usethisskill <command>: `scan [path] [--json] [--fail-on flag|review|none] [--all]`
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";
const [cmd, ...rest] = process.argv.slice(2);
if (cmd !== "scan") { console.log("Usage: usethisskill scan [path] [--json] [--fail-on flag|review|none] [--all]\nRules: https://usethisskill.com/safety"); process.exit(cmd ? 1 : 0); }
const child = spawn(process.execPath, [path.join(path.dirname(fileURLToPath(import.meta.url)), "scan.mjs"), ...rest], { stdio: "inherit" });
child.on("exit", (c) => process.exit(c ?? 1));
