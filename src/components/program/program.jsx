import React from "react";
import cl from "./program.module.css";
import Picture from "..//..//images/Picture.png"

const Program = () => {
    return (
        <div className={cl.Page}>
            <div className={cl.Rectangle}>
                <p>Название тренировки тут написано</p>
                <div className={cl.Picture}>
                    <img src={Picture} alt="" />
                </div>
                <p1> Описаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописаниеописание</p1>
            </div>
        </div>
    )
}

export default Program;