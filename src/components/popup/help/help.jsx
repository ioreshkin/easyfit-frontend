import React from "react";
import cl from "./help.module.css";

const Help = ({active, setActive}) => {
    return (
        <div className={cl.help}>
            <div className={cl.help__content}></div>
        </div>
    )
}

export default Help;