import React from 'react';
import axios from "axios";
import {LoginFailure, LoginStart, LoginSuccess} from "./AuthAction";

export const login = async (user, dispatch) => {
    dispatch(LoginStart())  /// отправляем начальнео состояние
    try {
        const response = await axios.post('/auth/login', user)
        response.data.isAdmin && dispatch(LoginSuccess(response.data))
        /// отправляем полученнные данные о юзере. вход доступен только админу


    } catch (e) {
        dispatch(LoginFailure())
    }
}