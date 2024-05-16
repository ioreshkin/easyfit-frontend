import React from "react";
import cl from "./program.module.css";

const Program = () => {
    return (
        <div>
            <div className={cl.Rectangle}>
                <p className={cl.Caption}></p>
                <div className={cl.Picture}></div>
                <p className ={cl.Description}></p>
            </div>
        </div>
    )
}

export default Program;