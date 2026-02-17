import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";
import { RouteProps } from "react-router-dom";
import { AppRoutes, RouterPaths } from "shared/config/router/routerVars";

type AppRouteProps = RouteProps & {
    authOnly?: boolean;
}

export const RouterConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPaths.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RouterPaths.about,
        element: <AboutPage />
    },
    [AppRoutes.PROFILE]: {
        path: RouterPaths.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RouterPaths.not_found,
        element: <NotFoundPage />
    },
}