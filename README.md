<div align="center">
  <img src="https://raw.githubusercontent.com/pageel/pageel-theme-kit/main/public/icon.svg" alt="Pageel Theme Starter" width="100" height="auto" />
  <h1>Pageel Theme Starter</h1>
  <p><strong>Official standalone starter template for Astro, powered by @pageel/theme-core and W3C DTCG Design Tokens.</strong></p>

[![npm version](https://img.shields.io/badge/version-1.0.0-blue?logo=npm)](https://github.com/pageel/pageel-theme-starter)
[![Astro Integration](https://img.shields.io/badge/Astro-Integration-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Theme Contract](https://img.shields.io/badge/Theme_Contract-v1.0.0-emerald)](https://github.com/pageel/pageel-theme-kit/blob/main/THEME_CONTRACT.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

</div>

---

## ✨ Features

- 🚀 **Official Engine Integration**: Powered by `@pageel/theme-core` with zero configuration.
- 🎨 **W3C DTCG Token Pipeline**: First-class design token system via root `tokens.json` (`$value`, `$type: "color"`).
- 🥞 **CSS Cascade Layers (`@layer`)**: Built-in 6-tier layer architecture preventing specificity conflicts.
- 🌓 **Zero-FOUC Native Dark Mode**: Instant theme switching without page flicker or layout shift.
- 🛡️ **Theme Contract v1.0 Certified**: Build-time verification guaranteeing required semantic design tokens.
- 🤖 **Agentic & Vibe Coding Ready**: Clean semantic structure optimized for AI development workflows.

---

## 🚀 Quick Start

### Option 1: Using `degit` (Recommended)

```bash
# Scaffold a new project instantly
npx degit pageel/pageel-theme-starter my-new-site
cd my-new-site

# Install dependencies and start dev server
pnpm install
pnpm dev
```

### Option 2: Clone via Git

```bash
git clone https://github.com/pageel/pageel-theme-starter.git my-new-site
cd my-new-site
npm install && npm run dev
```

Your site is now running at `http://localhost:4321/` 🎉

---

## 🏗️ Architecture

```
my-new-site/
├── tokens.json            # 🎨 W3C DTCG Design Token Overrides
├── astro.config.mjs       # ⚙️ Astro & createPageelTheme() Configuration
├── src/
│   ├── pages/             # ✅ ROUTES & PAGES (Stable content)
│   ├── theme/             # 🔄 THEME UNIVERSE (Swappable UI/UX)
│   │   ├── layouts/       # Base Layout wrappers
│   │   ├── components/    # Reusable UI primitives & ThemeToggle
│   │   └── styles/        # Global styles & Tailwind v4
│   └── data/              # Static content & site metadata
```

---

## 🎨 Customizing Design Tokens

To change colors, typography, or theme attributes, modify `tokens.json` in your project root:

```json
{
  "color": {
    "semantic": {
      "accent": {
        "$value": "#ff5d01",
        "$type": "color",
        "$description": "Custom brand primary color"
      }
    }
  }
}
```

---

## 📦 Ecosystem

This starter is part of the [Pageel Theme Kit](https://github.com/pageel/pageel-theme-kit) ecosystem.

- **Parent Monorepo**: [pageel-theme-kit](https://github.com/pageel/pageel-theme-kit)
- **Core Engine**: [`@pageel/theme-core`](https://github.com/pageel/pageel-theme-kit/tree/main/packages/core)
- **Theme Contract**: [THEME_CONTRACT.md](https://github.com/pageel/pageel-theme-kit/blob/main/THEME_CONTRACT.md)

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/pageel">Pageel</a>
</p>
