import React from "react";
import Home from "./pages/home/Home";
import './App.scss'
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import {exact} from "prop-types";
import {BrowserRouter, Navigate, Route, Routes,} from "react-router-dom";
import AppRoutes from "./components/AppRoutes";


function App() {
    const isAuth = false
  return (
      <BrowserRouter>
         <AppRoutes/>
      </BrowserRouter>


  )
}


export default App;
