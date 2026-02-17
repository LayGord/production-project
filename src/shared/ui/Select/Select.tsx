import { ChangeEvent, memo, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Select.module.scss";

export interface SelectOptions {
    value: string;
    content: string;
}

interface SelectProps {
    id?: string;
    className?: string;
    label?: string;
    options?: SelectOptions[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo((props: SelectProps) =>{
    const {
        id,
        className,
        label,
        options,
        value,
        onChange,
        readonly = false,
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
            className={ classNames(cls.Select, {}, [className]) }
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
                disabled={readonly}
                value={value}
                onChange={onChangeHandler}
            >
                { optionsList }
            </select>
        </div>
    );
});
