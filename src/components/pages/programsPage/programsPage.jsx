import React from "react";
import cl from "./programsPage.module.css";
import Program from "../../program/program";


const ProgramsPage = () => {
    return (
        <div className ={cl.Program}>
            <Program/>
        </div>
    )
}

export default ProgramsPage;