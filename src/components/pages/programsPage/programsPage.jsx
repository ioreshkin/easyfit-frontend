import React from "react";
import cl from "./programsPage.module.css";
import Program from "../../program/program";
import Footer from "..//..//footer/footer";


const ProgramsPage = ({langCode}) => {
    return (
        <div className={cl.rogramsPage}>
            <div className={cl.Choose}>
                <h2>Популярные</h2>
                <h2>Дома</h2> 
                <h2>В зале</h2>
            </div>
            <div className ={cl.Program}>
                <Program/>
            </div>
            <Footer/>
        </div>    
    )
}

export default ProgramsPage;