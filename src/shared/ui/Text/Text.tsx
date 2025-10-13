import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextThemes {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextThemes;
}

export const Text = (props: TextProps) => {
    const {
        className,
        title = '',
        text = '',
        theme = TextThemes.PRIMARY,
    } = props;

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
            { title && <div className={cls.title}>{title}</div>}
            { text && <div className={cls.text}>{text}</div>}
        </div>
    );
};
