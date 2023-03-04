import React, {useEffect, useState} from 'react';
import './Featured.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import axios from "axios";



const Featured = ({type}) => {
    const [content, setContent] = useState({})

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const response = await axios.get(`/movies/random?type=${type}`,
                    {headers: {
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmZkY2QwODg0ZDcwNWI4Y2ZiZmVmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzcxMjY4MywiZXhwIjoxNjc4MTQ0NjgzfQ.7WmHPNmp4Mopyeg2rKJ9RwYd5skufyR-RaSsMcPZ5yo"
                        }})
                setContent(response.data[0])
            } catch (e) {
                console.log(e);
            }
        }
        getRandomContent()
    }, [type])
    return (
        <div className={'featured'}>
            {type && (
                <div className={'category'}>
                    <span>{type === "movie" ? "Фильмы" : "Сериалы"}</span>
                    <select name="genre" id="genre">
                        <option>Комедия</option>
                        <option>Биография</option>
                        <option>Криминал</option>
                        <option>Спорт</option>
                        <option>Мелодрама</option>
                        <option>Триллер</option>
                        <option>Детектив</option>
                        <option>Музыка</option>
                        <option>Ужасы</option>
                        <option>Драма</option>
                        <option>Мультфильмы</option>
                        <option>Фантастика</option>
                        <option>Приключения</option>
                        <option>Документальный</option>
                    </select>
                </div>
            )}
            <img src={content.img} alt=""/>
            <div className="info">
                <img src={content.imgTitle}
                               alt=""/>
                <div className="desc">{content.desc}</div>
                <div className="buttons">
                    <button className="play">
                        <PlayArrowIcon/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlinedIcon/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;