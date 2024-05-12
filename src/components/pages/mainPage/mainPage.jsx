import React from "react";
import Footer from "../../footer/footer";
import cl from "./mainPage.module.css";
import phone from "../../../images/phone.png";
import pad from "../../../images/pad.png";
import laptop from "../../../images/laptop.png";
import desktop from "../../../images/desktop.png"; 
const MainPage = () => {
    return (
        <div className={cl.mainPage}>
            <div className={cl.over}>
                <div className={cl.woman}>
                </div>
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
            <div className ={cl.rectangle}>
                <div className={cl.startTraining}>
                    <div className = {cl.textInRectangle}>
                        <div>
                        <p>Занимайся в любое время, в любом месте</p>
                        <p1>Доступно на любых устройствах</p1>
                        </div>
                        <div className={cl.icons}>
                            <img src={phone} alt="" />
                            <img src={pad} alt="" />
                            <img src={laptop} alt="" />
                            <img src={desktop} alt="" />
                        </div>
                    </div>
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
// эщкере

export default MainPage;