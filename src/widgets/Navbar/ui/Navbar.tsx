import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { LoginModal } from "features/AuthByUsername";
import { getUserAuthData, userActions } from "entities/User";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";


interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);

    const onOpenAuthModal = useCallback(() => setIsAuthModal(true), []);
    const onCloseAuthModal = useCallback(() => setIsAuthModal(false), []);
    const onLogout = useCallback(() => {
        dispatch(userActions.clearAuthData())
    }, [dispatch]);


    if (authData) {
        return (
            <div className={ classNames(cls.Navbar, {}, [className]) }>
                <div className={cls.links}>
                    <Button
                        className={cls.loginBtn}
                        theme={ButtonTheme.CLEAR_INVERTED}
                        onClick={onLogout}
                    >
                        {t('Navbar.logout')}
                    </Button>
                </div>
            </div>
        );
    };

    return (
        <div className={ classNames(cls.Navbar, {}, [className]) }>
            <div className={cls.links}>
                <Button
                    className={cls.loginBtn}
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onOpenAuthModal}
                >
                    {t('Navbar.login')}
                </Button>
                <LoginModal
                    lazy
                    isOpen={isAuthModal}
                    onClose={onCloseAuthModal}
                />
            </div>
        </div>
    );
};
