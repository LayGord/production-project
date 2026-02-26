import { ChangeEvent, memo, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Select.module.scss";

export interface SelectOptions {
    value: string;
    content: string;
}

export enum SelectTheme {
    PRIMARY = 'primary',
    UNDERLINE = 'underline',
}

interface SelectProps {
    id?: string;
    className?: string;
    label?: string;
    options?: SelectOptions[];
    value?: string;
    onChange?: (value: string) => void;
    readOnly?: boolean;
    theme?: SelectTheme;
}

export const Select = memo((props: SelectProps) =>{
    const {
        id,
        className,
        label,
        options,
        value,
        onChange,
        readOnly = false,
        theme = SelectTheme.PRIMARY,
        ...otherProps
    } = props;
    
    const optionsList = useMemo(() => {
        return options?.map((opt) => (
            <option
                className={cls.option}
                key={opt.value}
                value={opt.value}
            >
                {opt.content}
            </option>
        ))
    }, [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }

    return(
        <div 
            className={ classNames(cls.Select, {}, [className, cls[theme]]) }
            {...otherProps}
        >
            { 
                label &&
                <span
                    className={cls.label}
                >
                    {label}
                </span>
            }
            <select
                id={id}
                className={cls.selector}
                disabled={readOnly}
                value={value}
                onChange={onChangeHandler}
            >
                { optionsList }
            </select>
        </div>
    );
});
