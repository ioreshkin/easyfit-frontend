import React from "react";
import cl from "./langSwitch.module.css";
import ru from "../../../images/ru.png";

const LangSwitch = () => {
    return (
        <div className={cl.langSwitch}>
            <img src={ru} alt="" />
        </div>
    )
}

export default LangSwitch;