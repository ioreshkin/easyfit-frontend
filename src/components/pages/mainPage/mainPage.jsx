import React from "react";
import Footer from "../../footer/footer";
import cl from "./mainPage.module.css";
import phone from "../../../images/phone.png";
import pad from "../../../images/pad.png";
import laptop from "../../../images/laptop.png";
import desktop from "../../../images/desktop.png"; 
import { getLang } from "../../../utils/langs";

const MainPage = ({langCode}) => {
    const lang = getLang(langCode)
    return (
        <div className={cl.mainPage}>
            <div className={cl.over}>
                <div className={cl.woman}>
                    <h1>{lang.train}</h1>
                </div>
            </div>
            
            <div className = {cl.splitSection}>
                <div className = {cl.column}>
                    <div className={cl.circle}>
                        <p className={cl.caption}></p>
                    </div>
                    <div className = {cl.columnText}>
                        <h2>Степ-аэробика</h2>
                        <h2>Body Sculpt</h2>
                        <h2>Body Pump</h2>
                    </div>
                </div>
                <div className = {cl.stick}></div>
                <div className = {cl.column}>
                    <div className={cl.circle}>
                        <h2 className={cl.caption}>Для дома</h2>
                    </div>
                    <div className = {cl.columnText}>
                        <h2>Кроссфит</h2>
                        <h2>Стретчинг</h2>
                        <h2>Калланетика</h2>
                    </div>
                </div>
            </div>
            <div className ={cl.rectangle}>
                <div className={cl.startTraining}>
                    <div className = {cl.textInRectangle}>
                        <div>
                        <p>Занимайся в любое время, в любом месте</p>
                        <span>Доступно на любых устройствах</span>
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

export default MainPage;