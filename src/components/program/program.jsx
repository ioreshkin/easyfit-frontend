import React from "react";
import cl from "./program.module.css";
import Picture from "..//..//images/Picture.png";
import { Link } from "react-router-dom";

const Program = ({name, description}) => {
    return (
        <div className={cl.Rectangle}>
            <div className={cl.Picture}>
                <img src={Picture} alt="" />
            </div>
            <div className={cl.Rectangle__info}>
                <div className={cl.Link}>
                    <Link to={"/programs2"}><h2>{name}</h2></Link>
                </div>
                <p2>{description}</p2>  
            </div>
            <div className={cl.time}><p1>15 мин</p1></div>
        </div>
    )
}

export default Program;