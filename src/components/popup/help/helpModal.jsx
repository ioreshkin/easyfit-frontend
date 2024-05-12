import React from "react";
import cl from "./helpModal.module.css";

const Help = ({active, setActive}) => {
    return (
        <div className={active ? cl.help + ' ' + cl.active : cl.help} onClick={() => setActive(false)}>
            <div className={cl.help__content} onClick={e => e.stopPropagation()}>

            </div>
        </div>
    )
}

export default Help;