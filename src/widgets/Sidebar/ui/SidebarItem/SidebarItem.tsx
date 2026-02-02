import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "widgets/Sidebar/lib/item";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SidebarItem.module.scss";
import { memo } from "react";


interface SidebarItemProps {
    itemData: SidebarItemType;
    collapsed?: boolean;
}

export const SidebarItem = memo(({ itemData, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation()
    return(
        <AppLink
            data-testid="sidebar-item"
            className={classNames(cls.SidebarItem, {[cls.collapsed]: collapsed})}
            theme={AppLinkTheme.INVERTED}
            to={itemData.path}
        >
            <itemData.Icon className={cls.icon}/>
            <span className={cls.link}>
                {t(itemData.text)}
            </span>
        </AppLink>
    );
});
