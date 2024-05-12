import React from "react";
import Footer from "../../footer/footer";
import cl from "./mainPage.module.css";
import mainPageWoman from "../../../images/mainPageWoman.jpg";
import Navigation from "../../navigation/navigation";
import Help from "../../popup/help/help";

const MainPage = () => {
    return (
        <div className={cl.mainPage}>
            <Help/>
            <Navigation/>
            <div className={cl.woman}>
                <img src={mainPageWoman}/>
                <div className = {cl.textOverlay}>
                    <h1>Тренируйтесь с нами</h1>
                </div>
            </div>
            <div className = {cl.splitSection}>
                <div className = {cl.leftColumn}>
                    <div className={cl.circle}>
                        <p className={cl.caption}>Для зала</p>
                    </div>
                    <div className = {cl.leftColumnText}>
                        <p>Степ-аэробика</p>
                        <p>Body Sculpt</p>
                        <p>Body Pump</p>
                    </div>
                </div>
                <div className = {cl.stick}></div>
                <div className = {cl.rightColumn}>
                    <div className={cl.circle}>
                        <p className={cl.caption}>Для дома</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default MainPage;