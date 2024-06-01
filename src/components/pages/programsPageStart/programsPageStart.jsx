import React from "react";
import cl from "./programsPageStart.module.css";
import Program2 from "../../program2/program2";
import Footer from "../../footer/footer";


const ProgramsPageStart = ({langCode}) => {
    return (
        <div className={cl.ProgramsPageStart}>
            <Program2/>
            <Footer/>
        </div>    
    )
}

export default ProgramsPageStart;