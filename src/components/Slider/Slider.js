import React from "react";
import style from "./Slider.module.scss"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import gold from '../../Images/goldW.jpg';
import auto from '../../Images/autoW.png';
import gadgets from '../../Images/gadgetsW.jpg';



const Slider = () => {
    return (
        <Splide
            options={{
                autoplay:true,
                arrows: false,
                pagination: false,
                type: 'loop',
            }}
        >
            <SplideSlide>
                <img className={style.Image} src={gold} alt="gold"/>
            </SplideSlide>

            <SplideSlide>
                <img className={style.Image} src={auto} alt="auto"/>
            </SplideSlide>

            <SplideSlide>
                <img className={style.Image} src={gadgets} alt="gadgets"/>
            </SplideSlide>
      </Splide>
    )
}

export default Slider;