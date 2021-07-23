import {BurgerMenu} from "./BurgerMenu";
import React, {useState} from "react";

export const LineMenu = ({toggleBM}) => {



    return (
        <div className="line-menu">
            <BurgerMenu toggleBM={toggleBM}/>
            <div className="line-menu__language">Eng</div>
        </div>
    )
}
