import React from "react";
import cl from "./help.module.css";

const Help = ({text, setActive}) => {
    return (
        <div className={cl.help} onClick={() => setActive(true)}>
            <p>{text}</p>
        </div>
    )
}

export default Help;