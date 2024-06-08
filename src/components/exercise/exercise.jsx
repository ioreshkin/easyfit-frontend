import React from "react";
import cl from "./exercise.module.css";
import Picture from "../../images/exercises.png";
import { Link } from "react-router-dom";

const Exercise = ({info, langCode}) => {
    let name;
    let shortDescription;
    let description;
    if (langCode == "ru") {name = info.name_ru; shortDescription = info.short_description_ru; description = info.description_ru}
    else if (langCode == "en") {name = info.name_en; shortDescription = info.short_description_en; description = info.description_en}
    return (
        <div className={cl.Rectangle}>
            <div className={cl.ExcPicture}>
                <img src={Picture} alt="" />
            </div>
            <div className={cl.Rectangle__info}>
                <div className={cl.Link}>
                    <Link to={"/exercises/" + info.name_en}><h2>{name}</h2></Link>
                </div>
                <p2>{shortDescription}</p2>
            </div>
        </div>
    );
}

export default Exercise;