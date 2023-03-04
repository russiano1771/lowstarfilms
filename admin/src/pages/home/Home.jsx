import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import {useEffect, useMemo, useState} from "react";
import axios from "axios";

export default function Home() {
    const MONTHS = useMemo(() =>
        [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Agu",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ], []
    )

    const [userStats, setUserStats] = useState([])

    useEffect(() => {
        const getStats = async () => {
            try {
                const response = await axios.get('/users/stats',{headers: {
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmZkY2QwODg0ZDcwNWI4Y2ZiZmVmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzcxMjY4MywiZXhwIjoxNjc4MTQ0NjgzfQ.7WmHPNmp4Mopyeg2rKJ9RwYd5skufyR-RaSsMcPZ5yo"
                        }}) //// Получаем зарегистрированных пользователей

                const statsList = response.data.sort(function (a, b) {
                    return a._id - b._id
                }) //// сортируем по правильному порядку



                statsList.map((item) => setUserStats((prev) =>
                    [...prev, {name:MONTHS[item._id - 1], "New User":item.total}]))
                //// Покажем количество зарегистрированных пользователей за месяц

            } catch (e) {
                console.log(e);
            }
        }
        getStats()
    }, [MONTHS])
    console.log(userStats);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
