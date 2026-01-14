import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";


interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) =>{
    const { t } = useTranslation();
    return(
        <div 
            className={ classNames(cls.LoginForm, {}, [className]) }
            data-testid="login-form"
        >
            <span className={cls.header}>
                {t('LoginForm.header')}
            </span>
            <Input
                id="username"
                className={cls.input}
                type="text"
                placeholder={t('LoginForm.plhrUsername')}
            />
            <Input
                id="password"
                className={cls.input}
                type="text"
                placeholder={t('LoginForm.plhrPassword')}
            />
            <Button
                className={cls.loginBtn}
                type="button"
                theme={ButtonTheme.OUTLINE}
            >
                {t('LoginForm.submitBtn')}
            </Button>
        </div>
    );
};
