import logo from './logo.svg';
import React, { useState } from 'react'
import Slider from "./components/Slider";
//import slide1 from "";
import slide1 from './img/slide-1.png';
import slide2 from './img/slide-3.png';
import slide3 from './img/slide-2.png';
import slide4 from './img/slide-4.png';
import location from './img/location.png';
import Facebook from './img/Facebook_white.svg';
import Instagram from './img/Instagram_white.svg';
import Telegram from './img/Telegram_white.svg';

function App() {
    const images = [slide1, slide2, slide3, slide4];
    const titles = ['Бесплатная парковка', 'Страховка', 'Бензин', 'Обслуживание'];
    const subtitles = ['Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
        'Полная страховка страховка автомобиля', 'Полный бак на любой заправке города за наш счёт', 'Автомобиль проходит еженедельное ТО'];
    const mas = [
        {slide: slide1, title: titles[0], subtitle: subtitles[0]},
        {slide: slide2, title: titles[1], subtitle: subtitles[1]},
        {slide: slide3, title: titles[2], subtitle: subtitles[2]},
        {slide: slide4, title: titles[3], subtitle: subtitles[3]},
    ]
    const [iconStatus, setIconStatus] = useState(true);
    const toggleBM = () => {

        iconStatus
            ? setIconStatus(false)
            : setIconStatus(true);
    }

    React.useEffect(() => {
        if (!iconStatus) {
            document.getElementById('menuBack').style.display = 'block';
            document.getElementById('sliderFone').classList.add("fone");
            //document.getElementsByClassName('burgerMenu__firstLine')[0].style.display = 'none';
           // document.getElementsByClassName('burgerMenu__forthLine')[0].style.display = 'none';
            document.getElementsByClassName('burgerMenu__secondLine')[0].classList.add('active');

            document.getElementsByClassName('burgerMenu__thirdLine')[0].classList.add('active');
            document.getElementsByClassName('burgerMenu__firstLine')[0].classList.add('active');
            document.getElementsByClassName('burgerMenu__forthLine')[0].classList.add('active');

        }
        else {
            document.getElementsByClassName('burgerMenu__firstLine')[0].style.display = 'block';
            document.getElementsByClassName('burgerMenu__forthLine')[0].style.display = 'block';
            document.getElementById('menuBack').style.display = 'none';
            document.getElementById('sliderFone').classList.remove("fone");
            document.getElementsByClassName('burgerMenu__secondLine')[0].classList.remove('active');
            document.getElementsByClassName('burgerMenu__thirdLine')[0].classList.remove('active');
            document.getElementsByClassName('burgerMenu__firstLine')[0].classList.remove('active');
            document.getElementsByClassName('burgerMenu__forthLine')[0].classList.remove('active');
        }
    }, [iconStatus])

    return (
        <div className="App" id="app">
            <div className="menuBackground" id="menuBack">
                <div className="menuIn">
                    <div className="menuInItem">ПАРКОВКА</div>
                    <div className="menuInItem">СТРАХОВКА</div>
                    <div className="menuInItem">БЕНЗИН</div>
                    <div className="menuInItem">ОБСЛУЖИВАНИЕ</div>
                    <div className="socialNetworks">
                        <div className="socialNetworksItem"><img src={Facebook} alt=""/></div>
                        <div className="socialNetworksItem"><img src={Instagram} alt=""/></div>
                        <div className="socialNetworksItem"><img src={Telegram} alt=""/></div>
                    </div>
                </div>

            </div>

            <div className="container">
                <div className="lineMenu">
                    <div className="burgerMenu" onClick={toggleBM}>
                        <div className="burgerMenuLine burgerMenu__firstLine"/>
                        <div className="burgerMenuLine burgerMenu__secondLine"/>
                        <div className="burgerMenuLine burgerMenu__thirdLine"/>
                        <div className="burgerMenuLine burgerMenu__forthLine"/>
                    </div>
                    <div className="lineMenuLanguage">Eng</div>
                </div>
                <div className="mainPart">
                    <div className="mainPartUp">
                        <div className="mainPartUp__Title">Need for drive</div>
                        <div className="mainPartUp__Location"><img src={location} alt=""/> Ульяновск</div>
                    </div>
                    <div className="mainPartMiddle">
                        <div className="mainPartMiddle__Title">Каршеринг</div>
                        <div className="mainPartMiddle__Subtitle">Need for drive</div>
                        <div className="mainPartMiddle__Subtitle2">Поминутная аренда авто твоего города</div>
                        <div className="mainPartMiddle__Button">
                            <button className="buttonBook">Забронировать</button>
                        </div>
                    </div>
                    <div className="mainPartFooter">
                        <div className="mainPartYear">© 2016-2019 «Need for drive»</div>
                        <div className="mainPartPhone"><a href="tel:8 (495) 234-22-44">8 (495) 234-22-44</a></div>
                    </div>
                </div>
                <div className="sliderPart">
                    <div className="" id="sliderFone"></div>
                    <Slider content={mas}/>
                </div>
            </div>
        </div>
    );
}

export default App;
