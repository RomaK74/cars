import React from 'react';
import car1 from '../../img/image-1.png';
import car2 from '../../img/image-2.png';
import car3 from '../../img/image-3.png';
import car4 from '../../img/image-4.png';
import './index.scss';
import {Car} from "../../components/Car";

export const OrderModel = () => {
    const [state, setState] = React.useState({});
    const handleChange = e => {
        const {name, value} = e.target;

        setState({
            [name]: value
        });
    };

    const cars = [
        {
            name: 'ELANTRA',
            price: '12 000 - 25 000 ₽',
            image: car1
        },
        {
            name: 'i30 N',
            price: '10 000 - 32 000 ₽',
            image: car2
        },
        {
            name: 'CRETA',
            price: '12 000 - 25 000 ₽',
            image: car3
        },
        {
            name: 'SONATA',
            price: '10 000 - 32 000 ₽',
            image: car4
        },
        {
            name: 'ELANTRA',
            price: '12 000 - 25 000 ₽',
            image: car1
        },
        {
            name: 'i30 N',
            price: '10 000 - 32 000 ₽',
            image: car2
        },
        {
            name: 'SONATA',
            price: '10 000 - 32 000 ₽',
            image: car4
        },
        {
            name: 'ELANTRA',
            price: '12 000 - 25 000 ₽',
            image: car1
        },
        {
            name: 'i30 N',
            price: '10 000 - 32 000 ₽',
            image: car2
        },
    ]
    return (
        <div className="order-model">
            <div className="radio-buttons">
                <input
                    id="all"
                    value="Все модели"
                    name="model"
                    type="radio"
                    onChange={handleChange}
                />
                <label htmlFor="all">Все модели</label>
                <input
                    id="economy"
                    value="Эконом"
                    name="model"
                    type="radio"
                    onChange={handleChange}
                />
                <label htmlFor="economy">Эконом</label>
                <input
                    id="premium"
                    value="Премиум"
                    name="model"
                    type="radio"
                    onChange={handleChange}
                />
                <label htmlFor="premium">Премиум</label>
            </div>
            <div className="cars">
                {cars.map(car =>
                        <Car name={car.name} price={car.price} image={car.image}/>

                )}
            </div>
        </div>
    )
}