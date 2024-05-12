import React from "react";
import cl from "./footer.module.css";
import logo from "../../images/whiteLogo.png";

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.footer__content}>
                <img
                    src="/logo.png"
                    alt="Логотип"
                    style={{
                        position: "relative",
                        top: "150px",
                        left: "926x",
                        width: "232px",
                        height: "45px",
                    }}
                />
                <div className={cl.footer__contacts}>
                    <div className={cl.contactInfo}>+7(902)471-65-14</div>
                    <div className={cl.contactInfo}>example@mail.ru</div>
                </div>
            </div>
            <div className={cl.footer__text}>
                <div>©2024 La JuliaGoshaVaryaIlya</div>
                <div>Easy FIT</div>
            </div>
            <div className={cl.footer__contacts}>Контакты</div>
        </footer>
    );
}

export default Footer;
