/**
 * Project Theme Configuration
 * 
 * This file controls which theme is active for the project.
 * Place this file at your project root (src/theme.config.ts).
 * 
 * Usage:
 * 1. Set `activeTheme` to the theme folder name
 * 2. The theme folder should be at `src/theme/`
 * 3. To switch themes, replace `src/theme/` folder and update this config
 */

export interface ThemeConfig {
  /** Name of the active theme (for display/logging) */
  activeTheme: string;
  
  /** Theme version (from theme/config.ts) */
  version: string;
  
  /** Feature overrides (override theme defaults) */
  features?: {
    darkMode?: boolean;
    rtl?: boolean;
    i18n?: boolean;
  };
  
  /** Custom tokens to override theme defaults */
  customTokens?: Record<string, string>;
}

// Default configuration
const themeConfig: ThemeConfig = {
  activeTheme: 'starter',
  version: '1.0.0',
  
  // Override theme features if needed
  features: {
    darkMode: true,
  },
  
  // Override specific tokens (optional)
  // customTokens: {
  //   '--color-accent': '#your-brand-color',
  // },
};

export default themeConfig;
