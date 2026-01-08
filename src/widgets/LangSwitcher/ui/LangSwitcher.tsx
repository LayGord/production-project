import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import LngIcon from 'shared/assets/icons/language-icon.svg';
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
    className?: string;
    shortLngDisplay?: boolean;
}

export const LangSwitcher = ({ className, shortLngDisplay = true }: LangSwitcherProps) => {
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
            <span>
                {
                    shortLngDisplay 
                        ? t('langSwitcher.language_short')
                        : t('langSwitcher.language_full')
                }
            </span>
        </Button>
    );
};
