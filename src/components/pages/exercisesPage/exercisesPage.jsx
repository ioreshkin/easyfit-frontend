import React, { useEffect, useState } from "react";
import cl from "./exercisesPage.module.css";
import Exercise from "../../exercise/exercise";
import Footer from "../../footer/footer";
import getLang from "../../../utils/langs";

const ExercisesPage = ({langCode, group, setGroup, data}) => {
    const [exercises, setExercises] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const dataArray = [];
        
        data.map((item) => {
        if (item.name_ru.toLowerCase().includes(search) || item.description_ru.toLowerCase().includes(search) || 
          item.short_description_off_page_ru.toLowerCase().includes(search) || item.name_en.toLowerCase().includes(search) || 
          item.description_en.toLowerCase().includes(search) || item.short_description_off_page_en.toLowerCase().includes(search)) {
            dataArray.push(<Exercise key={item.id} info = {item} langCode={langCode}/>)
        }
        })
        setExercises(dataArray);
      }, [data, search, langCode]);

    const lang = getLang(langCode);
    return (
        <>
            <div className={cl.exercisesPage}>
                <div className={cl.search}>
                    <img src="/images/exercisesPage/searchexercieses.png" alt="" className={cl.pictureSearch} draggable={false}/>
                    <input type="text" name="exercise" placeholder={lang.exercisesSearch} onInput={(event) => {setSearch(event.target.value.toLowerCase().trim())}}/>
                </div>
                <div className={cl.start}>
                    <form>
                        <h2>{lang.musculeGroup}</h2>
                        <div className={cl.choice}>
                            <div onClick={() => {group == "chest" ? setGroup("") : setGroup("chest")}}>
                                <input type="radio" id="chest" name="group" value="chest" checked={group=="chest" ? true : false}/>
                                <span htmlFor="chest">{lang.chest}</span>
                            </div>
                            <div onClick={() => {group == "legs" ? setGroup("") : setGroup("legs")}}>
                                <input type="radio" id="legs" name="group" value="legs" checked={group=="legs" ? true : false}/>
                                <span htmlFor="legs">{lang.legs}</span>
                            </div>
                            <div onClick={() => {group == "abs" ? setGroup("") : setGroup("abs")}}>
                                <input type="radio" id="abs" name="group" value="abs" checked={group=="abs" ? true : false}/>
                                <span htmlFor="abs">{lang.abs}</span>
                            </div>
                            <div onClick={() => {group == "arms" ? setGroup("") : setGroup("arms")}}>
                                <input type="radio" id="arms" name="group" value="arms" checked={group=="arms" ? true : false}/>
                                <span htmlFor="arms">{lang.arms}</span>
                            </div>
                            <div onClick={() => {group == "back" ? setGroup("") : setGroup("back")}}>
                                <input type="radio" id="back" name="group" value="back" checked={group=="back" ? true : false}/>
                                <span htmlFor="back">{lang.back}</span>
                            </div>
                        </div>
                    </form>
                    <div className={cl.pictureChoose}>
                        <img src="/images/exercisesPage/coolgirls.png" alt="" />
                    </div>
                </div>  
                <div className={cl.exercises}>
                    {exercises}
                </div>
            </div> 
            <Footer/>  
        </>
        
    )
}

export default ExercisesPage;