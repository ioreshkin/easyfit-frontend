import React from "react";
import cl from "./langSwitch.module.css";
import getLang from "../../../utils/langs";

const LangSwitch = ({langCode, setLangCode}) => {
    const lang = getLang(langCode);
    return (
        <div className={cl.langSwitch} onClick={ () => langCode=="en" ? setLangCode("ru") : setLangCode("en")} >
            <img src={lang.img} alt="" className={langCode=="en" ? cl.en : ""} />
        </div>
    )
}

export default LangSwitch;