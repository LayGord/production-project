import { InputHTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' > {
    className?: string;
    value?: string
    onChange?: (value: string) => void;
}

export const Input = (props: InputProps) =>{

    const {
        className,
        value,
        onChange,
        type,
        placeholder,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        return onChange?.(e.target.value)
    };

    return(
        <input
            className={ classNames(cls.Input, {}, [className]) }
            data-testid="input"
            type={type}
            value={value}
            onChange={onChangeHandler}
            placeholder={placeholder}
            {...otherProps}
        />
    );
};
