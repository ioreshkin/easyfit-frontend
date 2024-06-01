import React from "react";
import cl from "./helpModal.module.css";
import userGuide from "../../../files/userGuide.pdf";
import getLang from "../../../utils/langs";

const HelpModal = ({active, setActive, langCode}) => { 
    const classes = cl.helpModal + " " + cl.active;
    const lang = getLang(langCode)
    return (
        <div className={active ? classes : cl.helpModal} onClick={() => setActive(false)}>
            <div className={cl.helpModal__content} onClick={e => e.stopPropagation()}>
                <p>{lang.faq}</p>
                <h3>{lang.title1}</h3>
                <h3>{lang.text1}</h3>
                <h3>{lang.title2}</h3>
                <h3>{lang.text2}</h3>
                <h3>{lang.title3}</h3>
                <h3>{lang.text3}</h3>
                <ul>
                    <li>{lang.list1}</li>
                    <li>{lang.list2}</li>
                    <li>{lang.list3}</li>
                    <li>{lang.list4}</li>
                    <li>{lang.list5}</li>
                </ul>
                <h3>{lang.title4}</h3>
                <h3>{lang.text4}</h3>
                <h3>{lang.contactUs}</h3>
                <h3>{lang.ourContacts}</h3>
                <h3>{lang.link}</h3>
                <a href={userGuide} target="_blank" rel="noreferrer">{lang.guide}</a>
            </div>
        </div>
    )
}

export default HelpModal;