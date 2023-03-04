import {HOME_PAGE, LOGIN_PAGE, MOVIES_PAGE, REGISTER_PAGE, SERIES_PAGE, WATCH_PAGE} from "./consts/Consts";
import Register from "./pages/register/Register";
import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import {type} from "@testing-library/user-event/dist/type";
import Watch from "./pages/watch/Watch";


export const publicRoutes = [
    {
        path: HOME_PAGE,
        Component: Register
    },
    {
        path: LOGIN_PAGE,
        Component: Login
    },
]
export const authRoutes = [
    {
        path: MOVIES_PAGE,
        element: <Home type={'movie'}/>
    },
    {
        path: SERIES_PAGE,
        element: <Home type={'series'}/>
    },
    {
        path: HOME_PAGE,
        element: <Home/>
    },
    {
        path: WATCH_PAGE,
        element: <Watch/>
    },

]