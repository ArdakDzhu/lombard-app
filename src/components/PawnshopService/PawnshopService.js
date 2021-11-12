import React from "react";
import style from "./PawnshopService.module.scss";

const PawnshopService = (props) => {
    return(
        <div>    
            <div className={style.servisInfo}>

                <img className={style.car} src={props.item.image} alt="car"/>

                <ul>
                    {props.item.list.map((elem) => {
                        return(
                            <li>{elem}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default PawnshopService;