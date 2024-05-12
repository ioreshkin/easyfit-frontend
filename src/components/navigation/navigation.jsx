import React from "react";
import cl from "./navigation.module.css";
import LangSwitch from "../buttons/langSwitch/langSwitch";
import Hyperlink from "../buttons/hyperlink/hyperlink";
import logo from "../../images/blackLogo.png";

const Navigation = () => {
    return (
        <div className={cl.navigation}>
            <a href="#" className={cl.logo}>
                <img src={logo}/>
            </a>
            <div className={cl.links}>
                <Hyperlink text="Программы" btnSrc="#"/>
                <Hyperlink text="Упражнения" btnSrc="#"/>
                <Hyperlink text="Помощь" btnSrc="#"/>
                <Hyperlink text="О нас" btnSrc="#"/>
            </div>
            <LangSwitch/>
        </div>
    )
}

export default Navigation;