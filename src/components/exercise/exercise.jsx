import React from "react";
import cl from "./exercise.module.css";
import Picture from "../../images/exercises.png";
import { Link } from "react-router-dom";

const Exercise = () => {
    return (
        <div className={cl.Rectangle}>
            <div className={cl.ExcPicture}>
                <img src={Picture} alt="" />
            </div>
            <div className={cl.Rectangle__info}>
                <div className={cl.Link}>
                    <Link to={"/easyfit/exerciseInfo"}><p1>Название тренировки тут написано</p1></Link>
                </div>
                <p2>Описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание
                </p2>
            </div>
        </div>
    );
}

export default Exercise;