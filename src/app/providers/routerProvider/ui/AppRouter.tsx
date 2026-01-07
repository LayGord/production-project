import { Route, Routes, RoutesProps } from "react-router-dom";
import { RouterConfig } from "../lib/routerConfig";
import { Suspense } from "react";
import { PageLoader } from "widgets/PageLoader";

export const AppRouter = (props: RoutesProps) => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {   
                    Object.values(RouterConfig)
                        .map(({path, element}) => (
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
