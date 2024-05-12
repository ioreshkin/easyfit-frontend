import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <img
                    src="/logo.png"
                    alt="Логотип"
                    style={{
                        position: "relative",
                        top: "2270px",
                        left: "126px",
                        width: "232px",
                        height: "45px",
                    }}
                />
                <div className="footer__contacts">
                    <div>+7(902)471-65-14</div>
                    <div>example@mail.ru</div>
                </div>
            </div>
            <div className="footer__text">
                <div>©2024 La JuliaGoshaVaryaIlya</div>
                <div>Easy FIT</div>
            </div>
            <div className="footer__contacts">Contacts</div>
        </footer>
    );
}


export default Footer;
