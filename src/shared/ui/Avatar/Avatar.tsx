import { CSSProperties, useMemo } from "react";
import UploadIcon from 'shared/assets/icons/upload-icon.svg';
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Avatar.module.scss";
import { Button, ButtonTheme } from "../Button/Button";

export enum AvatarTheme {
    DEFAULT = 'default',
    ROUNDED = 'rounded'
}

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
    editable?: boolean;
    theme?: AvatarTheme;
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        alt,
        size = 100,
        editable = false,
        theme = AvatarTheme.DEFAULT
    } = props;

    const style: CSSProperties = useMemo(() => ({
        width: size,
        height: size,
    }), [size]);

    if (editable) {
        return (
            <div
                className={ classNames(cls.Avatar, {}, [className, cls[theme]]) }
            >
                <img
                    className={cls.image}
                    src={src}
                    alt={alt}
                    style={style}
                />
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.CLEAR}
                    style={style}
                >
                    <UploadIcon />
                </Button>
            </div>
        )
    }

    return (
        <div
            className={ classNames(cls.Avatar, {}, [className, cls[theme]]) }
        >
            <img
                className={cls.image}
                src={src}
                alt={alt}
                style={style}
            />
        </div>
    );
};
