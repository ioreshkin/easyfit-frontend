import React from "react";
import cl from "./navigation.module.css";
import LangSwitch from "../buttons/langSwitch/langSwitch";
import logo from "../../images/blackLogo.png";
import Help from "../buttons/help/help";
import { Link } from "react-router-dom";
import getLang from "../../utils/langs";

const Navigation = ({setActive, langCode, setLangCode}) => {
    const lang = getLang(langCode);
    return (
        <div className={cl.navigation}>
            <Link className={cl.logo} to="/easyfit"><img src={logo} alt=""/></Link>

            <div className={cl.links}>
                <Link to={"/easyfit/programs"}><span>{lang.programs}</span></Link>
                <Link to={"/easyfit/exercises"}><span>{lang.exercises}</span></Link>
                <Help text={lang.help} setActive={setActive}/>
                <Link to={"/easyfit/about"}><span>{lang.about}</span></Link>
            </div>
            <LangSwitch langCode={langCode} setLangCode={setLangCode}/>
        </div>
    )
}

export default Navigation;