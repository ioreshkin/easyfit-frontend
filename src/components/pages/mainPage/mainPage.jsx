import React from "react";
import Footer from "../../footer/footer";
import cl from "./mainPage.module.css";
import getLang from "../../../utils/langs";
import { Link } from "react-router-dom";

const MainPage = ({langCode, setCategory}) => {
    const lang = getLang(langCode);
    return (
        <>
            <div className={cl.mainPage}>
            <div className={cl.over}>
                <div className={cl.woman}>
                    <h1>{lang.train}</h1>
                </div>
            </div>
            
            <div className = {cl.splitSection}>
                <div className = {cl.column}>
                    <Link to={"/programs"} onClick={() => {setCategory("gym"); window.scrollTo(0, 0);}}> 
                        <div className={cl.circle}>
                            <h2 className={cl.caption}>{lang.forGym}</h2>
                        </div>
                    </Link>
                    
                    <div className = {cl.columnText}>
                        <h2>{lang.forGymText1}</h2>
                        <h2>{lang.forGymText2}</h2>
                        <h2>{lang.forGymText3}</h2>
                    </div>
                </div>
                <div className = {cl.stick}></div>
                <div className = {cl.column}>
                    <Link to={"/programs"} onClick={() => {setCategory("home"); window.scrollTo(0, 0);}}>
                        <div className={cl.circle}>
                            <h2 className={cl.caption}>{lang.forHome}</h2>
                        </div>
                    </Link>
                    <div className = {cl.columnText}>
                        <h2>{lang.forHomeText1}</h2>
                        <h2>{lang.forHomeText2}</h2>
                        <h2>{lang.forHomeText3}</h2>
                    </div>
                </div>
            </div>
            <div className ={cl.rectangle}>
                <div className={cl.startTraining}>
                    <div className = {cl.textInRectangle}>
                        <div>
                        <p>{lang.anyTime}</p>
                        <span>{lang.anyDevices}</span>
                        </div>
                        <div className={cl.icons}>
                            <img src="images/mainPage/devices/phone.png" alt="" />
                            <img src="images/mainPage/devices/pad.png" alt="" />
                            <img src="images/mainPage/devices/laptop.png" alt="" />
                            <img src="images/mainPage/devices/desktop.png" alt="" />
                        </div>
                    </div>
                    <div className ={cl.stickRectangle}/>
                    <Link to={"/programs"} onClick={() => {window.scrollTo(0, 0);}}>
                        <div className ={cl.startTrainingButton}>
                            <p>{lang.startTraining}</p>
                        </div>
                    </Link>
                    
                </div>
            </div>
           
        </div>
        <Footer/>
        </>
        
    )
}

export default MainPage;