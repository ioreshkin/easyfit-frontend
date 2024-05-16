import React from "react";
import cl from "./exercisesPage.module.css";
import Exercises from "../../exercises/exercises";
import Navigation from "../../navigation/navigation";

const ExercisesPage = ({setActive}) => {
    return (
        <div className={ExercisesPage}>
            <Navigation setActive={setActive}/>
            <Exercises/>
            <Footer/>
        </div>   
    )
}

export default ExercisesPage;