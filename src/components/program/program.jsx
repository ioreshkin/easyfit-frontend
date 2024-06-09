import React from "react";
import cl from "./program.module.css";
import { Link } from "react-router-dom";

const Program = ({info, langCode}) => {
    let name;
    let shortDescription;
    let description;
    let time;
    if (langCode == "ru") {name = info.name_ru; shortDescription = info.short_description_ru; description = info.description_ru; time = info.time_ru}
    else if (langCode == "en") {name = info.name_en; shortDescription = info.short_description_en; description = info.description_en; time = info.time_en}
    return (
        <Link to={"/programs/" + info.name_en.toLowerCase()}>
            <div className={cl.Rectangle}>
                <div className={cl.Picture}>
                    <img src={info.preview} alt="" />
                </div>
                <div className={cl.Rectangle__info}>
                    <div className={cl.Link}>
                        <h2>{name}</h2>
                    </div>
                    <p2>{shortDescription}</p2>  
                </div>
                <div className={cl.time}><p1>{time}</p1></div>
            </div>
        </Link>
        
    )
}

export default Program;