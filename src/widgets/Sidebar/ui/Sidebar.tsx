import { useState } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { RouterPaths } from "shared/config/router/routerVars";
import HomePageIcon from 'shared/assets/icons/home-icon.svg';
import AboutPageicon from 'shared/assets/icons/about-icon.svg';
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true);
    const onToggle = () => setCollapsed(prev => !prev);
    const { t } = useTranslation();

    return (
        <div
            data-testid='sidebar'
            className={ classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className]) }
        >
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to={RouterPaths.main}
                >
                    <HomePageIcon />
                    <span className={cls.link}>
                        {t('navbar.main_page')}
                    </span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to={RouterPaths.about}
                >
                    <AboutPageicon />
                    <span className={cls.link}>
                        {t('navbar.about_page')}
                    </span>
                </AppLink>
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher 
                    shortLngDisplay={collapsed}
                />
            </div>
            <Button
                data-testid='collapse_btn'
                onClick={onToggle}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls['collapse_button']}
            >
                {collapsed ? '>>>' : '<<<'}
            </Button>
        </div>
    );
};
