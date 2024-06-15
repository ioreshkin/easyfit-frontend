import React, { useEffect, useState} from "react";
import cl from "./programsInfo.module.css";
import Footer from "../../footer/footer";

const ProgramsInfo = ({info, langCode, data}) => {
    const [exercises, setExercises] = useState([]);
    const [curerentExercise, setCurrentExercise] = useState(0);
    const [repeats, setRepeats] = useState(0);
    const [exerciseName, setExerciseName] = useState("");
    const [exerciseImg, setExerciseImg] = useState("");
    const [exerciseGif, setExerciseGif] = useState("");

    let name;
    let shortDescription;
    let description;
    if (langCode == "ru") {name = info.name_ru; shortDescription = info.short_description_ru; description = info.description_ru}
    else if (langCode == "en") {name = info.name_en; shortDescription = info.short_description_en; description = info.description_en}
    setTimeout(() => {console.log(data); setExercises(data)}, 1);

    
    useEffect(() => {
        if (exercises.length > 0) {
            setExerciseImg(exercises[curerentExercise].preview);
            setExerciseGif(exercises[curerentExercise].gif);
            if (langCode == "ru") {setExerciseName(exercises[curerentExercise].name_ru)}
        }
        setRepeats(info.exercises_repeats.split(",\s+")[curerentExercise]);
 
    }, [exercises])
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
                    <span>{description}</span>
                    <p2>Тренировка состоит из {exercises.length} упражнений, после выполнения каждого нажмите на кнопку “далее”.</p2>
                    <p>Выполнение упражнения</p>
                    <p3>{curerentExercise + 1}. {exerciseName}</p3>
                    <p4>{repeats} повторений</p4>
                    {/* <div className={cl.Picture2}>
                        <img src={exerciseImg} alt="" />
                    </div> */}
                    <p>Видео выполнения упражнения</p>
                    <div className={cl.Picture3}>
                        <img src={exerciseGif} alt="" />
                    </div>
                    <div className={cl.next} onClick={() => {if(exercises[curerentExercise + 1]) {setCurrentExercise(curerentExercise + 1)}}}>
                        <img src={"/images/later.png"} alt="" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}

export default ProgramsInfo;