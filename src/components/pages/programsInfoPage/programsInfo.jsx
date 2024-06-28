import React, { useEffect, useState} from "react";
import cl from "./programsInfo.module.css";
import Footer from "../../footer/footer";
import getLang from "../../../utils/langs";

const ProgramsInfo = ({info, langCode, data}) => {
    const [exercises, setExercises] = useState([]);
    const [currentExercise, setCurrentExercise] = useState(0);
    const [repeats, setRepeats] = useState(0);
    const [exerciseName, setExerciseName] = useState("");
    const [exerciseGif, setExerciseGif] = useState("");

    const lang = getLang(langCode)
    let name;
    let shortDescription;
    let description;
    if (langCode == "ru") {name = info.name_ru; shortDescription = info.short_description_ru; description = info.description_ru}
    else if (langCode == "en") {name = info.name_en; shortDescription = info.short_description_en; description = info.description_en}

    
    useEffect(() => {
        setExercises(data)
        if (exercises.length > 0) {

            setExerciseGif(exercises[currentExercise].gif);
            if (langCode == "ru") {
                setExerciseName(exercises[currentExercise].name_ru)
            } else {
                setExerciseName(exercises[currentExercise].name_en)
            }
        }
        setRepeats(info.exercises_repeats.split(",")[currentExercise]);
 
    }, [exercises, currentExercise, langCode])
    return (
        <div className={cl.Page}>
            <div className={cl.Rectangle}>
                <div className={cl.Rectangle_info}>
                    <div className={cl.Picture}>
                        <img src={info.preview} alt="" />
                     </div>
                     <div className={cl.Rectangle__info}>
                         <p1>{name}</p1>
                         <span>{shortDescription}</span>
                    </div>
                </div>
                <div className={cl.Rectangle_Program}>
                    <span>
                        {description.split("\\n").map((line, index) =>(
                        <>
                        {line}
                        <br/>
                        <br/>
                        </> 
                        ))}
                    </span>
                    <p2>{lang.consists} {exercises.length} {lang.pressNext}.</p2>
                    <p>{lang.execution}</p>
                    <p3>{currentExercise + 1}. {exerciseName}</p3>
                    <p4>{repeats} {lang.repeats}</p4>
                    <div className={cl.Picture3}>
                        <img src={exerciseGif} alt="" />
                    </div>
                    <div className={cl.next} onClick={() => {if(exercises[currentExercise + 1]) {setCurrentExercise(currentExercise + 1)}}}>
                        <img src={"/images/later.png"} alt=""/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}

export default ProgramsInfo;