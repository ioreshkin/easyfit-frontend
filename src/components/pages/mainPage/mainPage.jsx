import React from "react";
import Footer from "../../footer/footer";
import cl from "./mainPage.module.css";
import mainpageWoman from "../../../images/mainpageWoman.png";
import Navigation from "../../navigation/navigation";

const MainPage = () => {
    return (
        <div className={cl.mainPage}>
            <Navigation/>
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