import { InputHTMLAttributes, memo, useRef } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'id' > {
    id: string;
    className?: string;
    value?: string
    onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) =>{

    const {
        id,
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
        <div 
            className={ classNames(cls.Input, {}, [className]) }
        >
            <input
                id={id}
                className={cls.inputField}
                data-testid="input"
                type={type}
                value={value}
                placeholder="" // for .inputField:not(:placeholder-shown) selector
                onChange={onChangeHandler}
                {...otherProps}
            />
            <label htmlFor={id} className={cls.placeholder}>{placeholder}</label>
        </div>
    );
});
