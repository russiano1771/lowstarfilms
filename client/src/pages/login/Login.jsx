import "./Login.scss";
import React from "react";
import {Link} from "react-router-dom";
import {LOGIN_PAGE} from "../../consts/Consts";

export default function Login() {
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="container">
                <form>
                    <div className="inputNet">
                        <h1>Войти</h1>
                        <input type="email" placeholder="Email or номер телефона" />
                        <input type="password" placeholder="Ваш пароль" />
                            <button className="loginButton">Войти</button>
                    </div>
                    <div className="span">
                        <span>
            Впервые на Netflix? <b>Зарегистрируйтесь</b>
          </span>
                        <small className={'small'}>
                            Эта страница защищена Google reCAPTCHA, чтобы гарантировать, что вы не
                            бот. <b>Узнать больше</b>.
                        </small>
                    </div>
                </form>
            </div>
        </div>
    );
}