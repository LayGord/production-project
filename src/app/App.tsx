import React, { Suspense, useEffect, useState } from 'react';

import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { LOCAL_STORAGE_THEME_KEY } from './providers/ThemeProvider/lib/ThemeContext';

const App = () => {
    const { theme, setInitTheme } = useTheme();
    // ToDo: решить проблему с темезацией
    setInitTheme();

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
