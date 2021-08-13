import React from 'react';
import {Maps} from '../../components/Maps';
import './index.scss';
import {cities} from "../../data/cities";

export const OrderMap = ({city, setCity, point, setPoint}) => {
    const [cityInput, setCityInput] = React.useState('');

    const changeCity = (c) => {
        setCityInput(c);
        const cit = cities.filter(city => city.data.content.substring(0, 3) === c);
        if (cit.length === 1) {
            setCity(cit[0].data.content);
            setCityInput(cit[0].data.content);
        }
    }
    return (
        <div>
            <div className="order-form">
                <div className="order-form__city">
                    <label>Город:</label>
                    <input type="text" placeholder="Начните вводить город..."
                           onChange={e => changeCity(e.target.value)} value={cityInput}/>
                </div>
                <div className="order-form__point">
                    <label>Пункт выдачи:</label>
                    <input type="text" placeholder="Начните вводить пункт..." value={point}
                           onChange={e => setPoint(e.target.value)}/>
                </div>
            </div>
            <div className="map">
                <span>Выбрать на карте: </span>
                <Maps setPoint={setPoint} setCity={setCity}/>
            </div>
        </div>
    )
}