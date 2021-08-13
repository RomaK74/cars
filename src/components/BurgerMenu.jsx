import React, {useState} from 'react';

export const BurgerMenu = ({toggleBM, lineMenu}) => {
    const [iconStatus, setIconStatus] = useState(false);

    const handleBM = () => {
        !iconStatus ?
            setIconStatus(true) :
            setIconStatus(false);
        toggleBM(iconStatus, lineMenu);
    }

    return <div className="burger-menu" onClick={handleBM}>
        <div className={!iconStatus ? "burger-menu__line burger-menu_first-line" : "burger-menu__line burger-menu_first-line active"}/>
        <div className={!iconStatus ? "burger-menu__line burger-menu_second-line" : "burger-menu__line burger-menu_second-line active"}/>
        <div className={!iconStatus ? "burger-menu__line burger-menu_third-line" : "burger-menu__line burger-menu_third-line active"}/>
        <div className={!iconStatus ? "burger-menu__line burger-menu_forth-line" : "burger-menu__line burger-menu_forth-line active"}/>
    </div>
}
