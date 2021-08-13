import React from 'react';
import {Logo} from '../../components/Logo';
import {Location} from '../../components/Location';
import {NavLink} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import './index.scss';
import {OrderMap} from '../OrderMap/OrderMap';
import {OrderInfo} from '../../components/OrderInfo';
import {OrderModel} from '../orderModel/OrderModel';
import {BurgerMenu} from '../../components/BurgerMenu';
import Vector from '../../img/Vector.svg';

export const Order = ({pressBM}) => {
    const usingBM = (iconStatus) => {
        pressBM(iconStatus);
    }

    const [city, setCity] = React.useState('');
    const [point, setPoint] = React.useState('');

    return (
        <div className="order-page-container">
            <div className="order-page-main">
                <div className="order-page-content">
                    <div className="order-page-header-container">
                        <BurgerMenu style={{display: 'none'}} toggleBM={usingBM}/>
                        <div className="order-page-content__header">
                            <Logo/>
                            <Location/>
                        </div>
                    </div>
                    <div className="steps">
                        <div className="steps__container">
                            <span className="steps__item link"><NavLink
                                to="/cars/build/order/location">Местоположение</NavLink></span>
                            <span className="steps__item icon"><img src={Vector} width="6" height="8"
                                                                    alt="Next"/></span>
                            <span className="steps__item link"><NavLink
                                to="/cars/build/order/model">Модель</NavLink></span>
                            <span className="steps__item icon"><img src={Vector} width="6" height="8"
                                                                    alt="Next"/></span>
                            <span className="steps__item link"><NavLink
                                to="/cars/build/order/add">Дополнительно</NavLink></span>
                            <span className="steps__item icon"><img src={Vector} width="6" height="8"
                                                                    alt="Next"/></span>
                            <span className="steps__item link"><NavLink
                                to="/cars/build/order/result">Итого</NavLink></span>
                        </div>
                    </div>
                    <div className="order-page-content__main">
                        <div className="order-page-content__left-part">
                            <Switch>
                                <Route exact path="/cars/build/order/location" render={() => <OrderMap pressBM={usingBM} city={city} setCity={setCity} point={point} setPoint={setPoint}/>} />
                                <Route exact path="/cars/build/order/model" component={OrderModel}/>
                            </Switch>
                        </div>
                        <div className="order-page-content__right-part">
                            <OrderInfo city={city} point={point} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}