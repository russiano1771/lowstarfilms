import React, {useContext, useState} from 'react';
import './Login.css'
import {AuthContext} from "../../context/authContext/AuthContext";
import {login} from '../../context/authContext/ApiCalls'
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {isFetching, dispatch} = useContext(AuthContext)
    const handleClick = (e) => {
        e.preventDefault()
        login({email, password},dispatch)
    }
    return (
        <div className={'login'}>
            <form className="loginForm">
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder={'enter email'}
                    className="loginInput"/>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder={'password'}
                    className="loginInput"/>
                <button
                    disabled={isFetching}
                    onClick={handleClick}
                    className="loginButton">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;