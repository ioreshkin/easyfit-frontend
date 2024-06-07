import React from "react";
import cl from "./exercise.module.css";
import Picture from "../../images/exercises.png";
import { Link } from "react-router-dom";

const Exercise = ({name, description}) => {
    return (
        <div className={cl.Rectangle}>
            <div className={cl.ExcPicture}>
                <img src={Picture} alt="" />
            </div>
            <div className={cl.Rectangle__info}>
                <div className={cl.Link}>
                    <Link to={"/exerciseInfo"}><h2>{name}</h2></Link>
                </div>
                <p2>{description}</p2>
            </div>
        </div>
    );
}

export default Exercise;