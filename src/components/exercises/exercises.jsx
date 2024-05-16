import React from "react";
import cl from "./exercises.module.css";
import Picture from "../../images/searchexercieses.png";

const Exercises = () => {
    return (
        
        <div className={cl.Page}>
            <div className={cl.Search}>
                <p>Введите упражнение для поиска</p>
                <div className={cl.Picture}>
                  <img src={Picture} alt="" />
                </div>
            </div>
            <div className={cl.Rectangle}></div>
        </div>
    );
}

export default Exercises;
