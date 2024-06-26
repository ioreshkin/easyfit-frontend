import React from "react";
import cl from "./exerciseInfo.module.css";
import Footer from "../../footer/footer";
import { useEffect, useState} from 'react';

const ExerciseInfo = ({info, langCode}) => {
    const [name, setName] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [description, setDescription] = useState("");
    useEffect(()=> {
        console.log(123)
        if (langCode == "ru") 
            {setName(info.name_ru); setShortDescription(info.short_description_on_page_ru); setDescription(info.description_ru)}
        else if (langCode == "en") 
            {setName(info.name_en); setShortDescription(info.short_description_on_page_en); setDescription(info.description_en)}
    },[langCode])
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
                            <React.Fragment key={index}>
                            {line}
                            <br/>
                            </React.Fragment>
                            ))}
                        </span>
                    </div>
                </div>    
                <div className = {cl.ExcInf}>
                    <span>
                        {description.split("\\n").map((line, index) =>(
                        <React.Fragment key={index}>
                        {line}
                        <br/>
                        <br/>
                        </React.Fragment> 
                        ))}
                    </span>
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
