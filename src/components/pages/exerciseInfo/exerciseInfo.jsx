import React from "react";
import cl from "./exerciseInfo.module.css";
import Picture1 from "../../../images/exercises.png"
import Picture2 from "../../../images/howtodoit2.png";
import Picture3 from "../../../images/howtodoit.png";
import Picture4 from "../../../images/video.png";
import Footer from "../../footer/footer";

const ExerciseInfo = () => {
    return (
        <div className={cl.Page}>
            <div className={cl.Rectangle}>
                <div className={cl.Start}>
                    <div className={cl.Picture1}>
                        <img src={Picture1} alt="" />
                    </div>
                    <div className={cl.Rectangle__info}>
                        <p1>Название упражнения</p1>
                        <span>* описание
                        <br></br>
                              * описание
                        <br></br>
                              * описание
                        <br></br>
                              * описание
                        </span>
                    </div>
                </div>    
                <div className = {cl.ExcInf}>
                    <span>Тут очень длинное описание упражнения тут очень длинное описание упражнения тут очень длинное описание упражнения тут очень длинное описание упражнения тут очень длинное описание упражнения тут очень длинное описание упражнения тут очень длинное описание упражнения тут очень длинное описание упражнения тут очень длинное описание упражнения тут очень длинное описание упражнения
                        </span>
                 </div>
                <div className={cl.Head}>
                    <p>Выполнение упражнения</p>
                </div>
                <div className={cl.Howtodoit}>
                    <div className={cl.Picture2}>
                        <img src={Picture2} alt="" />
                    </div>
                    <div className={cl.Picture3}>
                        <img src={Picture3} alt="" />
                     </div>  
                 </div>
                <div className={cl.Head}>
                    <p>Видео выполнения упражнения</p>
                </div>
                <div className={cl.Picture4}>
                    <img src={Picture4} alt="" />
                </div>                
            </div>
            <Footer></Footer>
        </div>
    );
}

export default ExerciseInfo;
