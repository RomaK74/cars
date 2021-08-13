import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Instagram } from '../img/Instagram_white.svg';
import { ReactComponent as Telegram } from '../img/Telegram_white.svg';
import { ReactComponent as Facebook } from '../img/Facebook_white.svg';


export const BackgroundMenu = () => {
    return (
        <div className="menu-in">
            <ul>
                <li className="menu-in__item"><Link to="#">ПАРКОВКА</Link></li>
                <li className="menu-in__item"><Link to="#">СТРАХОВКА</Link></li>
                <li className="menu-in__item"><Link to="#">БЕНЗИН</Link></li>
                <li className="menu-in__item"><Link to="#">ОБСЛУЖИВАНИЕ</Link></li>
            </ul>
            <div className="social-networks">
                <div className="social-networks__item"><Link to="#">
                    <Facebook />
                </Link>
                </div>
                <div className="social-networks__item"><Link to="#">
                    <Instagram />
                </Link>
                </div>
                <div className="social-networks__item"><Link to="#">
                    <Telegram />
                </Link>
                </div>
            </div>
        </div>
    )
}