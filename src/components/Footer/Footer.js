import React from "react";
import style from "./Footer.module.scss";
import instagram from '../../Images/inst.jpg';

function Footer() {
    return (
        <div className={style.footer}>
            <a target="_blank" href="https://www.instagram.com/k_lombard_osh/"><img className={style.instagramLogo} src={instagram}/></a>
            
            <span>instagram</span>
        </div>
    )
}

export default Footer;