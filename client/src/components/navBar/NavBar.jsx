import React, {useState} from 'react';
import './NavBar.scss'
import {ArrowDropDown, Notifications, Search} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

const NavBar = () => {
    const [scroll, setScroll] = useState(false)

    window.onscroll = () => {
        setScroll(window.pageYOffset !== 0)

        return () => (window.onscroll = null)
    }

    const navigate = useNavigate()
    return (
        <div className={scroll ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img onClick={() => navigate('/')} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt=""/>
                    <span className={'link'} onClick={() => navigate('/')}>Главная</span>
                    <span className={'link'} onClick={() => navigate('/series')}>Сериалы</span>
                    <span className={'link'} onClick={() => navigate('/movie')}>Фильмы</span>
                    <span className={'link'}>Хиты и новинки</span>
                    <span className={'link'}>Избранное</span>
                </div>
                <div className="right">
                    <Search className={'icon'}/>
                    <span>Поиск</span>
                    <Notifications className={'icon'}/>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/1/1b/LuckyLucianoSmaller.jpeg"
                        alt=""
                    />
                    <div className="profile">
                        <ArrowDropDown className={'icon'}/>
                            <div className="options">
                                <span>Настройки</span>
                                <span>Выйти</span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;