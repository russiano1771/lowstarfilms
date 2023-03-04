import React, {useRef, useState} from 'react';
import './Register.scss'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {Link, useNavigate} from "react-router-dom";
import {LOGIN_PAGE} from "../../consts/Consts";

const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const emailRef = useRef()
    const passwordRef = useRef()


    const handleStart = () => {
        setEmail(emailRef.current.value) //// отправялем email на backend
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value)//// отправялем password на backend
    }
    return (
        <div className={'register'}>
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <button
                        onClick={() => navigate(LOGIN_PAGE)}
                        className="loginButton">

                            Войти
                    </button>
                </div>
            </div>
            <div className="container">
                <h1>Фильмы, сериалы и многое <span>другое без ограничений.</span></h1>
                <h2>Смотрите где угодно. Отменить подписку можно в любое время.</h2>
                <p>Готовы смотреть? Введите адрес электронной почты, чтобы оформить или возобновить подписку.</p>





                {!email ? (


                    <div className="input">
                        <input
                            type="email"
                            placeholder={"Адрес электронной почты"}
                            ref={emailRef}
                        />
                        <button
                            onClick={handleStart}
                            className="registerButton">
                            Начать смотреть
                            <NavigateNextIcon/>
                        </button>
                    </div>
                )

                :

                    (
                    <form className="input">
                    <input
                    type="password"
                    placeholder={"Ваш пароль"}
                    ref={passwordRef}
                    />
                    <button
                    onClick={handleFinish}
                    className="registerButton">
                        Зарегистрироваться
                    <NavigateNextIcon/>
                    </button>
                    </form>
                    )}







            </div>
        </div>
    );
};

export default Register;