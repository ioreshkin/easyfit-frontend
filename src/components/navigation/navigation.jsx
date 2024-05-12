import React from "react";
import cl from "./navigation.module.css";
import LangSwitch from "../buttons/langSwitch/langSwitch";
import Hyperlink from "../buttons/hyperlink/hyperlink";
import logo from "../../images/blackLogo.png";

const Navigation = () => {
    return (
        <div className={cl.navigation}>
            <a href="#">
                <img src={logo}/>
            </a>
            <div className={cl.links}>
                <Hyperlink text="Программы"/>
                <Hyperlink text="Упражнения"/>
                <Hyperlink text="Помощь"/>
                <Hyperlink text="О нас"/>
            </div>
            <LangSwitch/>
        </div>
    )
}

export default Navigation;