import {BurgerMenu} from "./BurgerMenu";
import React from "react";

export const LineMenu = ({toggleBM}) => {
    const language = React.useRef();

    const onChangeLanguage = () => {
        if (language.current.innerText === "Eng") {
            language.current.innerText = "Rus";
        } else {
            language.current.innerText = "Eng";
        }
    }

    return (
        <div className="line-menu">
            <BurgerMenu toggleBM={toggleBM}/>
            <div ref={language} className="line-menu__language" onClick={onChangeLanguage}>Eng</div>
        </div>
    )
}
