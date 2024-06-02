import React from "react";
import cl from "./program2.module.css";
import Picture from "../../images/Picture.png";
import Picture2 from "../../images/hand.png";
import Picture3 from "../../images/video.png";
import Picture4 from "../../images/later.png"

const Program2 = () => {
    return (
        <div className={cl.Page}>
            <div className={cl.Rectangle}>
                <div className={cl.Rectangle_info}>
                    <div className={cl.Picture}>
                        <img src={Picture} alt="" />
                     </div>
                     <div className={cl.Rectangle__info}>
                         <p1>Название тренировки тут написано</p1>
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
                <div className={cl.Rectangle_Program}>
                    <span>Тут очень длинное описание упражнения тут очень длинное описание упражнения тут очень длинное описание упражнения тут очень длинное описание упражнения тут очень длинное описание упражнения тут очень длинное описание упражнения тут очень длинное описание упражнения тут очень длинное описание упражнения тут очень длинное описание упражнения тут очень длинное описание упражнения</span>
                    <p2>Тренировка состоит из XX упражнений, после выполнения каждого нажмите на кнопку “далее”.</p2>
                    <p>Выполнение упражнения</p>
                    <p3>X. Название упражнения</p3>
                    <p4>Тут написано количество повторений</p4>
                    <div className={cl.Picture2}>
                        <img src={Picture2} alt="" />
                    </div>
                    <p>Видео выполнения упражнения</p>
                    <div className={cl.Picture3}>
                        <img src={Picture3} alt="" />
                    </div>
                    <div className={cl.Picture4}>
                        <img src={Picture4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Program2;