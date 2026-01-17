import { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginActions } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";


interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) =>{
    const { t } = useTranslation();

    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

    const dispatch = useDispatch();

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({username, password}))
    }, [dispatch, username, password]);

    return(
        <div 
            className={ classNames(cls.LoginForm, {}, [className]) }
            data-testid="login-form"
        >
            <Text className={cls.header} title={t('LoginForm.header')} />
            {
                error && 
                <Text 
                    className={cls.errorBlock}

                    text={t(error)}
                    theme={TextTheme.ERROR}
                />
            }
            <Input
                id="username"
                className={cls.input}
                type="text"
                placeholder={t('LoginForm.plhrUsername')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                id="password"
                className={cls.input}
                type="text"
                placeholder={t('LoginForm.plhrPassword')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cls.loginBtn}
                type="button"
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('LoginForm.submitBtn')}
            </Button>
        </div>
    );
});
