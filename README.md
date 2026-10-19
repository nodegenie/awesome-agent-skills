# Awesome Agent Skills

A curated, weekly-refreshed list of **1,402 agent skills** for Claude Code, Codex, Cursor and other coding agents, indexed from 11 public repositories and searchable at **[usethisskill.com](https://usethisskill.com)**.

A skill is a folder with a `SKILL.md` file that teaches a coding agent how to do one kind of job well. Agents load the skill when a task calls for it.

## Proven skills

Star counts show who found a skill. A proof shows what it changes. On [Use This Skill](https://usethisskill.com/proven), each proven skill was run through Claude twice on the same brief, on the same model, once without the skill and once with it. Both results are saved as live pages with the model, brief and the skill's exact commit recorded, so anyone can run the comparison again.

| Skill | Category | Source |
|---|---|---|
| [high-end-visual-design](https://usethisskill.com/skills/high-end-visual-design) | Design | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill/tree/main/skills/soft-skill) |
| [canvas-design](https://usethisskill.com/skills/canvas-design) | Design | [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/canvas-design) |
| [frontend-design](https://usethisskill.com/skills/frontend-design) | Design | [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/frontend-design) |
| [theme-factory](https://usethisskill.com/skills/theme-factory) | Design | [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/theme-factory) |
| [ui-ux-pro-max](https://usethisskill.com/skills/ui-ux-pro-max) | Design | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/main/.claude/skills/ui-ux-pro-max) |
| [design-taste-frontend-v1](https://usethisskill.com/skills/design-taste-frontend-v1) | Design | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill/tree/main/skills/taste-skill-v1) |
| [minimalist-ui](https://usethisskill.com/skills/minimalist-ui) | Design | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill/tree/main/skills/minimalist-skill) |
| [tailwind-design-system](https://usethisskill.com/skills/tailwind-design-system) | Design | [wshobson/agents](https://github.com/wshobson/agents/tree/main/plugins/frontend-mobile-development/skills/tailwind-design-system) |
| [web-design-guidelines](https://usethisskill.com/skills/web-design-guidelines) | Design | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines) |
| [accessibility-compliance](https://usethisskill.com/skills/accessibility-compliance) | Design | [wshobson/agents](https://github.com/wshobson/agents/tree/main/plugins/ui-design/skills/accessibility-compliance) |

The first proof is free to try live. [See the proofs →](https://usethisskill.com/proven)

## Browse by category

| Category | Skills |
|---|---|
| [Automation](skills/automation.md) | 762 |
| [Design](skills/design.md) | 144 |
| [Backend](skills/backend.md) | 108 |
| [Testing](skills/testing.md) | 96 |
| [Data & Science](skills/data-science.md) | 89 |
| [Other](skills/other.md) | 51 |
| [Security](skills/security.md) | 51 |
| [Docs & Writing](skills/docs-writing.md) | 49 |
| [Frontend](skills/frontend.md) | 28 |
| [Motion](skills/motion.md) | 24 |

## Install a skill

Every skill has a one-line install command that copies the skill folder into your project:

```sh
npx degit anthropics/skills/skills/frontend-design .claude/skills/frontend-design
```

Claude Code reads `.claude/skills/` automatically. Codex, Cursor and other agents have equivalent folders; each skill's page on [usethisskill.com](https://usethisskill.com/skills) shows the command for yours.

## Where the skills come from

- [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) · 864 skills
- [wshobson/agents](https://github.com/wshobson/agents) · 185 skills
- [K-Dense-AI/claude-scientific-skills](https://github.com/K-Dense-AI/claude-scientific-skills) · 177 skills
- [trailofbits/skills](https://github.com/trailofbits/skills) · 85 skills
- [anthropics/skills](https://github.com/anthropics/skills) · 20 skills
- [obra/superpowers](https://github.com/obra/superpowers) · 15 skills
- [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) · 13 skills
- [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) · 12 skills
- [remotion-dev/skills](https://github.com/remotion-dev/skills) · 12 skills
- [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) · 10 skills
- [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) · 9 skills

Skills belong to their authors. This list links to each source and only reproduces a skill's full text on usethisskill.com when its license allows it.

## For AI assistants and search engines

A machine-readable index of the catalog is published at [usethisskill.com/llms.txt](https://usethisskill.com/llms.txt) and [usethisskill.com/llms-full.txt](https://usethisskill.com/llms-full.txt).

## Contributing

Skills are discovered automatically from the source repositories every week. To add a repository that publishes skills, [open an issue](https://github.com/nodegenie/awesome-agent-skills/issues/new) with the link.

---

Last refreshed October 18, 2026. Maintained by [Tineessa Nelson](https://x.com/tineessavm) · [usethisskill.com](https://usethisskill.com)

## Use it from inside your agent

**Claude Code plugin** (adds a `/find-proven-skill` skill and the MCP server):

```
claude plugin marketplace add nodegenie/awesome-agent-skills
claude plugin install usethisskill@usethisskill
```

**MCP server** for Claude, Claude Code, Cursor and any MCP client: `https://usethisskill.com/mcp`. Setup for each client is at [usethisskill.com/connect](https://usethisskill.com/connect).
