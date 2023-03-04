import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import {useEffect, useState} from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUser, setNewUser] = useState([])

  useEffect(() => {

    ///// Выводим новых пользователей на экран
    const getNewUsers = async () => {
      try {
        const response = await axios.get('/users?new=true', {headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmZkY2QwODg0ZDcwNWI4Y2ZiZmVmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzcxMjY4MywiZXhwIjoxNjc4MTQ0NjgzfQ.7WmHPNmp4Mopyeg2rKJ9RwYd5skufyR-RaSsMcPZ5yo"
          }})
        setNewUser(response.data)
      } catch (e) {
        console.log(e);
      }
    }
    getNewUsers()
  }, [])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUser.map((user) => (
                <li className="widgetSmListItem">
                  <img
                      src={user.profilePic || "https://i.pinimg.com/originals/3d/66/78/3d667893c5788613ff3590ca218a9cb2.jpg"}
                      alt=""
                      className="widgetSmImg"
                  />
                  <div className="widgetSmUser">
                    <span className="widgetSmUsername">{user.username}</span>
                  </div>
                  <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon" />
                    Display
                  </button>
                </li>
            )
        )}
      </ul>
    </div>
  );
}
