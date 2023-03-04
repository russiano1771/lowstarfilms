import React, {useRef, useState} from 'react';
import './List.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from "../listItem/ListItem";

const List = ({list}) => {
    const listRef = useRef()


    const [isMoved, setIsMoved] = useState(false)
    const [slideNumber, setSlideNumber] = useState(0)


    /// настраиваем движение слайдера на главной странице
    const handleClick = (direction) => { /// getBoundingClientRect - возвращает дом элемент с его размерами
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50 // размер картинки - 50px /// 50 px это отступ слева от всего контейнера
        if (direction === "left" && slideNumber > 0){ /// это условие не позволяет слайдеру уходить дальше, когда закончатся картинки

            setSlideNumber(slideNumber - 1)
        listRef.current.style.transform = `translateX(${230 + distance}px)`  /// 225 px это размер картинки и 5px отступ
        }
        if (direction === "right" && slideNumber < 4){ /// это условие не позволяет слайдеру уходить дальше, когда закончатся картинки
            setSlideNumber(slideNumber + 1)
        listRef.current.style.transform = `translateX(${ - 230 + distance}px)`
        }
    }



    return (
        <div className={'list'}>
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosIcon
                    className={'sliderArrow left'}
                    onClick={() => handleClick("left")}
                    style={{display: !isMoved && "none"}} /// выключает кнопку при первичном состоянии
                />
                <div className="container" ref={listRef}>
                    {list.content.map((item, i )=> (
                        <ListItem index={i} item={item}/>
                    ))}
                </div>
                <ArrowForwardIosIcon className={'sliderArrow right'} onClick={() => handleClick("right")}/>
            </div>
        </div>
    );
};

export default List;