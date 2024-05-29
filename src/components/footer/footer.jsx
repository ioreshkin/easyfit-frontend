import React from "react";
import cl from "./footer.module.css";
import logo from "../../images/whiteLogo.png";
import { getLang } from "../../utils/langs";

const Footer = ({ langCode }) => {
    const lang = getLang(langCode);
    return (
        <footer className={cl.footer}>
            <div className={cl.footer__content}>
            <div className={cl.footer__text}>
                    <span>©2024 La JuliaGoshaVaryaIlya</span>
                    <span>Easy FIT</span>
                </div>
                <a className ={cl.logo} href="#">
                    <img src={logo} alt=""/>
                </a>
                <div className={cl.footer__contacts}>
                    <span>{lang.contacts}</span>
                    <a href="tel:+79024716514" className={cl.phone}>
                        <span>+7(902)471-65-14</span>
                    </a>
                    <span>example@mail.ru</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
