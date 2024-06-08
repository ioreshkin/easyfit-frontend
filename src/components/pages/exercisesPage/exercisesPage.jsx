import React, { useEffect, useState } from "react";
import cl from "./exercisesPage.module.css";
import Exercise from "../../exercise/exercise";
import Footer from "../../footer/footer";
import ExcSearch from "../../../images/searchexercieses.png";
import ExcWomanYoga from "../../../images/coolgirls.png";
import getLang from "../../../utils/langs";

const ExercisesPage = ({langCode, group, setGroup, data, setData}) => {
    const [exercises, setExercises] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const dataArray = []
        data.map((item) => {
        if (item.name_ru.toLowerCase().includes(search) || item.description_ru.toLowerCase().includes(search) || 
          item.short_description_ru.toLowerCase().includes(search) || item.name_en.toLowerCase().includes(search) || 
          item.description_en.toLowerCase().includes(search) || item.short_description_en.toLowerCase().includes(search)) {
            dataArray.push(<Exercise info = {item} langCode={langCode}/>)
        }
        })
        setExercises(dataArray);
      }, [data]);

    const lang = getLang(langCode);
    return (
        <div className={cl.exercisesPage}>
            <div className={cl.search}>
                <img src={ExcSearch} alt="" className={cl.pictureSearch} draggable={false}/>
                <input type="text" name="exercise" placeholder={lang.exercisesSearch} onInput={(event) => setSearch(event.target.value.toLowerCase().trim())}/>
            </div>
            <div className={cl.start}>
                <form>
                    <h2>{lang.musculeGroup}</h2>
                    <div className={cl.choice}>
                        <div onClick={() => {setGroup("chest")}}>
                            <input type="radio" id="chest" name="group" value="chest"/>
                            <label htmlFor="chest">{lang.chest}</label>
                        </div>
                        <div onClick={() => {setGroup("legs")}}>
                            <input type="radio" id="legs" name="group" value="legs"/>
                            <label htmlFor="legs">{lang.legs}</label>
                        </div>
                        <div onClick={() => {setGroup("abs")}}>
                            <input type="radio" id="abs" name="group" value="abs"/>
                            <label htmlFor="abs">{lang.abs}</label>
                        </div>
                        <div onClick={() => {setGroup("arms")}}>
                            <input type="radio" id="arms" name="group" value="arms"/>
                            <label htmlFor="arms">{lang.arms}</label>
                        </div>
                        <div onClick={() => {setGroup("back")}}>
                            <input type="radio" id="back" name="group" value="back"/>
                            <label htmlFor="back">{lang.back}</label>
                        </div>
                    </div>
                </form>
                <div className={cl.pictureChoose}>
                    <img src={ExcWomanYoga} alt="" />
                </div>
            </div>  
            <div>
                {exercises}
            </div>
            
            <Footer/>
        </div>   
    )
}

export default ExercisesPage;