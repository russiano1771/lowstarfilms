import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../Routes";
import {HOME_PAGE, REGISTER_PAGE} from "../consts/Consts";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";

const AppRoutes = () => {
    const isAuth = true
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element} exact />
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact />
            )}
            <Route path={'*'} element={<Navigate to={HOME_PAGE}/>} />
        </Routes>


    );
};

export default AppRoutes;