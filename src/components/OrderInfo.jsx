import React from 'react';

export const OrderInfo = ({city, point}) => {
    return (
        <div className="order-info">
            <h4>Ваш заказ:</h4>
            <div className="order-info__properties">
                <ul>
                    {point && city && <li><span>Пункт выдачи</span>
                        <div className="dots"/>
                        <div className="order-info-from-user order-info-address__city">{city},</div>
                        <span className="order-info-from-user order-info-address">{point}</span></li>}
                    <li><span>Модель</span>
                        <div className="dots"/>
                        <span className="order-info-from-user order-info-model">Hyndai, i30 N</span></li>
                </ul>
            </div>
            <div className="order-info__price">
                <b>Цена:</b>
                <span> от 10 000 до 32 000 ₽</span>
            </div>
            <button className="">Дополнительно</button>
        </div>
    )
}