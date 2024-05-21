import React from "react";
import cl from "./program2.module.css";
import Picture from "..//..//images/Picture.png"

const Program2 = () => {
    return (
        <div className={cl.Page}>
            <div className={cl.Rectangle}>
                <div className={cl.Picture}>
                    <img src={Picture} alt="" />
                </div>
                <div className={cl.Rectangle__info}>
                    <p>Название тренировки тут написано</p>
                    <p1>* описание
                        <br></br>
                        * описание
                        <br></br>
                        * описание
                        <br></br>
                        * описание
                    </p1>
                </div>
            </div>
        </div>
    )
}

export default Program2;