import React from "react";
import cl from "./programsPage2.module.css";
import Program2 from "../../program2/program2";
import Navigation from "..//..//navigation/navigation";
import Footer from "..//..//footer/footer";


const ProgramsPage2 = ({setActive}) => {
    return (
        <div className={cl.ProgramsPage2}>
            <Navigation setActive={setActive}/>
            <div className ={cl.Program2}>
                <Program2/>
            </div>
            <Footer/>
        </div>    
    )
}

export default ProgramsPage2;