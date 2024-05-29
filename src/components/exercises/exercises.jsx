import React from "react";
import cl from "./exercises.module.css";
import Picture from "../../images/coolgirls.png";
import Picture1 from "../../images/exercises.png";
import Picture2 from "../../images/exercises2.png";
import Picture3 from "../../images/exercises3.png";
import Picture4 from "../../images/exercises4.png";
import Picture5 from "../../images/exercises5.png";
import Picture6 from "../../images/searchexercieses.png";
import { Link } from "react-router-dom";

const Exercises = () => {
    return (
        
        <div className={cl.Page}>
             <div className={cl.Search}>
               <div className={cl.Picturea}>
                  <img src={Picture6} alt="" />
                </div>
                <span>Введите упражнение для поиска</span>
            </div>
            <div className={cl.Start}>
                <div className={cl.Choice}>
                    <h2>Группы мышц:</h2>
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
                        <Link to={"/easyfit/exercisesSearch"}><p1>Название тренировки тут написано</p1></Link>
                    </div>
                    <p2>Описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание
                    </p2>
                </div>
            </div>
            <div className={cl.Rectangle}>
                <div className={cl.Picture1}>
                    <img src={Picture2} alt="" />
                </div>
                <div className={cl.Rectangle__info}>
                    <p1>Название тренировки тут написано</p1>
                    <p2>Описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание
                    </p2>
                </div>
            </div>
            <div className={cl.Rectangle}>
                <div className={cl.Picture1}>
                    <img src={Picture3} alt="" />
                </div>
                <div className={cl.Rectangle__info}>
                    <p1>Название тренировки тут написано</p1>
                    <p2>Описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание
                    </p2>
                </div>
            </div>
            <div className={cl.Rectangle}>
                <div className={cl.Picture1}>
                    <img src={Picture4} alt="" />
                </div>
                <div className={cl.Rectangle__info}>
                    <p1>Название тренировки тут написано</p1>
                    <p2>Описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание
                    </p2>
                </div>
            </div>
            <div className={cl.Rectangle}>
                <div className={cl.Picture1}>
                    <img src={Picture5} alt="" />
                </div>
                <div className={cl.Rectangle__info}>
                    <p1>Название тренировки тут написано</p1>
                    <p2>Описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание
                    </p2>
                </div>
            </div>
        </div>
    );
}

export default Exercises;
