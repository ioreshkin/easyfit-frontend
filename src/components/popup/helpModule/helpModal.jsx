import React from "react";
import cl from "./helpModal.module.css";

const HelpModal = ({active, setActive}) => { 
    const classes = cl.helpModal + " " + cl.active;
    return (
        <div className={active ? classes : cl.helpModal} onClick={() => setActive(false)}>
            <div className={cl.helpModal__content} onClick={e => e.stopPropagation()}>

            </div>
        </div>
    )
}

export default HelpModal;