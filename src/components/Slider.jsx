import React, {useState} from 'react'
import SliderContent from "./SliderContent";
import Slide from "./Slide";
import Arrow from "./Arrow";
import Dots from "./Dots";

const Slider = props => {
    console.log(props);

    const getWidth = () => window.innerWidth;
    console.log('rrrrrrrrrrr', getWidth());
    /*let width;
    const getSlideWidth = width2 => {
        console.log("Вызвалось!")
        console.log('qqq', width2);
        width = width2;
        console.log('qqqq', width)
        return width;
    };*/
    const slide = React.useRef();
    let width;
    if (getWidth() <= 1200) {
        width = 410;
    }
    else if (getWidth() <= 1285) {
        width = 500;
    } else if (getWidth() <= 1440) {
        width = 600;
    } else if (getWidth() >= 1441) {
        width = 688;
    }



    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
    });

    const {translate, transition, activeIndex} = state;

    const nextSlide = () => {
        console.log('width in nS', width)
        if (activeIndex === props.content.length - 1) {
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
                translate: (props.content.length - 1) * width,
                activeIndex: props.content.length - 1
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
                width={getWidth() * props.content.length}
            >
                {props.content.map(val => (
                    <Slide ref={slide} key={val.slide}  content={val.slide} title={val.title} subtitle={val.subtitle} but={val.button}/>
                ))}
            </SliderContent>
            <Arrow direction="left" handleClick={prevSlide}/>
            <Arrow direction="right" handleClick={nextSlide}/>
            <Dots slides={props.content} activeIndex={activeIndex}/>

        </div>)
}

export default Slider;
