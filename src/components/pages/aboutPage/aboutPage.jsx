import React from "react";
import cl from "./aboutPage.module.css";
import Footer from "../../footer/footer";
import weImage from "./we.png";

const AboutPage = ({langCode}) => {
    return (
        <div className={cl.aboutPage}>
            <div className={cl.over}>
                <div className={cl.woman}>
                    <h1>Фитнес-платформа для тренировок дома и в зале</h1>
                    
                </div>
                   
            </div>
            <div className={cl.about}></div>
                <h2>Easy FIT — это</h2>
                <div className={cl.stickRectangle}></div>
                <div className={cl.rects}>
                <div className={cl.rectangle1}>
                    <div className={cl.we.png}>
                    <h2>Команда</h2>
                    <p>В нашей команде достаточно опытных людей готовых помочь вам с любым вопросом в трудной ситуации</p>
                    </div>
                    </div> 
                <div className={cl.rectangle2}>

                    <h2>Сборник упражнений</h2>
                    <p>На нашем сайте собрано подовляющие количество упражнений для каждой тренировки и любого вкуса</p>
                    </div>
                <div className={cl.rectangle3}>

                    <h2>Пользователи</h2>
                    <p>Наши пользователи делают большой вклад, благодаря отзывам, результатам и рекомендациям</p>
                    </div>
                </div>
                <Footer/>
            </div>
    )
}

export default AboutPage;