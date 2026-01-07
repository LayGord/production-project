import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ButtonTheme {
    PRIMARY = 'primary',
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear-inverted',
    ICON = 'icon',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
};

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme = ButtonTheme.PRIMARY,
        children,
        type = 'button',
        ...otherProps
    } = props;

    return (
        <button
            className={ classNames(cls.Button, {}, [className, cls[theme]]) }
            type={type}
            {...otherProps}
        >
            {children}
        </button>
    );
};
