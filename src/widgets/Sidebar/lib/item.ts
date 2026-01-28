import { VFC, SVGProps } from "react";
import { RouterPaths } from "shared/config/router/routerVars";
import HomePageIcon from 'shared/assets/icons/home-icon.svg';
import AboutPageIcon from 'shared/assets/icons/about-icon.svg';
import ProfileIcon from 'shared/assets/icons/profile-icon.svg';

export interface SidebarItemType {
    path: string;
    Icon: VFC<SVGProps<SVGSVGElement>>;
    text: string;
};

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RouterPaths.main,
        Icon: HomePageIcon,
        text: 'Sidebar.main_page',
    },
    {
        path: RouterPaths.about,
        Icon: AboutPageIcon,
        text: 'Sidebar.about_page',
    },
    {
        path: RouterPaths.profile,
        Icon: ProfileIcon,
        text: 'Sidebar.profile_page',
    },
]