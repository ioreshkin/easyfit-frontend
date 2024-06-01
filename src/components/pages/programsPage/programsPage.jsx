import React from "react";
import cl from "./programsPage.module.css";
import Program from "../../program/program";
import Footer from "..//..//footer/footer";
import getLang from "../../../utils/langs";

const ProgramsPage = ({langCode, category, setCategory}) => {
    const lang = getLang(langCode);
    return (
        <div className={cl.programsPage}>
            <div className={cl.contentWrapper}>
                <div className={cl.Choose}>
                    <h2 className={category == "popular" ? cl.selected : ""} onClick={() => setCategory("popular")}>{lang.popular}</h2>
                    <h2 className={category == "home" ? cl.selected : ""} onClick={() => setCategory("home")}>{lang.home}</h2> 
                    <h2 className={category == "gym" ? cl.selected : ""} onClick={() => setCategory("gym")}>{lang.gym}</h2>
                </div>
                <div className ={cl.Programs}>
                    <Program/>
                </div>
            </div>
            
            <Footer/>
        </div>    
    )
}

export default ProgramsPage;