import React from "react";
import cl from "./exercises.module.css";
import Picture from "../../images/searchexercieses.png";
import Picture1 from "../../images/exercises.png"

const Exercises = () => {
    return (
        
        <div className={cl.Page}>
            <div className={cl.Search}>
                <p>Введите упражнение для поиска</p>
                <div className={cl.Picture}>
                  <img src={Picture} alt="" />
                </div>
            </div>
            <div className={cl.Rectangle}>
                <p1>Название упражнения</p1>
                <div className={cl.Picture1}>
                    <img src={Picture1} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Exercises;
