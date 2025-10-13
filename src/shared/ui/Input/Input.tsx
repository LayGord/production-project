import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    type?: string;
    placeholder?: string;
    hint?: string;
    autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder = '',
        hint = '',
        autofocus = false,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        return onChange?.(e.target.value);
    };

    const [isFocused, setIsFocused] = useState(false);

    const onBlurHandler = () => {
        setIsFocused(false);
    };

    const onFocusHandler = () => {
        setIsFocused(true);
    };

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    return (
        <div
            className={classNames(cls.InputWrapper, {}, [className])}
        >
            <div>
                { placeholder }
            </div>
            <input
                ref={ref}
                className={cls.input}
                placeholder={hint}
                value={value}
                type={type}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                {...otherProps}
            />
        </div>
    );
});
