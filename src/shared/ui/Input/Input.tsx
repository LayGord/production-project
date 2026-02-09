import { InputHTMLAttributes, memo, useRef } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'id' > {
    id: string;
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    disabled?: boolean;
}

export const Input = memo((props: InputProps) =>{

    const {
        id,
        className,
        value,
        onChange,
        type,
        placeholder,
        disabled,
        ...otherProps
    } = props;


    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        return onChange?.(e.target.value)
    };

    const mods: Mods = {
        [cls.disabled]: disabled,
    }

    return(
        <div 
            className={ classNames(cls.Input, mods, [className]) }
        >
            <input
                id={id}
                className={cls.inputField}
                data-testid="input"
                type={type}
                value={value}
                placeholder="" // for .inputField:not(:placeholder-shown) selector
                onChange={onChangeHandler}
                disabled={disabled}
                {...otherProps}
            />
            <label htmlFor={id} className={cls.placeholder}>{placeholder}</label>
        </div>
    );
});
