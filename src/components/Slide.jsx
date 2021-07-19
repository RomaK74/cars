import React from 'react';

const Slide = ({ content, title, subtitle }) => {
    console.log(content)
    return (
        <div className="slide" style={{backgroundImage: `url(${content})`}}>
        <h2 className="slide__title">{title}</h2>
        <p className="slide__subtitle">{subtitle}</p>
            <button className="slide__button">Подробнее</button>
        </div>
    )
}


export default Slide;