import logo from './logo.svg';
import Slider from "./components/Slider";
//import slide1 from "";
import slide1 from './img/slide-1.png';
import slide2 from './img/slide-3.png';
import slide3 from './img/slide-2.png';
import slide4 from './img/slide-4.png';
import location from './img/location.png';

function App() {
    const images = [slide1, slide2, slide3, slide4];

    return (
        <div className="App">
            <div className="container">
                <div className="lineMenu">
                    <div className="burgerMenu">
                        <div className="burgerMenuLine"/>
                        <div className="burgerMenuLine"/>
                        <div className="burgerMenuLine"/>
                        <svg viewBox="0 0 100 80" width="24" height="40" color="white">
                            <rect width="100" height="10" rx="20" fill="currentcolor" />
                            <rect y="30" width="100" height="10" rx="20" fill="currentcolor" />
                            <rect y="60" width="100" height="10" rx="20" fill="currentcolor" />
                        </svg>
                    </div>
                    <div className="lineMenuLanguage">
                        Eng
                    </div>
                </div>
                <div className="mainPart">
                    <div className="mainPartUp">
                        <div className="mainPartUpTitle">Need for drive</div>
                        <div className="mainPartUpLocation"><img src={location} alt=""/> Ульяновск</div>
                    </div>
                    <div className="mainPartMiddle">
                        <div className="mainPartMiddleTitle">Каршеринг</div>
                        <div className="mainPartMiddleSubtitle">Need for drive</div>
                        <div className="mainPartMiddleSubtitle2">Поминутная аренда авто твоего города</div>
                        <div className="mainPartMiddleButton">
                            <button className="buttonBook">Забронировать</button>
                        </div>
                    </div>
                    <div className="mainPartFooter">
                        <div className="mainPartYear">© 2016-2019 «Need for drive»</div>
                        <div className="mainPartPhone">8 (495) 234-22-44</div>
                    </div>
                </div>
                <div className="sliderPart">
                    <Slider slides={images}/>
                </div>
            </div>
        </div>
    );
}

export default App;
