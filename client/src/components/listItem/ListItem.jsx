import React, {useEffect, useState} from 'react';
import './ListItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import avatar from './avatar.mp4'
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const ListItem = ({index, item}) => {
    const [isHovered, setIsHovered] = useState(false)
    const [movie, setMovie] = useState({})


    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await axios.get('/movies/find/' + item,
                    {headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmZkY2QwODg0ZDcwNWI4Y2ZiZmVmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzcxMjY4MywiZXhwIjoxNjc4MTQ0NjgzfQ.7WmHPNmp4Mopyeg2rKJ9RwYd5skufyR-RaSsMcPZ5yo"
                    }}
                )
                setMovie(response.data)
            } catch (e) {
                console.log(e);
            }
        }
        getMovies()
    }, [item])
    return (
        <Link to='/watch' state={{movie: movie }}>{/*Передаем ссылку на конкретный фильм который лежит в состоянии movie*/}

            <div
                className={'listitem'}
                style={{left: isHovered && index * 225 - 50 + index * 2.5}}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}


            >
                <img src={movie?.img} alt=""/>
                {isHovered && (
                    <>
                        <video src={avatar} autoPlay loop/>
                        <div className="itemInfo">

                            <div className="infoTop">
                                <div className="icons">
                                    <PlayArrowIcon className={'icon'}/>
                                    <AddIcon className={'icon'}/>
                                    <ThumbUpOutlinedIcon className={'icon'}/>
                                    <ThumbDownOutlinedIcon className={'icon'}/>
                                </div>


                                <div className="itemInfoTop">
                                    <span>2ч 33м</span>
                                    <span className={'limit'}>+{movie.limit}</span>
                                    <span>2022г</span>
                                </div>
                            </div>


                            <div className="desc">
                                <h3>{movie.title}</h3>
                                {movie.desc}
                            </div>
                            <div className="genre">
                                {movie.genre}
                            </div>


                        </div>
                    </>
                )}

            </div>
        </Link>

    );
};

export default ListItem;