// The nine patterns a skill folder should not need. Shared by the site, the CLI and the GitHub Action.
export const RULES = [
  { id: "fetch-exec", level: "flag", label: "Downloads and executes code in one step", re: /\b(curl|wget|iwr|Invoke-WebRequest)\b[^\n|]*\|\s*(sudo\s+)?(ba|z|k|da)?sh\b|\|\s*iex\b|Invoke-Expression\s*\(?\s*\(?\s*(New-Object|iwr|Invoke-WebRequest)/i },
  { id: "destructive", level: "flag", label: "Destructive command against the system or home directory", re: /\brm\s+-[a-zA-Z]*r[a-zA-Z]*\s+(--no-preserve-root\s+)?("?~"?|\$HOME|\/(?!tmp|var\/tmp)[a-z]*\s|\/\s|\*\s*$)|:\(\)\s*\{\s*:\|:&\s*\};:|\bmkfs\.|\bdd\s+if=\/dev\/(zero|random)|>\s*\/dev\/sd[a-z]/m },
  { id: "exfil", level: "flag", label: "Sends data to an outside endpoint", re: /https?:\/\/[^\s"'`)]*(hooks\.slack\.com|discord(app)?\.com\/api\/webhooks|webhook\.site|requestbin|pipedream\.net|ngrok\.(io|app)|burpcollaborator|interact\.sh|oast\.(fun|live|me|pro|site|online))/i },
  { id: "obfuscation", level: "flag", label: "Obfuscated or encoded code that is then executed", re: /base64\s+(-d|--decode)[^\n|]*\|\s*(ba|z)?sh|\beval\s*\(\s*(atob|Buffer\.from)\(|\bexec\s*\(\s*base64|python[23]?\s+-c\s+["'][^"']*exec\(/i },
  { id: "override", level: "review", label: "Contains rules-override phrasing (sometimes quoted as a warning; read the line)", re: /ignore (all |any )?(previous|prior|above) instructions|do not (tell|inform|show|mention)( this)? (to )?the user|without (telling|informing|asking) the user|hide this from the user|disable (all )?(safety|guardrails)|bypass (safety|the sandbox|permissions)|you are no longer bound/i },
  { id: "credentials", level: "review", label: "References credential files or secrets on disk", re: /~\/\.ssh\/|id_rsa|~\/\.aws\/credentials|~\/\.netrc|\.env\b[^\n]*\b(cat|read|print|upload|send|post)\b|\b(cat|print|echo)\b[^\n]*\.env\b|keychain|\/etc\/shadow/i },
  { id: "privilege", level: "review", label: "Asks for elevated privileges or changes permissions broadly", re: /\bsudo\b|\bchmod\s+(-R\s+)?777\b|\bchown\s+-R\s+root\b|\bsetuid\b/i },
  { id: "persistence", level: "review", label: "Installs something that runs on its own later", re: /\bcrontab\b|\blaunchctl\s+load\b|\bsystemctl\s+enable\b|\/etc\/rc\.local|HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run/i },
  { id: "force-push", level: "review", label: "Rewrites shared git history", re: /git\s+push\s+[^\n]*(--force\b|-f\b)|git\s+reset\s+--hard\s+origin/i },
];
export const TEXT = /\.(md|mdx|txt|sh|bash|zsh|ps1|py|js|mjs|cjs|ts|tsx|json|yaml|yml|toml|rb|go|rs)$/i;
export const SKILL_DIRS = [".claude/skills", ".agents/skills", ".cursor/skills", ".codex/skills", ".gemini/skills", "skills"];
