import React from "react";
import cl from "./navigation.module.css";
import LangSwitch from "../buttons/langSwitch/langSwitch";
import Hyperlink from "../buttons/hyperlink/hyperlink";
import logo from "../../images/blackLogo.png";
import Help from "../buttons/help/help";
import { Link } from "react-router-dom";

const Navigation = ({setActive}) => {
    return (
        <div className={cl.navigation}>
            <Link className={cl.logo} to="/"><img src={logo} alt=""/></Link>

            <div className={cl.links}>
                <Link to={"/programs"}><span>Программы</span></Link>
                <Link to={"/exercises"}><span>Упражнения</span></Link>
                <Help text="Помощь" setActive={setActive}/>
                <Link to={"/about"}><span>О нас</span></Link>
            </div>
            <LangSwitch/>
        </div>
    )
}

export default Navigation;