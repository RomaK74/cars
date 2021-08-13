import React from 'react'

const Dot = ({active}) => (
    <span className="dots__dot" style={active ? {background: '#0EC261'} : {background: 'white'}}/>
)

const Dots = ({slides, activeIndex}) => {
    return (<div className="slider__dots dots">
        {slides.map((slide, i) => (
            <Dot key={slide.slide} active={activeIndex === i}/>
        ))}
    </div>)
}

export default Dots;