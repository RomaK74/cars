import React, {useState} from 'react'
import SliderContent from "./SliderContent";
import Slide from "./Slide";
import Arrow from "./Arrow";
import Dots from "./Dots";

const Slider = props => {
    console.log(props);
    const getWidth = () => window.innerWidth;

    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
    });

    const {translate, transition, activeIndex} = state;

    const nextSlide = () => {
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
            translate: (activeIndex + 1) * 688
        })
    }

    const prevSlide = () => {
        if (activeIndex === 0) {
            return setState({
                ...state,
                translate: (props.content.length - 1) * 688,
                activeIndex: props.content.length - 1
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * 688
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
                    <Slide key={val.slide} content={val.slide} title={val.title} subtitle={val.subtitle}/>
                ))}
            </SliderContent>
            <Arrow direction="left" handleClick={prevSlide}/>
            <Arrow direction="right" handleClick={nextSlide}/>
            <Dots slides={props.content} activeIndex={activeIndex}/>

        </div>)
}

export default Slider;
