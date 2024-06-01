import React from "react";
import cl from "./aboutPage.module.css";
import Footer from "../../footer/footer";
import weImage from "../../../images/we.png";
import chbwomanImage from "../../../images/chbwoman.png";
import usersImage from "../../../images/users.png";
import getLang from "../../../utils/langs";

const AboutPage = ({langCode}) => {
    const lang = getLang(langCode)
    return (
        <div className={cl.aboutPage}>
            <div className={cl.over}>
                <div className={cl.woman}>
                    <h4>{lang.firnessPlatform}</h4>
                </div>  
            </div>
            <div className={cl.about}>
                <h2>{lang.easyFit}</h2>
                <div className={cl.stickRectangle}/>
                <div className={cl.rects}>
                    <div className={cl.rectangle}>
                        <img src={weImage}/>
                        <p>{lang.team}</p>
                        <span>{lang.teamText}</span>
                    </div> 
                    <div className={cl.rectangle}>
                        <img src={chbwomanImage}/>
                        <p>{lang.exercisesCollection}</p>
                        <span>{lang.exercisesCollectionText}</span>
                    </div>
                    <div className={cl.rectangle}>
                        <img src={usersImage}/>
                        <p>{lang.users}</p>
                        <span>{lang.usersText}</span>
                    </div>
                </div>
            <div className={cl.rectangleBig}>
                <h4>{lang.ourMission}</h4>    
                <span><strong>{lang.ourMissionBold1}</strong>{lang.ourMissionText1}</span>
                <br></br>
                <span><strong>{lang.ourMissionBold2}</strong>{lang.ourMissionText2}</span>
            </div>
            </div>
            
            <Footer/>
        </div>
    )
}

export default AboutPage;