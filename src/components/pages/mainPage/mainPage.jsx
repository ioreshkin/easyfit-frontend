import React from "react";
import Footer from "../../footer/footer";
import cl from "./mainPage.module.css";
import mainPageWoman from "../../../images/mainPageWoman.jpg";
import Navigation from "../../navigation/navigation";

const MainPage = () => {
    return (
        <div className={cl.mainPage}>
            <Navigation/>
            <div>
                <img src={mainPageWoman} className = {cl.woman}/>
                <div className ={cl.topLayer}></div>
                <div className = {cl.textOverlay}>
                    <text>Тренируйтесь с нами</text>
                </div>
            </div>
        </div>
    )
}

export default MainPage;