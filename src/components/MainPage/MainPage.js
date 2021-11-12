import React, { useEffect, useState } from "react";
import style from './MainPage.module.scss';
import Slider from "../Slider/Slider";
import Calc from "../calc/calc";
import PawnshopService from "../PawnshopService/PawnshopService"
import TabItem from "../TabItem/TabItem";
import ImageCar from "../../Images/new-car.png";
import ImageRing from "../../Images/ring.png";
import ImageGadgets from "../../Images/gadgets.png";
import Car from "../../Images/toyota_camry.jpg";
import Jewellery from "../../Images/jewelry.jpg";
import GadgetsServerBlock from "../../Images/gadgetsService.jpeg";


export default function MainPage() {


    const TabObject = [
        {
            image:  Car,
            list: [
                'В залог можно сдать транспортное средство любой марки, свыше 2000 года выпуска ',
                'Транспортное средство будет оценено максимально выгодно для Вас',
                'Минимальная сумма для кредитования - 50000 сомов',
                'Процентная ставка составит от 0.27% до 0.2% в день',
                'Выкуп, оформление займа и оплата % возможны в любой рабочий день нашего ломбарда'
            ]
        },
        {
            image:  Jewellery,
            list: [
                'В залог можно сдать любое изделие из золота 375, 585, 750 и 900 пробы',
                'Золото оценивается исходя от рыночных цен, на момент оформления займа',
                'Минимальная сумма займа - 1000 сомов',
                'Процентная ставка составит от 0.27% до 0.2% в день',
                'Выкуп, оформление займа и оплата % возможны в любой рабочий день нашего ломбарда'
            ]
        },
        {
            image:  GadgetsServerBlock,
            list: [
                'В залог можно сдать ноутбуки, смартфоны, планшеты, телевизоры и т.д.',
                'Залоговое имущество будет оценено согласно скупочным ценам на момент оформления договора',
                'Минимальная сумма займа - 1000 сомов',
                'Процентная ставка составит от 0.5% до 0.4% в день',
                'Выкуп, оформление займа и оплата % возможны в любой рабочий день нашего ломбарда'
            ]
        },
    ]


    const [tab, setTab] = useState(1)

    const changeTab = (val) => {
        setTab(val)
    }

    return(
        <div className={style.MainPage}>

            <div className={style.sliderBlock}>
  
                <Slider/>

                <div  className={style.calc}>
                    <Calc/>
                </div>
            </div>    

            <h1 className={style.titleServices}>Услуги ломбарда</h1>

            <div className={style.tabContainer}>
                <TabItem text='кредит под залог авто' image={ImageCar} value={1} changeTab={changeTab} tab={tab}/>
                <TabItem text='кредит под залог ювелирных изделий' image={ImageRing} value={2} changeTab={changeTab} tab={tab}/>
                <TabItem text='кредит под залог электроники' image={ImageGadgets} value={3} changeTab={changeTab} tab={tab}/>
            </div>

            {tab === 1 && <PawnshopService item={TabObject[0]} />}
            {tab === 2 && <PawnshopService item={TabObject[1]} />}
            {tab === 3 && <PawnshopService item={TabObject[2]} />}

        </div>
    )
}