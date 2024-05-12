import React from "react";
import cl from "./hyperlink.module.css";

const Hyperlink = ({text, btnSrc}) => {
    return (
        <a href={btnSrc} className={cl.hyperlink}>{text} </a>
    )
}

export default Hyperlink;