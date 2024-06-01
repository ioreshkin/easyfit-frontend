import React from "react";
import cl from "./exercisesPage.module.css";
import Exercise from "../../exercise/exercise";
import Footer from "../../footer/footer";
import ExcSearch from "../../../images/searchexercieses.png";
import ExcWomanYoga from "../../../images/coolgirls.png";

const ExercisesPage = ({lang}) => {
    return (
        <div className={cl.exercisesPage}>
            <div className={cl.search}>
                <img src={ExcSearch} alt="" className={cl.pictureSearch} draggable={false}/>
                <input type="text" name="exercise" placeholder="Введите упражнение для поиска"/>
            </div>
            <div className={cl.start}>
                <form>
                    <h2>Группы мышц:</h2>
                    <div className={cl.choice}>
                        <div>
                            <input type="radio" id="chest" name="group" value="chest"/>
                            <label htmlFor="chest">Грудь</label>
                        </div>
                        <div>
                            <input type="radio" id="legs" name="group" value="legs"/>
                            <label htmlFor="legs">Ноги</label>
                        </div>
                        <div>
                            <input type="radio" id="press" name="group" value="press"/>
                            <label htmlFor="press">Пресс</label>
                        </div>
                        <div>
                            <input type="radio" id="arms" name="group" value="arms"/>
                            <label htmlFor="arms">Руки</label>
                        </div>
                        <div>
                            <input type="radio" id="back" name="group" value="back"/>
                            <label htmlFor="back">Спина</label>
                        </div>
                    </div>
                </form>
                <div className={cl.pictureChoose}>
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