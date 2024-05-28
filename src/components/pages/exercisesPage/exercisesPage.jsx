import React from "react";
import cl from "./exercisesPage.module.css";
import Exercises from "../../exercises/exercises";
import Footer from "../../footer/footer";

const ExercisesPage = ({lang}) => {
    return (
        <div className={cl.ExercisesPage}>
            <Exercises/>
            <Footer/>
        </div>   
    )
}

export default ExercisesPage;