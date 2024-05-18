import React from "react";
import cl from "./exercises.module.css";
import Picture from "../../images/searchexercieses.png";
import Picture1 from "../../images/exercises.png"

const Exercises = () => {
    return (
        
        <div className={cl.Page}>
            <div className={cl.Search}>
               <div className={cl.Picture}>
                  <img src={Picture} alt="" />
                </div>
                <p>Введите упражнение для поиска</p>
            </div>
            <div className={cl.Rectangle}>
                 <div className={cl.Picture1}>
                    <img src={Picture1} alt="" />
                </div>
                <div className={cl.Rectangle__info}>
                    <p>Название упражнения</p>
                    <p1>* описание
                        * описание
                        * описание
                        * описание
                    </p1>
                    <p2>Тут очень длинное описание упражнения тут очень длинное описание упражнения 
                        тут очень длинное описание упражнения тут очень длинное описание упражнения 
                        тут очень длинное описание упражнения тут очень длинное описание упражнения 
                        тут очень длинное описание упражнения тут очень длинное описание упражнения 
                        тут очень длинное описание упражнения тут очень длинное описание упражнения
                    </p2>
                </div>
            </div>
        </div>
    );
}

export default Exercises;
