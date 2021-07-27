import React from 'react';
import {BurgerMenu} from "../components/BurgerMenu";
import Slider from "../components/Slider";
import {Link} from "react-router-dom";
import {Location} from "../components/Location";
import {Logo} from "../components/Logo";
import {images} from './images';
import {Button} from "../components/Button";

export const MainPage = ({pressBM}) => {
    const titles = ['Бесплатная парковка', 'Страховка', 'Бензин', 'Обслуживание'];
    const subtitles = ['Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
        'Полная страховка страховка автомобиля', 'Полный бак на любой заправке города за наш счёт', 'Автомобиль проходит еженедельное ТО'];
    const mas = [
        {
            slide: images[0],
            title: titles[0],
            subtitle: subtitles[0],
            button: 'linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)'
        },
        {
            slide: images[1],
            title: titles[1],
            subtitle: subtitles[1],
            button: 'linear-gradient(90deg, #132949 0%, #0C7B67 100%)'
        },
        {
            slide: images[2],
            title: titles[2],
            subtitle: subtitles[2],
            button: 'linear-gradient(90deg, #493013 0%, #7B0C3B 100%)'
        },
        {
            slide: images[3],
            title: titles[3],
            subtitle: subtitles[3],
            button: 'linear-gradient(90deg, #281349 0%, #720C7B 100%)'
        },
    ]

    const usingBM = (iconStatus) => {
        pressBM(iconStatus);
    }


    return (
        <div className="App" id="app">
            <div className="container">
                <div className="main-part">
                    <header className="main-part-up">
                        <BurgerMenu className="main-part--bm" toggleBM={usingBM}/>
                        <div className="main-part-up__TL">
                            <Logo />
                            <Location />
                        </div>
                    </header>
                    <main className="main-part-middle">
                        <div className="main-part-middle__title">Каршеринг</div>
                        <div className="main-part-middle__subtitle">Need for drive</div>
                        <div className="main-part-middle__subtitle2">Поминутная аренда авто твоего города</div>
                        <div className="main-part-middle__button">
                            <Link to="/cars/build/order/location"><Button className="main-part-middle__button-book" btnText="Забронировать"/></Link>
                        </div>
                    </main>
                    <footer className="main-part-footer">
                        <div className="main-part-footer__year">© 2016-2019 «Need for drive»</div>
                        <div className="main-part-footer__phone"><a href="tel:8 (495) 234-22-44">8 (495) 234-22-44</a>
                        </div>
                    </footer>
                </div>
                <div className="slider-part">
                    <div className="" id="sliderFone"></div>
                    <Slider content={mas}/>
                </div>
            </div>
        </div>
    );
}