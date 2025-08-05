import React, { Suspense, useContext, useState } from "react";
import { Route, Routes, Link } from 'react-router-dom'
import './styles/index.scss';

import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";

const App = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}> О сайте</Link>
            <AppRouter />
        </div>
    )
};

export default App;