import React from 'react';
import {BurgerMenu} from '../components/BurgerMenu';
import Slider from '../components/Slider';
import {Link} from 'react-router-dom';
import {Location} from '../components/Location';
import {Logo} from '../components/Logo';
import {slidersContent} from '../data/sliderContentMas';

export const MainPage = ({pressBM, menu}) => {
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
                            <Logo/>
                            <Location/>
                        </div>
                    </header>
                    <main className="main-part-middle">
                        <div className="main-part-middle__title">Каршеринг</div>
                        <div className="main-part-middle__subtitle">Need for drive</div>
                        <div className="main-part-middle__subtitle2">Поминутная аренда авто твоего города</div>
                        <div className="main-part-middle__button">
                            <Link to="/cars/build/order/location">
                                <button className="main-part-middle__button-book">Забронировать</button>
                            </Link>
                        </div>
                    </main>
                    <footer className="main-part-footer">
                        <div className="main-part-footer__year">© 2016-2019 «Need for drive»</div>
                        <div className="main-part-footer__phone"><a href="tel:8 (495) 234-22-44">8 (495) 234-22-44</a>
                        </div>
                    </footer>
                </div>
                <div className="slider-part">
                    <div className={menu ? "fone" : ""} id="sliderFone"/>
                    <Slider content={slidersContent}/>
                </div>
            </div>
        </div>
    );
}