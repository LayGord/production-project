import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
};

export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const applyTheme = (theme: Theme) => {
        document.body.className = theme;
    };

    applyTheme(theme || Theme.LIGHT);

    const toggleTheme = () => {
        const newTheme = theme == Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        applyTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        setTheme?.(newTheme);
    };
    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
};
