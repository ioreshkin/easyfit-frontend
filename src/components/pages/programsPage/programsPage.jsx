import React, { useEffect, useState } from "react";
import cl from "./programsPage.module.css";
import Program from "../../program/program";
import Footer from "..//..//footer/footer";
import getLang from "../../../utils/langs";

const ProgramsPage = ({langCode, category, setCategory}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://127.0.0.1:3002/programs/' + category);
            const jsonData = await response.json();
            const dataArray = [];
    
            jsonData.map((item) => {
                let name;
                let shortDescription;
                if (langCode == "ru") {name = item.name_ru; shortDescription = item.short_description_ru}
                if (langCode == "en") {name = item.name_en; shortDescription = item.short_description_en}
                dataArray.push(<Program name={name} description={shortDescription}/>)
            })

            setData(dataArray);
        };
        fetchData();
      }, [data]);

    const lang = getLang(langCode);
    return (
        <div className={cl.programsPage}>
            <div className={cl.contentWrapper}>
                <div className={cl.choose}>
                    <h2 className={category == "" ? cl.selected : ""} onClick={() => {setCategory(""); setData([data])}}>{lang.popular}</h2>
                    <h2 className={category == "home" ? cl.selected : ""} onClick={() => {setCategory("home"); setData([data])}}>{lang.home}</h2> 
                    <h2 className={category == "gym" ? cl.selected : ""} onClick={() => {setCategory("gym"); setData([data])}}>{lang.gym}</h2>
                </div>
                <div className ={cl.programs}>
                    {data}
                </div>
            </div>
            
            <Footer/>
        </div>    
    )
}

export default ProgramsPage;