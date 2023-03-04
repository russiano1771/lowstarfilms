import React, {useEffect, useState} from 'react';
import './Home.scss'
import NavBar from "../../components/navBar/NavBar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import axios from "axios";

const Home = ({type}) => {
    const [lists, setLists] = useState([])
    const [genre, setGenre] = useState(null)

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const response = await axios.get(
                    `lists${type? "?type=" + type: ""}${genre? "&genre=" + genre : ""}`,
                    {headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmZkY2QwODg0ZDcwNWI4Y2ZiZmVmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzcxMjY4MywiZXhwIjoxNjc4MTQ0NjgzfQ.7WmHPNmp4Mopyeg2rKJ9RwYd5skufyR-RaSsMcPZ5yo"
                        }}

                )
                setLists(response.data)
            } catch (e) {
                console.log(e);
            }
        }
        getRandomLists()
    },[type, genre])
    return (
        <div className={'home'}>
            <NavBar/>
            <Featured type={type}/>
            {lists.map((list) =>
                <List list={list}/>
            )}
        </div>
    );
};

export default Home;