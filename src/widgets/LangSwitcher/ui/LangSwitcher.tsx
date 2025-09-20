import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
    shortLang?: boolean;
}

export const LangSwitcher = ({ className, shortLang }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const changeLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={changeLang}
            theme={ButtonTheme.SECONDARY}
        >
            { shortLang ? t('language.short') : t('language') }
        </Button>
    );
};
