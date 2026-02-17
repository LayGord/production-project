import { Route, Routes, RoutesProps } from "react-router-dom";
import { RouterConfig } from "../lib/routerConfig";
import { memo, Suspense, useMemo } from "react";
import { PageLoader } from "widgets/PageLoader";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";

const AppRouter = (props: RoutesProps) => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => {
        return Object.values(RouterConfig).filter(route => {
            if(route.authOnly && !isAuth){
                return false;
            }
            return true;
        });
    }, [isAuth])

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes
                    .map(({element, path}) => (
                        <Route
                            key={path}
                            path={path}
                            element={
                                <div className="page-wrapper">
                                    {element}
                                </div>
                            }
                        />
                    ))
                }
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);