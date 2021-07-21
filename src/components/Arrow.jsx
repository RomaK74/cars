import React from 'react'
import {css, jsx} from '@emotion/react'
import rightArrow from '../img/right-arrow.svg';
import leftArrow from '../img/left-arrow.svg';

const Arrow = ({direction, handleClick}) => {

    console.log('di', direction);
    //  transform: translateX(${direction === 'left' ? '-2' : '2'}px);
//${direction === 'right' ? `right: 25px` : `left: 25px`}
    const getWidth = () => window.innerWidth;
    return (
        <div className="containerArrow" onClick={handleClick}>

            <div className="arrow"

                 style={getWidth() <= 1285 ? ((direction === 'right' ? {right: '-10px', transform: 'translateX(2)'} : {
                     left: '-10px',
                     transform: 'translateX(-2)'
                 })) : (direction === 'right' ? {right: '10px', transform: 'translateX(2)'} : {
                     left: '10px',
                     transform: 'translateX(-2)'
                 })}
            >
                {direction === 'right' ?
                    <img src={rightArrow}
                         alt="right"/> : <img src={leftArrow} alt="left"/>}
            </div>
            <div className="arrowLine"
                 style={direction === 'left' ? {left: '0'} : {right: '0'}}
            />
        </div>)
}

export default Arrow;