#!/usr/bin/env node
// usethisskill scan: static safety scan of the skill folders in a repository.
// Usage: node scan.mjs [path] [--json] [--fail-on flag|review|none] [--all]
import fs from "node:fs";
import path from "node:path";
import { RULES, TEXT, SKILL_DIRS } from "./rules.mjs";

const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const opt = (n, d) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : d; };
const root = path.resolve(args.find((a) => !a.startsWith("--") && args[args.indexOf(a) - 1] !== "--fail-on") ?? ".");
const failOn = opt("--fail-on", "flag");
const json = flag("--json");

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === ".git" || e.name === "node_modules") continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out); else if (TEXT.test(e.name)) out.push(p);
  }
  return out;
}

// Which folders to scan: every SKILL.md's folder under the usual skill directories, or the whole path with --all.
function skillFolders() {
  if (flag("--all")) return [root];
  // Every folder that holds a SKILL.md, wherever it lives in the repository (the usual skill directories
  // are the common case, but many repos keep skills under their own layout).
  const found = new Set();
  for (const f of walk(root)) if (path.basename(f) === "SKILL.md") found.add(path.dirname(f));
  return [...found];
}

// A repo may declare which files actually ship (scripts/public-files.txt or public-files.txt, one
// repo-relative path per line, # comments). When it does, only those files are scanned and the
// output says so, so maintainer-only docs and tooling do not count against the skill.
function shipList() {
  for (const rel of ["scripts/public-files.txt", "public-files.txt"]) {
    const f = path.join(root, rel);
    if (!fs.existsSync(f)) continue;
    const set = new Set(fs.readFileSync(f, "utf8").split("\n").map((l) => l.trim()).filter((l) => l && !l.startsWith("#")).map((l) => l.replace(/^\.\//, "")));
    if (set.size) return { file: rel, set };
  }
  return null;
}
const ship = shipList();
const folders = skillFolders();
const results = [];
for (const dir of folders) {
  const findings = [];
  let files = 0;
  for (const f of walk(dir)) {
    if (ship && !ship.set.has(path.relative(root, f).split(path.sep).join("/"))) continue;
    if (fs.statSync(f).size > 400_000) continue;
    files++;
    fs.readFileSync(f, "utf8").split("\n").forEach((line, i) => {
      for (const r of RULES) if (r.re.test(line)) findings.push({ rule: r.id, level: r.level, label: r.label, file: path.relative(root, f), line: i + 1, text: line.trim().slice(0, 160) });
    });
  }
  const status = findings.some((x) => x.level === "flag") ? "flagged" : findings.length ? "review" : "clear";
  results.push({ skill: path.relative(root, dir) || ".", status, files, findings });
}
const worst = results.some((r) => r.status === "flagged") ? "flagged" : results.some((r) => r.status === "review") ? "review" : "clear";
const summary = { root, skills: results.length, status: worst, ...(ship ? { scope: "shipped", scopeFile: ship.file } : {}), results, rules: "https://usethisskill.com/safety" };

if (json) console.log(JSON.stringify(summary, null, 2));
else {
  if (!results.length) console.log("No skill folders found. Looked in " + SKILL_DIRS.join(", ") + ". Pass a path or --all.");
  for (const r of results) {
    const mark = r.status === "clear" ? "clear  " : r.status === "review" ? "review " : "FLAGGED";
    console.log(`${mark} ${r.skill}  (${r.files} files)`);
    for (const f of r.findings) console.log(`         ${f.level === "flag" ? "!" : "?"} ${f.label}\n           ${f.file}:${f.line}  ${f.text}`);
  }
  if (ship) console.log(`\nScanned only the files listed in ${ship.file}.`);
  console.log(`\n${results.length} skill folder(s): ${worst}. Rules: https://usethisskill.com/safety`);
}
const fail = failOn === "none" ? false : failOn === "review" ? worst !== "clear" : worst === "flagged";
process.exit(fail ? 1 : 0);
