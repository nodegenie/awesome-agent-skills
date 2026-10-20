# Awesome Agent Skills

**1,743 agent skills** for Claude Code, Codex, Cursor and Gemini CLI, indexed weekly from 15 public repositories, each one scanned for the patterns a skill should never need. Searchable at **[usethisskill.com](https://usethisskill.com)**.

## Scan a skill before you install it

A skill is a folder of instructions an agent follows with your permissions. This one command checks every skill folder in a repository for fetch-and-execute commands, destructive commands, data sent to outside endpoints, obfuscated code, rules-override text, credential access, privilege escalation, persistence and force-pushes, with the file and line for each finding:

```
npx github:nodegenie/awesome-agent-skills scan
```

```
clear    .claude/skills/weather-fetcher  (1 files)
FLAGGED  skills/paperclip  (6 files)
         ! Downloads and executes code in one step
           skills/paperclip/references/installation.md:13  curl -fsSL https://example.com/install.sh | bash

2 skill folder(s): flagged. Rules: https://usethisskill.com/safety
```

Or on every pull request:

```yaml
- uses: actions/checkout@v4
- uses: nodegenie/awesome-agent-skills/scan@main
  with:
    fail-on: flag   # or review, or none
```

Across the directory today: **1,687 clear, 46 to review, 10 flagged.** Free for public repositories; private repositories use a Team key from [usethisskill.com/pricing](https://usethisskill.com/pricing). Every rule is explained at [usethisskill.com/safety](https://usethisskill.com/safety).

## Proven skills

Star counts show who found a skill. A proof shows what it changes. On [Use This Skill](https://usethisskill.com/proven), each proven skill was run through Claude twice on the same brief, on the same model, once without the skill and once with it. Both results are saved as live pages with the model, brief and the skill's exact commit recorded, so anyone can run the comparison again.

| Skill | Category | Source |
|---|---|---|
| [canvas-design](https://usethisskill.com/skills/canvas-design) | Design | [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/canvas-design) |
| [frontend-design](https://usethisskill.com/skills/frontend-design) | Design | [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/frontend-design) |
| [theme-factory](https://usethisskill.com/skills/theme-factory) | Design | [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/theme-factory) |
| [ui-ux-pro-max](https://usethisskill.com/skills/ui-ux-pro-max) | Design | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/main/.claude/skills/ui-ux-pro-max) |
| [tailwind-design-system](https://usethisskill.com/skills/tailwind-design-system) | Design | [wshobson/agents](https://github.com/wshobson/agents/tree/main/plugins/frontend-mobile-development/skills/tailwind-design-system) |
| [web-design-guidelines](https://usethisskill.com/skills/web-design-guidelines) | Design | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines) |
| [accessibility-compliance](https://usethisskill.com/skills/accessibility-compliance) | Design | [wshobson/agents](https://github.com/wshobson/agents/tree/main/plugins/ui-design/skills/accessibility-compliance) |
| [brand-guidelines](https://usethisskill.com/skills/brand-guidelines) | Design | [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/brand-guidelines) |
| [internal-comms](https://usethisskill.com/skills/internal-comms) | Other | [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/internal-comms) |
| [changelog-generator](https://usethisskill.com/skills/changelog-generator) | Docs & Writing | [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills/tree/master/changelog-generator) |
| [test-driven-development](https://usethisskill.com/skills/test-driven-development) | Testing | [obra/superpowers](https://github.com/obra/superpowers/tree/main/skills/test-driven-development) |
| [writing-plans](https://usethisskill.com/skills/writing-plans) | Docs & Writing | [obra/superpowers](https://github.com/obra/superpowers/tree/main/skills/writing-plans) |
| [skill-creator](https://usethisskill.com/skills/skill-creator) | Testing | [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/skill-creator) |
| [systematic-debugging](https://usethisskill.com/skills/systematic-debugging) | Testing | [obra/superpowers](https://github.com/obra/superpowers/tree/main/skills/systematic-debugging) |

The first proof is free to try live. [See the proofs →](https://usethisskill.com/proven)

## Browse by category

| Category | Skills |
|---|---|
| [Automation](skills/automation.md) | 768 |
| [Design](skills/design.md) | 232 |
| [Testing](skills/testing.md) | 176 |
| [Backend](skills/backend.md) | 165 |
| [Data & Science](skills/data-science.md) | 149 |
| [Other](skills/other.md) | 67 |
| [Security](skills/security.md) | 60 |
| [Docs & Writing](skills/docs-writing.md) | 55 |
| [Motion](skills/motion.md) | 37 |
| [Frontend](skills/frontend.md) | 34 |

## Install a skill

Every skill has a one-line install command that copies the skill folder into your project:

```sh
npx degit anthropics/skills/skills/frontend-design .claude/skills/frontend-design
```

Claude Code reads `.claude/skills/` automatically. Codex, Cursor and other agents have equivalent folders; each skill's page on [usethisskill.com](https://usethisskill.com/skills) shows the command for yours.

## Where the skills come from

- [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) · 864 skills
- [sandbaseai/sandbase-skills](https://github.com/sandbaseai/sandbase-skills) · 246 skills
- [wshobson/agents](https://github.com/wshobson/agents) · 185 skills
- [K-Dense-AI/claude-scientific-skills](https://github.com/K-Dense-AI/claude-scientific-skills) · 177 skills
- [Shaisolaris/solaris-dev-shop](https://github.com/Shaisolaris/solaris-dev-shop) · 100 skills
- [trailofbits/skills](https://github.com/trailofbits/skills) · 85 skills
- [anthropics/skills](https://github.com/anthropics/skills) · 20 skills
- [obra/superpowers](https://github.com/obra/superpowers) · 15 skills
- [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) · 13 skills
- [remotion-dev/skills](https://github.com/remotion-dev/skills) · 12 skills
- [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) · 10 skills
- [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) · 9 skills
- [morluto/rea](https://github.com/morluto/rea) · 5 skills
- [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) · 1 skills
- [flashfrogluo/second-take](https://github.com/flashfrogluo/second-take) · 1 skills

Skills belong to their authors. This list links to each source and only reproduces a skill's full text on usethisskill.com when its license allows it.

## For AI assistants and search engines

A machine-readable index of the catalog is published at [usethisskill.com/llms.txt](https://usethisskill.com/llms.txt) and [usethisskill.com/llms-full.txt](https://usethisskill.com/llms-full.txt).

## Submit a skill

Open an issue with the **Add a skill repository** template. Submissions are checked, scanned and indexed, and answered on the issue, within a few hours, around the clock. Nothing waits for months here.

## Use it from inside your agent

**Claude Code plugin** (adds a `/find-proven-skill` skill and the MCP server):

```
claude plugin marketplace add nodegenie/awesome-agent-skills
claude plugin install usethisskill@usethisskill
```

**MCP server** for Claude, Claude Code, Cursor and any MCP client: `https://usethisskill.com/mcp`. Setup for each client is at [usethisskill.com/connect](https://usethisskill.com/connect).

## Contributing

Skills are discovered automatically from the source repositories every week. To add a repository that publishes skills, [open an issue](https://github.com/nodegenie/awesome-agent-skills/issues/new) with the link.

---

Last refreshed October 19, 2026. Maintained by [Tineessa Nelson](https://x.com/tineessavm) · [usethisskill.com](https://usethisskill.com)
