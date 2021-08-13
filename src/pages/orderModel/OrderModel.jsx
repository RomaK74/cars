import React from 'react';
import './index.scss';
import {Model} from '../../components/Model';
import {cars} from '../../data/cars';

export const OrderModel = () => {
    const [state, setState] = React.useState({});
    const handleChange = e => {
        const {name, value} = e.target;
        setState({
            [name]: value
        });
    };

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
                {cars.map((car, index) =>
                    <Model key={index} name={car.name} price={car.price} image={car.image}/>
                )}
            </div>
        </div>
    )
}