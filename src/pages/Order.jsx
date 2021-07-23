import React, {useState} from 'react';
import {LineMenu} from "../components/LineMenu";
import {BackgroundMenu} from "../components/BackgroundMenu";

export const Order = () => {
    const background = React.useRef();

    const usingBM = (iconStatus) => {
        if (!iconStatus) {
            background.current.style.display = 'block';
        } else {
            background.current.style.display = 'none';

        }
    }


    return (
        <div className="order-page-container">
            <div ref={background} className="menu-background">
                <BackgroundMenu />
            </div>
            <LineMenu toggleBM={usingBM}/>
        </div>
    )
}