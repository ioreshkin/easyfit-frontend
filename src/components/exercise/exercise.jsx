import React from "react";
import cl from "./exercise.module.css";
import { Link } from "react-router-dom";

const Exercise = ({info, langCode}) => {
    let name;
    let shortDescription;
    let description;
    if (langCode == "ru") {name = info.name_ru; shortDescription = info.short_description_off_page_ru; description = info.description_ru}
    else if (langCode == "en") {name = info.name_en; shortDescription = info.short_description_off_page_en; description = info.description_en}
    return (
        <Link to={"/exercises/" + info.name_en.toLowerCase()}>
            <div className={cl.Rectangle}>
                <div className={cl.ExcPicture}>
                    <img src={info.preview} alt="" />
                </div>
                <div className={cl.Rectangle__info}>
                    <div className={cl.Link}>
                        <h2>{name}</h2>
                    </div>
                    <p2>{shortDescription}</p2>
                </div>
            </div>
        </Link>
        
    );
}

export default Exercise;