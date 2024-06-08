import React from "react";
import cl from "./program.module.css";
import Picture from "..//..//images/Picture.png";
import { Link } from "react-router-dom";

const Program = ({info, langCode}) => {
    let name;
    let shortDescription;
    let description;
    if (langCode == "ru") {name = info.name_ru; shortDescription = info.short_description_ru; description = info.description_ru}
    else if (langCode == "en") {name = info.name_en; shortDescription = info.short_description_en; description = info.description_en}
    return (
        <div className={cl.Rectangle}>
            <div className={cl.Picture}>
                <img src={Picture} alt="" />
            </div>
            <div className={cl.Rectangle__info}>
                <div className={cl.Link}>
                    <Link to={"/programs/" + info.name_en}><h2>{name}</h2></Link>
                </div>
                <p2>{shortDescription}</p2>  
            </div>
            <div className={cl.time}><p1>15 мин</p1></div>
        </div>
    )
}

export default Program;