import React from "react";
import cl from "./footer.module.css";
import logo from "../../images/whiteLogo.png";

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.footer__content}>
            <div className={cl.footer__text}>
                    <p>©2024 La JuliaGoshaVaryaIlya</p>
                    <p>Easy FIT</p>
                </div>
                <a className ={cl.logo} >
                    <img src={logo} alt=""/>
                </a>
                <div className={cl.footer__contacts}>
                    <p>Контакты</p>
                    <a href="tel:+79024716514" className={cl.phone}>+7(902)471-65-14</a>
                    <p>example@mail.ru</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
