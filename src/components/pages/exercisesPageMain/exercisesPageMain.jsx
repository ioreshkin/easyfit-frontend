import React from "react";
import cl from "./exercisesPage.module.css";
import Exercises from "../../exercises/exercises";
import Navigation from "../../navigation/navigation";
import Footer from "../../footer/footer";

const ExercisesPageMain = ({setActive}) => {
    return (
        <div className={cl.ExercisesPageMain}>
            <Navigation setActive={setActive}/>
            <Exercises/>
            <Footer/>
        </div>   
    )
}

export default ExercisesPageMain;