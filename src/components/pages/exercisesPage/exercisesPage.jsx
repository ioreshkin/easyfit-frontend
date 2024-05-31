import React from "react";
import cl from "./exercisesPage.module.css";
import Exercise from "../../exercise/exercise";
import Footer from "../../footer/footer";
import ExcSearch from "../../../images/searchexercieses.png";
import ExcWomanYoga from "../../../images/coolgirls.png";

const ExercisesPage = ({lang}) => {
    return (
        <div className={cl.ExercisesPage}>
            <div className={cl.Search}>
               <div className={cl.PictureSearch}>
                  <img src={ExcSearch} alt="" />
                </div>
                <span>Введите упражнение для поиска</span>
            </div>
            <div className={cl.Start}>
                <div className={cl.Choice}>
                    <h2>Группы мышц:</h2>
                    <div className={cl.Grupp}>
                        <div className={cl.Circles}>
                        <div className={cl.Circle}></div>
                        <div className={cl.Circle}></div>
                        <div className={cl.Circle}></div>
                        <div className={cl.Circle}></div>
                        <div className={cl.Circle}></div>
                        </div>                       
                    <p1>Грудь
                        <br></br>
                        Ноги
                        <br></br>
                        Пресс
                        <br></br>
                        Руки
                        <br></br>
                        Спина
                    </p1>
                    </div>
                </div>
                <div className={cl.PictureChoose}>
                    <img src={ExcWomanYoga} alt="" />
                </div>
            </div>  
            <Exercise/>
            <Exercise/>
            <Exercise/>
            <Exercise/>
            <Footer/>
        </div>   
    )
}

export default ExercisesPage;