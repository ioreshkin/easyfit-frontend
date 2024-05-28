import React from "react";
import cl from "./aboutPage.module.css";
import Navigation from "../../navigation/navigation";
import Footer from "../../footer/footer";

const AboutPage = ({setActive}) => {
    return (
        <div className={cl.aboutPage}>
            <Navigation setActive={setActive}/>
            <div className={cl.over}>
                <div className={cl.woman}>
                    <h1>Фитнес-платформа для тренировок дома и в зале</h1>
                </div>
                <h2>Easy FIT — это</h2> 
            </div> 
                <Footer/>
            </div>
    )
}

export default AboutPage;