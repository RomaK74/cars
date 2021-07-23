import React from 'react';

const Slide = ({content, title, subtitle, but, getSlideWidth}) => {
    console.log(content)
    const slider = React.useRef();
    let a = 1;

    return (
        <div  className="slide"
             style={{background: `url(${content}) 100% 100% no-repeat`, backgroundSize: 'cover'}}>
            <div className="slide__content">
                <h2 className="slide__title">{title}</h2>
                <p className="slide__subtitle">{subtitle}</p>
                <button className="slide__button" style={{background: `${but}`}}>Подробнее</button>
            </div>
        </div>
    )
}


export default Slide;