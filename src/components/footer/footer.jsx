import React from "react";
import cl from "./footer.module.css";
import logo from "../../images/whiteLogo.png";

const Footer = ({ langCode }) => {
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
                    <span>Контакты</span>
                    <a href="tel:+79024716514" className={cl.phone}>+7(902)471-65-14</a>
                    <span>example@mail.ru</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
