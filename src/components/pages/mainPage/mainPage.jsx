import React from "react";
import Footer from "../../footer/footer";
import cl from "./mainPage.module.css";
import mainpageWoman from "../../../images/mainpageWoman.png";

const MainPage = () => {
    return (
        <div className={cl.mainPage}>
            <div>
                <img src={mainpageWoman} className = {cl.woman}/>
                <div className ={cl.topLayer}></div>
                <div className = {cl.textOverlay}>
                
                </div>
            </div>
        </div>
    )
}

export default MainPage;