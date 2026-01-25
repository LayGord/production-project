import { memo, Reducer, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { getLoginFormUsername } from "../../model/selectors/getLoginFormUsername/getLoginFormUsername";
import { getLoginFormPassword } from "../../model/selectors/getLoginFormPassword/getLoginFormPassword";
import { getLoginFormIsLoading } from "../../model/selectors/getLoginFormIsLoading/getLoginFormIsLoading";
import { getLoginFormError } from "../../model/selectors/getLoginFormError/getLoginFormError";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";


const initialReducers: ReducersList = {
    loginForm: loginReducer
};

export interface LoginFormProps {
    className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) =>{
    const { t } = useTranslation();
    const username = useSelector(getLoginFormUsername);
    const password = useSelector(getLoginFormPassword);
    const isLoading = useSelector(getLoginFormIsLoading);
    const error = useSelector(getLoginFormError);
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
        // eslint-disable-next-line i18next/no-literal-string
        <DynamicModuleLoader reducers={initialReducers}>
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
        </DynamicModuleLoader>
    );
});

export default LoginForm; // for lazy