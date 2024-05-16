import React from "react";
import cl from "./programsPage.module.css";
import Program from "../../program/program";
import Navigation from "..//..//navigation/navigation";
import Footer from "..//..//footer/footer";


const ProgramsPage = ({setActive}) => {
    return (
        <div className={cl.rogramsPage}>
            <Navigation setActive={setActive}/>
            <div className ={cl.Program}>
                <Program/>
            </div>
            <Footer></Footer>
        </div>    
    )
}

export default ProgramsPage;