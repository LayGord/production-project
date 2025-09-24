import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const doReload = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            {t('unknownError.message')}
            <Button
                onClick={doReload}
                theme={ButtonTheme.CLEAR_SECONDARY}
            >
                {t('reloadPage')}
            </Button>
        </div>
    );
};
