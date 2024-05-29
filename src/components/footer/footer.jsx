import React from "react";
import cl from "./footer.module.css";
import logo from "../../images/whiteLogo.png";

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.footer__content}>
            <div className={cl.footer__text}>
                    <h3>©2024 La JuliaGoshaVaryaIlya</h3>
                    <h3>Easy FIT</h3>
                </div>
                <a className ={cl.logo} href="#">
                    <img src={logo} alt=""/>
                </a>
                <div className={cl.footer__contacts}>
                    <a href="tel:+79024716514" className={cl.phone}>
                        <h3>+7(902)471-65-14</h3>
                    </a>
                    <h3>example@mail.ru</h3>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
