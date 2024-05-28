import React from "react";
import cl from "./langSwitch.module.css";
import { getLang } from "../../../utils/langs";

const LangSwitch = ({langCode, setLangCode}) => {
    const lang = getLang(langCode);
    console.log(lang);
    return (
        <div className={cl.langSwitch}>
            <img src={lang.img} alt="" />
        </div>
    )
}

export default LangSwitch;