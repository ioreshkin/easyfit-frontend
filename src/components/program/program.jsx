import React from "react";
import cl from "./program.module.css";
import Picture from "..//..//images/Picture.png";
import { Link } from "react-router-dom";

const Program = () => {
    return (
        <div className={cl.Page}>
            <div className={cl.Rectangle}>
                <div className={cl.Picture}>
                    <img src={Picture} alt="" />
                </div>
                <div className={cl.Rectangle__info}>
                    <div className={cl.Link}>
                        <Link to={"/easyfit/programs2"}><h2>Название тренировки тут написано</h2></Link>
                    </div>
                    <p2> Описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание</p2>  
                </div>
                <p1 className={cl.time}>15 мин</p1>
            </div>
        </div>
    )
}

export default Program;