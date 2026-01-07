import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import LngIcon from 'shared/assets/icons/language-icon.svg';
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const changeLang = async () => {
        i18n.changeLanguage(
            i18n.language === 'ru'
                ? 'en'
                : 'ru'
        );
    };
    return (
        <Button
            onClick={changeLang}
            className={ classNames(cls.LangSwitcher, {}, [className]) }
            theme={ButtonTheme.ICON}
        >
            <LngIcon />
            {t('langSwitcher.language')}
        </Button>
    );
};
