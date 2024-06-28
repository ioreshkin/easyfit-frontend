import React from "react";
import cl from "./exerciseInfo.module.css";
import Footer from "../../footer/footer";
import getLang from "../../../utils/langs";

const ExerciseInfo = ({info, langCode}) => {
    let name;
    let shortDescription;
    let description;
    const lang = getLang(langCode)
    if (langCode == "ru") {name = info.name_ru; shortDescription = info.short_description_on_page_ru; description = info.description_ru}
    else if (langCode == "en") {name = info.name_en; shortDescription = info.short_description_on_page_en; description = info.description_en}
    return (
        <div className={cl.Page}>
            <div className={cl.Rectangle}>
                <div className={cl.Start}>
                    <div className={cl.Picture1}>
                        <img src={info.preview} alt=""/>
                    </div>
                    <div className={cl.Rectangle__info}>
                        <p1>{name}</p1>
                        <span>
                            {shortDescription.split('\\n').map((line, index) => (
                            <>
                            {line}
                            <br/>
                            </>
                            ))}
                        </span>
                    </div>
                </div>    
                <div className = {cl.ExcInf}>
                    <span>
                        {description.split("\\n").map((line, index) =>(
                        <>
                        {line}
                        <br/>
                        <br/>
                        </> 
                        ))}
                    </span>
                 </div>
                <div className={cl.Head}>
                    <p>{lang.execution}</p>
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
