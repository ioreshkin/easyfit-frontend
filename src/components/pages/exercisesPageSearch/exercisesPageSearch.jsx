import React from "react";
import cl from "./exercisesPageSearch.module.css";
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