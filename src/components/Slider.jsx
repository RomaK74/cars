import React, { useState } from 'react'
import SliderContent from "./SliderContent";
import Slide from "./Slide";
import Arrow from "./Arrow";

const Slider = props => {
    const getWidth = () => window.innerWidth;

    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
    });

    const { translate, transition, activeIndex } = state;

    const nextSlide = () => {
        if (activeIndex === props.slides.length - 1) {
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
                translate: (props.slides.length - 1) * 688,
                activeIndex: props.slides.length - 1
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
            <SliderContent
                translate={translate}
                transition={transition}
                width={getWidth() * props.slides.length}
            >
                {props.slides.map((slide, i) => (
                    <Slide key={slide + i} content={slide} />
                ))}
            </SliderContent>
            <Arrow direction="left" handleClick={prevSlide} />
            <Arrow direction="right" handleClick={nextSlide} />
        </div>)
}

export default Slider;
