import React from 'react';

const Slide = ({ content }) => {
    console.log(content)
    return (
        <div className="slide" style={{backgroundImage: `url(${content})`}}/>
    )
}


export default Slide;