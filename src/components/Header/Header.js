import React from "react";
import style from './Header.module.scss'
import { Link } from "react-router-dom";
import Logo from '../../Images/Logo.jpg';

function Header() {
    return(
        <div className={style.header}>
            <div className={style.Phone}> 
            <img className={style.logo} src={Logo}/>

            <div className={style.PhoneInfo}>
                <p>Никаких штрафов и скрытых платежей.</p>
                <a href="tel:+996554117410">+996(554)-11-74-10</a>
                <a href="tel:+996775117410">+996(775)-11-74-10</a>
                <p className={style.worktime}>
                    <span>по будням с 09:00 до 17:00</span>
                    <span>суббота и праздничные дни с 09:00 до 15:00</span>
                    <span>Воскресенье - выходной</span>
                </p>
            </div>
            </div>

            <div className={style.RedMenu}>
                <ul>
                    <li><Link className="nav-link" to="/">Главная</Link></li>
                    <li><Link className="nav-link" to="/about">О компании</Link></li>
                    <li><Link className="nav-link" to="/faq">Часто задаваемые вопросы</Link></li> 
                    <li><Link className="nav-link" to="/contacts">Контакты</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header


