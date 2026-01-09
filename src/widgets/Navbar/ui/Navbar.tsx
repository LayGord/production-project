/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";
import { useCallback, useState } from "react";

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
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onOpenAuthModal}
                >
                    {t('navbar.login')}
                </Button>
                <Modal
                    isOpen={isAuthModal}
                    onClose={onCloseAuthModal}
                >
                    modal text
                </Modal>
            </div>
        </div>
    );
};
