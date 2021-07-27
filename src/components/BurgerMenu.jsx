import React, {useState} from "react";

export const BurgerMenu = ({toggleBM}) => {
    const [iconStatus, setIconStatus] = useState(false);

    const handleBM = () => {
        let burgerMenus = document.querySelectorAll('.burger-menu');

        if (!iconStatus) {
            setIconStatus(true);
            for (let i = 0; i < burgerMenus.length; i++) {
                document.getElementsByClassName('burger-menu_second-line')[i].classList.add('active');
                document.getElementsByClassName('burger-menu_third-line')[i].classList.add('active');
                document.getElementsByClassName('burger-menu_first-line')[i].classList.add('active');
                document.getElementsByClassName('burger-menu_forth-line')[i].classList.add('active');
            }
        } else {
            setIconStatus(false);
            for (let i = 0; i < burgerMenus.length; i++) {
                document.getElementsByClassName('burger-menu_second-line')[i].classList.remove('active');
                document.getElementsByClassName('burger-menu_third-line')[i].classList.remove('active');
                document.getElementsByClassName('burger-menu_first-line')[i].classList.remove('active');
                document.getElementsByClassName('burger-menu_forth-line')[i].classList.remove('active');
                document.getElementsByClassName('burger-menu_first-line')[i].style.display = 'block';
                document.getElementsByClassName('burger-menu_forth-line')[i].style.display = 'block';
            }
        }
        toggleBM(iconStatus);
    }

    return <div className="burger-menu" onClick={handleBM}>
        <div className="burger-menu__line burger-menu_first-line"/>
        <div className="burger-menu__line burger-menu_second-line"/>
        <div className="burger-menu__line burger-menu_third-line"/>
        <div className="burger-menu__line burger-menu_forth-line"/>
    </div>
}
