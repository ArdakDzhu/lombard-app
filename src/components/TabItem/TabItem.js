import React from 'react';
import style from './TabItem.module.scss'

const TabItem = (props) => {
    return(
        <div className={`${style.container} ${props.tab === props.value && style.active}`} onClick={() => props.changeTab(props.value)}>
            <img className={style.Image} src={props.image} />
            <p className={style.serviceText}>{props.text}</p>
        </div>
    )
}

export default TabItem