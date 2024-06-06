import React from "react";
import cl from "./navigation.module.css";
import LangSwitch from "../buttons/langSwitch/langSwitch";
import logo from "../../images/blackLogo.png";
import Help from "../buttons/help/help";
import { Link } from "react-router-dom";
import getLang from "../../utils/langs";
import vk from "../../images/vk 1.png";

const Navigation = ({setActive, langCode, setLangCode}) => {
    const lang = getLang(langCode);
    return (
        <div className={cl.navigation}>
            <Link className={cl.logo} to="/" onClick={() => {window.scrollTo(0, 0);}}><img src={logo} alt=""/></Link>
            <Link className ={cl.VK} to="/about"> <img src ={vk} alt =""/></Link>
            <div className={cl.links}>
                <Link to={"/programs"} onClick={() => {window.scrollTo(0, 0);}}><span>{lang.programs}</span></Link>
                <Link to={"/exercises"} onClick={() => {window.scrollTo(0, 0);}}><span>{lang.exercises}</span></Link>
                <Help text={lang.help} setActive={setActive}/>
                <Link to={"/about"} onClick={() => {window.scrollTo(0, 0);}}><span>{lang.about}</span></Link>
            </div>
            <LangSwitch langCode={langCode} setLangCode={setLangCode}/>
        </div>
    )
}

export default Navigation;