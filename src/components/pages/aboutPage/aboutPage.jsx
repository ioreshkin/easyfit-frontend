import React from "react";
import cl from "./aboutPage.module.css";
import Footer from "../../footer/footer";

const AboutPage = ({langCode}) => {
    return (
        <div className={cl.aboutPage}>
            <div className={cl.over}>
                <div className={cl.woman}>
                    <h1>Фитнес-платформа для тренировок дома и в зале</h1>
                    
                </div>
                <div className={cl.about}></div>
                <h2>Easy FIT — это</h2>     
            </div>
             
                <Footer/>
            </div>
    )
}

export default AboutPage;