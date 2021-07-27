import React from 'react';
import {Maps} from "../../components/Maps";
import './index.scss';

export const OrderMap = () => {
    if (window.pageYOffset > 134) {
        document.getElementsByClassName('order-page-content__right-part')[0].style.position = 'fixed';
    }
    return (
        <div>
            <div className="order-form">
                <div className="order-form__city">
                    <label>Город:</label>
                    <input type="text"/>
                </div>
                <div className="order-form__point">
                    <label>Пункт выдачи:</label>
                    <input type="text" placeholder="Начните вводить пункт..."/>
                </div>
            </div>
        <div className="map">
            <span>Выбрать на карте: </span>
            <Maps />
        </div>
        </div>
    )
}