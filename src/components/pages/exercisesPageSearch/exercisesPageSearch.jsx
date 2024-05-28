import React from "react";
import cl from "./exercisesPageSearch.module.css";
import ExercisesSearch from "../../exercisesSearch/exercisesSearch";
import Footer from "../../footer/footer";

const ExercisesPageSearch = ({langCode}) => {
    return (
        <div className={cl.ExercisesPageSearch}>
            <ExercisesSearch/>
            <Footer/>
        </div>   
    )
}

export default ExercisesPageSearch;