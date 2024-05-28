import React from "react";
import cl from "./programsPage.module.css";
import Program from "../../program/program";
import Footer from "..//..//footer/footer";


const ProgramsPage = ({langCode}) => {
    return (
        <div className={cl.rogramsPage}>
            <div className ={cl.Program}>
                <Program/>
            </div>
            <Footer></Footer>
        </div>    
    )
}

export default ProgramsPage;