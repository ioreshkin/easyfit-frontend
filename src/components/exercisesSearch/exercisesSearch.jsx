import React from "react";
import cl from "./exercisesSearch.module.css";
import Picture1 from "../../images/exercises.png"
import Picture2 from "../../images/howtodoit2.png";
import Picture3 from "../../images/howtodoit.png";
import Picture4 from "../../images/video.png";

const ExercisesSearch = () => {
    return (
        
        <div className={cl.Page}>
            <div className={cl.Rectangle}>
                 <div className={cl.Picture1}>
                    <img src={Picture1} alt="" />
                </div>
                <div className={cl.Rectangle__info}>
                    <p>Название упражнения</p>
                    <span>* описание
                        * описание
                        * описание
                        * описание
                    </span>
                    <p2>Тут очень длинное описание упражнения тут очень длинное описание упражнения 
                        тут очень длинное описание упражнения тут очень длинное описание упражнения 
                        тут очень длинное описание упражнения тут очень длинное описание упражнения 
                        тут очень длинное описание упражнения тут очень длинное описание упражнения 
                        тут очень длинное описание упражнения тут очень длинное описание упражнения
                    </p2>
                    <p3>Выполнение упражнения</p3>
                    <div className={cl.Howtodoit}>
                        <div className={cl.Picture2}>
                            <img src={Picture2} alt="" />
                        </div>
                        <div className={cl.Picture3}>
                            <img src={Picture3} alt="" />
                         </div>  
                    </div>
                    <p3>Видео выполнения упражнения</p3>
                    <div className={cl.Picture4}>
                        <img src={Picture4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExercisesSearch;
