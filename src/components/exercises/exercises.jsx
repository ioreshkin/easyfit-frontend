import React from "react";
import cl from "./exercises.module.css";
import Picture from "../../images/coolgirls.png";
import Picture1 from "../../images/exercises.png"

const Exercises = () => {
    return (
        
        <div className={cl.Page}>
            <div className={cl.Start}>
                <div className={cl.Choice}>
                    <p>Группы мышц:</p>
                    <p1>Грудь
                        <br></br>
                        Ноги
                        <br></br>
                        Пресс
                        <br></br>
                        Руки
                        <br></br>
                        Спина
                    </p1>
                </div>
                <div className={cl.Picture}>
                    <img src={Picture} alt="" />
                </div>
            </div>  
            <div className={cl.Rectangle}>
                <div className={cl.Picture1}>
                    <img src={Picture1} alt="" />
                </div>
                <div className={cl.Rectangle__info}>
                    <p>Название тренировки тут написано</p>
                    <p1>Описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание
                    </p1>
                </div>
            </div>
        </div>
    );
}

export default Exercises;
