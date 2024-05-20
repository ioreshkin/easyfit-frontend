import React from "react";
import cl from "./program.module.css";
import Picture from "..//..//images/Picture.png"

const Program = () => {
    return (
        <div className={cl.Page}>
            <div className={cl.Rectangle}>
                <div className={cl.Picture}>
                    <img src={Picture} alt="" />
                </div>
                <div className={cl.Rectangle__info}>
                    <p>Название тренировки тут написано</p>
                    <p1> Описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание
                    </p1>
                </div>
            </div>
        </div>
    )
}

export default Program;