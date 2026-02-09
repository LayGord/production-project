import { CSSProperties, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Avatar.module.scss";


interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        alt,
        size = 100,
    } = props;

    const style: CSSProperties = useMemo(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <img
            className={ classNames(cls.Avatar, {}, [className]) }
            src={src}
            alt={alt}
            style={style}
        />
    );
};
