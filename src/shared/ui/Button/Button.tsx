import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ButtonTheme {
    PRIMARY = 'primary',
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear-inverted',
    ICON = 'icon',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background-inverted',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outline-inverted'
};

export enum ButtonSize {
    SIZE_M = 'size_m',
    SIZE_L = 'size_l',
    SIZE_XL = 'size_xl'
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
};

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme = ButtonTheme.PRIMARY,
        children,
        type = 'button',
        square = false,
        size = ButtonSize.SIZE_M,
        ...otherProps
    } = props;


    const mods: Record<string, boolean | string> = {
        [cls.square]: square,
        [cls[size]]: true,
    }

    return (
        <button
            className={ classNames(cls.Button, mods, [className, cls[theme]]) }
            type={type}
            {...otherProps}
        >
            {children}
        </button>
    );
};
