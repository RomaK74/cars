import React, {useState} from 'react';
import slide1 from "../img/slide-1.png";
import slide2 from "../img/slide-3.png";
import slide3 from "../img/slide-2.png";
import slide4 from "../img/slide-4.png";
import {BurgerMenu} from "../components/BurgerMenu";
import location from "../img/location.png";
import Slider from "../components/Slider";
import {LineMenu} from "../components/LineMenu";
import {Link} from "react-router-dom";
import {BackgroundMenu} from "../components/BackgroundMenu";
import {Location} from "../components/Location";
import {Logo} from "../components/Logo";

export const MainPage = () => {
    const images = [slide1, slide2, slide3, slide4];
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

    React.useEffect(() => {

    }, [window.innerWidth])

    const usingBM = (iconStatus) => {
        console.log('qq', iconStatus);
        if (!iconStatus) {
                document.getElementById('menuBack').style.display = 'block';
                document.getElementById('sliderFone').classList.add("fone");
                //document.getElementsByClassName('burgerMenu__firstLine')[i].style.display = 'none';
                // document.getElementsByClassName('burgerMenu__forthLine')[i].style.display = 'none';
        } else {

                document.getElementById('menuBack').style.display = 'none';
                document.getElementById('sliderFone').classList.remove("fone");
        }
    }


    return (
        <div className="App" id="app">
            <div className="menu-background" id="menuBack">
                <BackgroundMenu />
            </div>
            <div className="container">
                <LineMenu toggleBM={usingBM} />
                <div className="main-part">
                    <div className="main-part-up">
                        <BurgerMenu className="main-part--bm" toggleBM={usingBM}/>
                        <div className="main-part-up__TL">
                            <Logo />
                            <Location />
                        </div>
                    </div>
                    <div className="main-part-middle">
                        <div className="main-part-middle__title">Каршеринг</div>
                        <div className="main-part-middle__subtitle">Need for drive</div>
                        <div className="main-part-middle__subtitle2">Поминутная аренда авто твоего города</div>
                        <div className="main-part-middle__button">
                            <Link to="/cars/build/order"><button className="main-part-middle__button-book">Забронировать</button></Link>
                        </div>
                    </div>
                    <div className="main-part-footer">
                        <div className="main-part-footer__year">© 2016-2019 «Need for drive»</div>
                        <div className="main-part-footer__phone"><a href="tel:8 (495) 234-22-44">8 (495) 234-22-44</a>
                        </div>
                    </div>
                </div>
                <div className="slider-part">
                    <div className="" id="sliderFone"></div>
                    <Slider content={mas}/>
                </div>
            </div>
        </div>
    );
}