import React from "react";
import cl from "./exercisesPage.module.css";
import ExercisesSearch from "../../exercisesSearch/exercisesSearch";
import Navigation from "../../navigation/navigation";
import Footer from "../../footer/footer";

const ExercisesPageSearch = ({setActive}) => {
    return (
        <div className={cl.ExercisesPageSearch}>
            <Navigation setActive={setActive}/>
            <ExercisesSearch/>
            <Footer/>
        </div>   
    )
}

export default ExercisesPageSearch;