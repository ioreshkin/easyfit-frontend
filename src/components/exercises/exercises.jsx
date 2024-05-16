import React from "react";
import cl from "./exercises.module.css";
import Picture from "..//..//images/search exercieses.png"

const Exercises = () => {
    return (
        <div>
            <div className={cl.Page}>
              <div className={cl.Search}>
                <div className={cl.Picture}>
                  <img src={Picture} alt="" />
                </div>
              </div>
              <div className={cl.Rectangle}></div>

            </div>
            
        </div>
    )
}

export default Exercises;