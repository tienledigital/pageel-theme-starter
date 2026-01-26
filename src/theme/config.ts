/**
 * Theme Configuration
 * This file contains metadata about the current theme.
 * When switching themes, this file is replaced along with the theme/ folder.
 */

export const THEME_META = {
  name: 'Starter Theme',
  version: '1.0.0',
  author: 'Pageel',
  description: 'A minimal Astro theme scaffold with semantic tokens and Light/Dark mode.',
  
  // Feature flags
  features: {
    darkMode: true,
    rtl: false,
    i18n: false,
  },
  
  // Required semantic tokens (for validation)
  requiredTokens: [
    '--color-bg',
    '--color-fg',
    '--color-accent',
    '--color-muted',
    '--color-border',
    '--color-surface',
  ],
};

// Component paths for reference (import directly in .astro files)
export const THEME_COMPONENTS = {
  BaseLayout: './layouts/BaseLayout.astro',
  ThemeToggle: './components/layout/ThemeToggle.astro',
};
