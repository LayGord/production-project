import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext }
    from '../lib/ThemeContext';

interface UseThemeResult {
    theme: Theme,
    toggleTheme: () => void,
    setInitTheme: () => void,
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme);
        document.body.className = newTheme; // раньше клали theme на <App />
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    const setInitTheme = () => {
        document.body.className = localStorage.getItem(
            LOCAL_STORAGE_THEME_KEY,
        ) || 'app_theme_light';
    };

    return {
        theme,
        toggleTheme,
        setInitTheme,
    };
}
