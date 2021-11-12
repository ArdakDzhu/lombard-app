import React from "react";
import style from "./Contacts.module.scss";

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <p className={style.address}>г. Ош, проспект Масалиева, д. 11</p>
            <a href="tel:+996553359000">+996(553)359 000</a>
            <a href="tel:+996771117410">+996(771)117 410</a>
            <a href="tel:+996554117410">+996(554)117 410</a>

            <p className={style.address}>г. Ош, улица Раззакова, д. 40</p>
            <a href="tel:+996777117410">+996(777)117 410</a>
            <a href="tel:+996500117410">+996(500)117 410</a>

            <p className={style.address}>г. Ош, мкр "Төлөйкөн", д. 13/32</p>
            <a href="tel:+996772117410">+996(772)117 410</a>
            <a href="tel:+996559117410">+996(559)117 410</a>
        </div>
    )
}

export default Contacts;