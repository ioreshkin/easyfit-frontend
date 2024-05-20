import React from "react";
import cl from "./exercises.module.css";
import Picture from "../../images/coolgirls.png";
import Picture1 from "../../images/exercises.png";
import Picture2 from "../../images/exercises2.png";
import Picture3 from "../../images/exercises3.png";
import Picture4 from "../../images/exercises4.png";
import Picture5 from "../../images/exercises5.png";
import { Link } from "react-router-dom";

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
                    <div className={cl.Link}>
                        <Link to={"/easyfit/exercisesSearch"}><span>Название тренировки тут написано</span></Link>
                    </div>
                    <p1>Описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание
                    </p1>
                </div>
            </div>
            <div className={cl.Rectangle}>
                <div className={cl.Picture1}>
                    <img src={Picture2} alt="" />
                </div>
                <div className={cl.Rectangle__info}>
                    <p>Название тренировки тут написано</p>
                    <p1>Описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание
                    </p1>
                </div>
            </div>
            <div className={cl.Rectangle}>
                <div className={cl.Picture1}>
                    <img src={Picture3} alt="" />
                </div>
                <div className={cl.Rectangle__info}>
                    <p>Название тренировки тут написано</p>
                    <p1>Описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание
                    </p1>
                </div>
            </div>
            <div className={cl.Rectangle}>
                <div className={cl.Picture1}>
                    <img src={Picture4} alt="" />
                </div>
                <div className={cl.Rectangle__info}>
                    <p>Название тренировки тут написано</p>
                    <p1>Описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание
                    </p1>
                </div>
            </div>
            <div className={cl.Rectangle}>
                <div className={cl.Picture1}>
                    <img src={Picture5} alt="" />
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
