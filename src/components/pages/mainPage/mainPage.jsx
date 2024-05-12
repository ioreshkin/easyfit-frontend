import React from "react";
import Footer from "../../footer/footer";
import cl from "./mainPage.module.css";
import mainPageWoman from "../../../images/mainPageWoman.png";

const MainPage = () => {
    return (
        <div className={cl.mainPage}>
            <div className={cl.woman}>
                <img src={mainPageWoman}/>
                <div className = {cl.textOverlay}>
                    <h1>Тренируйтесь с нами</h1>
                </div>
            </div>
            <div className = {cl.splitSection}>
                <div className = {cl.column}>
                    <div className={cl.circle}>
                        <p className={cl.caption}>Для зала</p>
                    </div>
                    <div className = {cl.columnText}>
                        <p>Степ-аэробика</p>
                        <p>Body Sculpt</p>
                        <p>Body Pump</p>
                    </div>
                </div>
                <div className = {cl.stick}></div>
                <div className = {cl.column}>
                    <div className={cl.circle}>
                        <p className={cl.caption}>Для дома</p>
                    </div>
                    <div className = {cl.columnText}>
                        <p>Кроссфит</p>
                        <p>Стретчинг</p>
                        <p>Калланетика</p>
                    </div>
                </div>
            </div>
            <div className ={cl.startTraining}>
                <div className={cl.rectangle}>
                    <div className ={cl.stickRectangle}></div>
                    <div className ={cl.startTrainingButton}>
                        <p>Начать тренироваться</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default MainPage;