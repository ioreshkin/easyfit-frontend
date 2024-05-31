import React from "react";
import cl from "./aboutPage.module.css";
import Footer from "../../footer/footer";
import weImage from "../../../images/we.png";
import chbwomanImage from "../../../images/chbwoman.png";
import usersImage from "../../../images/users.png";

const AboutPage = ({langCode}) => {
    return (
        <div className={cl.aboutPage}>
            <div className={cl.over}>
                <div className={cl.woman}>
                    <h4>Фитнес-платформа для тренировок дома и в зале</h4>
                </div>  
            </div>
            <div className={cl.about}>
                <h2>Easy FIT — это</h2>
            </div>
            <div className={cl.stickRectangle}/>
            <div className={cl.rects}>
                <div className={cl.rectangle}>
                    <img src={weImage}/>
                    <p>Команда</p>
                    <span>В нашей команде достаточно опытных людей готовых помочь вам с любым вопросом в трудной ситуации</span>
                </div> 
                <div className={cl.rectangle}>
                    <img src={chbwomanImage}/>
                    <p>Сборник упражнений</p>
                    <span>На нашем сайте собрано подовляющие количество упражнений для каждой тренировки и любого вкуса</span>
                </div>
                <div className={cl.rectangle}>
                    <img src={usersImage}/>
                    <p>Пользователи</p>
                    <span>Наши пользователи делают большой вклад, благодаря отзывам, результатам и рекомендациям</span>
                </div>
            </div>
            <div className={cl.rectangleBig}>
                <h4>Наша миссия</h4>    
                <span><strong>Мы с любовью создаём фитнес-проект</strong>, который объединил лучших профессионалов, эффективные практики и методики, направленные на здоровье, красоту и долголетие людей.</span>
                <br></br>
                <span><strong>Наша цель:</strong> привлечь к домашнему фитнесу каждую семью страны, сделать людей счастливее, а их здоровье крепче.</span>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutPage;