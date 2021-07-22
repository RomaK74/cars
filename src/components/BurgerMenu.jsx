import React from "react";

export const BurgerMenu = ({toggleBM}) => {
    return <div className="burger-menu" onClick={toggleBM}>
        <div className="burger-menu__line burger-menu_first-line"/>
        <div className="burger-menu__line burger-menu_second-line"/>
        <div className="burger-menu__line burger-menu_third-line"/>
        <div className="burger-menu__line burger-menu_forth-line"/>
    </div>
}
