import React, { useEffect, useState } from "react";
import cl from "./programsPage.module.css";
import Program from "../../program/program";
import Footer from "..//..//footer/footer";
import getLang from "../../../utils/langs";

const ProgramsPage = ({langCode, category, setCategory, data}) => {
    const [programs, setPrograms] = useState([]);
    useEffect(() => {
        const dataArray = [];
        data.map((item) => {
            dataArray.push(<Program key={item.name_ru} info = {item} langCode = {langCode}/>)
        })
        setPrograms(dataArray);
      }, [data, langCode]);

    const lang = getLang(langCode);
    return (
        <div className={cl.programsPage}>
            <div className={cl.contentWrapper}>
                <div className={cl.choose}>
                    <h2 className={category == "" ? cl.selected : ""} onClick={() => {setCategory("")}}>{lang.popular}</h2>
                    <h2 className={category == "home" ? cl.selected : ""} onClick={() => {setCategory("home")}}>{lang.home}</h2> 
                    <h2 className={category == "gym" ? cl.selected : ""} onClick={() => {setCategory("gym")}}>{lang.gym}</h2>
                </div>
                <div className ={cl.programs}>
                    {programs}
                </div>
            </div>
            
            <Footer/>
        </div>    
    )
}

export default ProgramsPage;