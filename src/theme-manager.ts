/**
 * ThemeManager - Quản lý logic và tương thích Theme
 * 
 * File này đóng vai trò là "Cầu nối" (Bridge) giữa cấu hình dự án và dữ liệu của Theme.
 * Giúp kiểm tra xem Theme đang active có hỗ trợ các tính năng mà dự án yêu cầu hay không.
 */

import { THEME_META } from './theme/config';
import projectThemeConfig from './theme.config';

export class ThemeManager {
    /**
     * Lấy cấu hình cuối cùng (đã gộp giữa Theme mặc định và Project override)
     */
    static getConfiguration() {
        return {
            name: THEME_META.name,
            version: THEME_META.version,
            activeTheme: projectThemeConfig.activeTheme,
            features: {
                ...THEME_META.features,
                ...projectThemeConfig.features
            }
        };
    }

    /**
     * Kiểm tra tính tương thích
     * Đảm bảo Theme đang active có đủ các Token bắt buộc
     */
    static validateCompatibility() {
        const required = THEME_META.requiredTokens || [];
        const missing = [];

        // Trong môi trường Browser, có thể kiểm tra trực tiếp CSS Variables
        if (typeof window !== 'undefined') {
            const style = getComputedStyle(document.documentElement);
            for (const token of required) {
                if (!style.getPropertyValue(token)) {
                    missing.push(token);
                }
            }
        }

        return {
            isCompatible: missing.length === 0,
            missingTokens: missing
        };
    }

    /**
     * Helper để lấy class Dark Mode dựa trên config
     */
    static getThemeClass(currentTheme: string) {
        if (!projectThemeConfig.features.darkMode) return '';
        return currentTheme === 'dark' ? 'dark-mode' : 'light-mode';
    }
}

export default ThemeManager;
