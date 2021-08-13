import React from 'react';
import {BurgerMenu} from './BurgerMenu';

export const LineMenu = ({menu, toggleBM}) => {
    let [language, setLanguage] = React.useState('Rus');
    const onChangeLanguage = () => {
        language === 'Eng' ? setLanguage('Rus') : setLanguage('Eng')
    }
    const lineMenu = React.useRef();

    return (
        <div className="line-menu" ref={lineMenu}>
            <BurgerMenu toggleBM={toggleBM} lineMenu={lineMenu}/>
            {!menu && <div className="line-menu__language" onClick={onChangeLanguage}>{language}</div>}
        </div>
    )
}
