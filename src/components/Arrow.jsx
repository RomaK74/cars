import React from 'react'
import rightArrow from '../img/right-arrow.svg';
import leftArrow from '../img/left-arrow.svg';

const Arrow = ({direction, handleClick}) => {
    let [width, setWidth] = React.useState(window.screen.width);
    React.useEffect(() => {
        setWidth(window.screen.width);
    }, []);

    return (
        <div className="containerArrow" onClick={handleClick}>
            <div className="arrow"
                 style={width <= 1285 ? ((direction === 'right' ? {right: '-10px', transform: 'translateX(2)'} : {
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