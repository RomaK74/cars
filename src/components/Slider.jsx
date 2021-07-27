import React, {useState} from 'react'
import SliderContent from "./SliderContent";
import Slide from "./Slide";
import Arrow from "./Arrow";
import Dots from "./Dots";

const Slider = ({content}) => {
    const widthScreen = window.screen.width;
    const slide = React.useRef();
    let width;
    if (widthScreen <= 1018) {
        width = 370;
    }
    else if (widthScreen <= 1200) {
        width = 410;
    }
    else if (widthScreen <= 1285) {
        width = 500;
    } else if (widthScreen <= 1440) {
        width = 600;
    } else if (widthScreen >= 1441) {
        width = 688;
    }

    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
    });

    const {translate, transition, activeIndex} = state;

    const nextSlide = () => {
        if (activeIndex === content.length - 1) {
            return setState({
                ...state,
                translate: 0,
                activeIndex: 0
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * width
        })
    }

    const prevSlide = () => {
        if (activeIndex === 0) {
            return setState({
                ...state,
                translate: (content.length - 1) * width,
                activeIndex: content.length - 1
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * width
        })
    }

    return (
        <div className="slider">{/*  */}
            <div className="sliderFone"></div>
            <SliderContent
                translate={translate}
                transition={transition}
                width={widthScreen * content.length}
            >
                {content.map(val => (
                    <Slide ref={slide} key={val.slide}  content={val.slide} title={val.title} subtitle={val.subtitle} but={val.button}/>
                ))}
            </SliderContent>
            <Arrow direction="left" handleClick={prevSlide}/>
            <Arrow direction="right" handleClick={nextSlide}/>
            <Dots slides={content} activeIndex={activeIndex}/>

        </div>)
}

export default Slider;
