import React, { useEffect, useState } from "react";
import cl from "./exercisesPage.module.css";
import Exercise from "../../exercise/exercise";
import Footer from "../../footer/footer";
import ExcSearch from "../../../images/searchexercieses.png";
import ExcWomanYoga from "../../../images/coolgirls.png";
import getLang from "../../../utils/langs";

const ExercisesPage = ({langCode, group, setGroup}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://26.79.198.107:3002/exercises/' + group);
            const jsonData = await response.json();
            const dataArray = [];
    
            jsonData.map((item) => {
                dataArray.push(<Exercise name={item.name} description={item.description}/>)
            })

            setData(dataArray);
        };
        fetchData();
      }, [data]);

    const lang = getLang(langCode);
    return (
        <div className={cl.exercisesPage}>
            <div className={cl.search}>
                <img src={ExcSearch} alt="" className={cl.pictureSearch} draggable={false}/>
                <input type="text" name="exercise" placeholder={lang.exercisesSearch}/>
            </div>
            <div className={cl.start}>
                <form>
                    <h2>{lang.musculeGroup}</h2>
                    <div className={cl.choice}>
                        <div onClick={() => {setGroup("chest"); setData([])}}>
                            <input type="radio" id="chest" name="group" value="chest"/>
                            <label htmlFor="chest">{lang.chest}</label>
                        </div>
                        <div onClick={() => {setGroup("legs"); setData([])}}>
                            <input type="radio" id="legs" name="group" value="legs"/>
                            <label htmlFor="legs">{lang.legs}</label>
                        </div>
                        <div onClick={() => {setGroup("abs"); setData([])}}>
                            <input type="radio" id="abs" name="group" value="abs"/>
                            <label htmlFor="abs">{lang.abs}</label>
                        </div>
                        <div onClick={() => {setGroup("arms"); setData([])}}>
                            <input type="radio" id="arms" name="group" value="arms"/>
                            <label htmlFor="arms">{lang.arms}</label>
                        </div>
                        <div onClick={() => {setGroup("back"); setData([])}}>
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
                {data}
            </div>
            
            <Footer/>
        </div>   
    )
}

export default ExercisesPage;