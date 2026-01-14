/* eslint-disable i18next/no-literal-string */
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";


interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onOpenAuthModal = useCallback(() => setIsAuthModal(true), [])
    const onCloseAuthModal = useCallback(() => setIsAuthModal(false), [])

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
