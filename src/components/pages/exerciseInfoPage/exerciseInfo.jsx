import React from "react";
import cl from "./exerciseInfo.module.css";
import Footer from "../../footer/footer";

const ExerciseInfo = ({info, langCode}) => {
    let name;
    let shortDescription;
    let description;
    if (langCode == "ru") {name = info.name_ru; shortDescription = info.short_description_on_page_ru; description = info.description_ru}
    else if (langCode == "en") {name = info.name_en; shortDescription = info.short_description_on_page_en; description = info.description_en}
    console.log(shortDescription.split("\\n"))
    return (
        <div className={cl.Page}>
            <div className={cl.Rectangle}>
                <div className={cl.Start}>
                    <div className={cl.Picture1}>
                        <img src={info.preview} alt=""/>
                    </div>
                    <div className={cl.Rectangle__info}>
                        <p1>{name}</p1>
                        <span>{shortDescription.split("\\n")[0]}</span>
                        <span>{shortDescription.split("\\n")[1]}</span>
                        <span>{shortDescription.split("\\n")[2]}</span>
                        <span>{shortDescription.split("\\n")[3]}</span>
                    </div>
                </div>    
                <div className = {cl.ExcInf}>
                    <span>{description}</span>
                 </div>
                <div className={cl.Head}>
                    <p>Выполнение упражнения</p>
                </div>
                <div className={cl.Picture4}>
                    <img src={info.gif} alt="" />
                </div>                
            </div>
            <Footer></Footer>
        </div>
    );
}

export default ExerciseInfo;
