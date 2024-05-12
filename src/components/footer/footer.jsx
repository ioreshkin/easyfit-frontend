import React from "react";
import logo from "../../images/whiteLogo.png";

const Footer = () => {
    return (
    <div className={cl.footer}>
            <a href="#" className={cl.logo}>
                <img src={logo}/>
            </a>
            <div className={cl.links}>
                <Hyperlink text="©2024  La JuliaGoshaVaryaIlya Easy FIT" btnSrc="#"/>
                <Hyperlink text="Контакты" btnSrc="#"/>
                <Hyperlink text="+7(902)471-65-14" btnSrc="#"/>
                <Hyperlink text="example@mail.ru" btnSrc="#"/>
            </div>
            <LangSwitch/>
        </div>
    );
}

export default Footer;
