import { memo } from 'react';
import ThemeLightIcon from 'shared/assets/icons/theme-light-icon.svg';
import ThemeDarkIcon from 'shared/assets/icons/theme-dark-icon.svg';
import { useTheme, Theme } from "app/providers/ThemeProvider";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";


interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme(); // все что касается тем, локализации в fsd 2.0 еще плохо
    return (
        <Button
            className={ classNames(cls.ThemeSwitcher, {}, [className]) }
            theme={ButtonTheme.ICON}
            onClick={toggleTheme}
        >
            {
                theme == Theme.LIGHT
                    ? <ThemeLightIcon />
                    : <ThemeDarkIcon /> 
            }
        </Button>
    );
});
