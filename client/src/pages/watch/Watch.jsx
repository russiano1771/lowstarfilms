import React from 'react';
import './Watch.scss'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import avatar from '../../components/listItem/avatar.mp4'
import {useLocation, useNavigate} from 'react-router-dom'

const Watch = () => {
    const location = useLocation()
    const {movie} = location.state  //// принимаем данные из состояния

    const navigate = useNavigate()
    return (
        <div className={'watch'}>
            <div
                onClick={() => navigate('/')}
                className="back">
            <ArrowBackIosNewIcon/>
            Главная
            </div>
            <video autoPlay={true} progress={true} controls={true} src={movie.video} className={'video'}/>
        </div>
    );
};

export default Watch;