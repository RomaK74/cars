import React from 'react';
import {Button} from "./Button";

export const OrderInfo = () => {
    return (
        <div className="order-info">
            <h4>Ваш заказ:</h4>
            <div className="order-info__properties">
                <ul>
                    <li><span>Пункт выдачи</span>
                        <div />
                        <span className="order-info-from-user order-info-address">Ульяновск, Нариманова 42</span></li>
                    <li><span>Модель</span>
                        <div />
                        <span className="order-info-from-user order-info-model">Hyndai, i30 N</span></li>
                </ul>
            </div>
            <div className="order-info__price">
                <b>Цена:</b>
                <span> от 10 000 до 32 000 ₽</span>
            </div>
            <Button btnText="Дополнительно"/>
        </div>
    )
}