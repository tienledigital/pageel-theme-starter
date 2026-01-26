# 🍊 Pageel Theme Starter

> A premium, production-ready Astro foundation built for the era of **Agentic Coding** and **Swappable Design**.

[![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

**Pageel Theme Starter** is more than just a template. It's an architecture that separates your visual identity from your core logic, allowing you to rotate entire design systems without touching your stable routes or content.

---

## ✨ Features

- **🚀 Premium Design**: Out-of-the-box "Notion-inspired" modern landing page.
- **🔄 Swappable Architecture**: All visual code is isolated in `src/theme/`.
- **🎨 Semantic UI**: Tiered Design System using CSS Variables and Tailwind CSS.
- **🌓 Native Dark Mode**: Zero-config, persistent dark mode support.
- **🤖 AI-Optimized**: Clean project structure designed for high-performance agentic workflows.
- **⚡ Ultra Fast**: Optimized for Astro's latest island architecture.

---

## 🛠️ Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/pageel/pageel-theme-starter.git
cd pageel-theme-starter
npm install
```

### 2. Start Development

```bash
npm run dev
```

Your site is now running at `http://localhost:4321/`

---

## 🏗️ Architecture

This project follows the **Pageel Design-Stable Convention**:

```text
src/
├── theme/               # 🔄 UI UNIVERSE (The part you swap)
│   ├── styles/          # Design Tokens (Global, Semantic, Themes)
│   ├── components/      # Visual primitives
│   └── layouts/         # Structural templates
├── pages/               # ✅ ROUTES (Stable)
├── content/             # ✅ DATA (Stable)
└── theme.config.ts      # ⚙️ Integration logic
```

---

## 🎨 Customization

The theme core uses the **Pageel Orange** brand color (`#ff5d01`). To change the primary identity, edit the accent variables in:

- `src/theme/styles/theme/light.css`
- `src/theme/styles/theme/dark.css`

```css
:root {
  --accent: #ff5d01;
  --accent-hover: #e04f00;
}
```

---

## 📦 Ecosystem

This starter is part of the [Pageel Theme Kit](https://github.com/pageel/pageel-theme-kit) ecosystem. Use the `pageel-theme` CLI to install other themes or manage your design system.

- **Docs**: [theme.pageel.dev](https://theme.pageel.dev/)
- **Core**: [Pageel Theme Kit](https://github.com/pageel/pageel-theme-kit)

---

Built with ❤️ by [Pageel.com](https://pageel.com)
