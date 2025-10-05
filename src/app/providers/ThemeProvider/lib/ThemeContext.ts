import { createContext } from 'react';

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export enum Theme {
    LIGHT = 'app_theme_light',
    DARK = 'app_theme_dark',
}

export const ThemeContext = createContext<ThemeContextProps>({});
export const LOCAL_STORAGE_THEME_KEY = 'theme';
