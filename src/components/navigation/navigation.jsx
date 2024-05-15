import React from "react";
import cl from "./navigation.module.css";
import LangSwitch from "../buttons/langSwitch/langSwitch";
import Hyperlink from "../buttons/hyperlink/hyperlink";
import logo from "../../images/blackLogo.png";
import Help from "../buttons/help/help";

const Navigation = ({setActive}) => {
    return (
        <div className={cl.navigation}>
            <a className={cl.logo} href="#">
                <img src={logo} alt=""/>
            </a>
            <div className={cl.links}>
                <Hyperlink text="Программы" btnSrc="#"/>
                <Hyperlink text="Упражнения" btnSrc="#"/>
                <Help text="Помощь" setActive={setActive}/>
                <Hyperlink text="О нас" btnSrc="#"/>
            </div>
            <LangSwitch/>
        </div>
    )
}

export default Navigation;