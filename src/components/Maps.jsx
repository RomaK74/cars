import {ListBox, ListBoxItem, Map, YMaps} from 'react-yandex-maps';
import React from "react";

export const Maps = () => {
    const cities = [
        {
            data: { content: 'Ульяновск' },
            options: { selectOnClick: false },
            coords: [54.3282, 48.3866],
        },
        {
            data: { content: 'Саранск' },
            options: { selectOnClick: false },
            coords: [54.1838, 45.1749],
        },
        {
            data: { content: 'Самара' },
            options: { selectOnClick: false },
            coords: [53.2001, 50.15],
        },
        {
            data: { content: 'Пенза' },
            options: { selectOnClick: false },
            coords: [53.2007, 45.0046],
        },
    ];

    const [mapState, setMapState] = React.useState({ center: [54.3282, 48.3866], zoom: 10 });

    const onItemClick = coords => {
        setMapState({ ...mapState, center: coords });
    };

    const widthScreen = window.screen.width;
    let width;
    let height;
    if (widthScreen <= 310) {
        width = 270;
    }
    else if (widthScreen <= 380) {
        width = 300;
    }
    else if (widthScreen <= 550) {
        width = 350;
    }
    else if (widthScreen <= 880) {
        width = 430;
    }
    else if (widthScreen <= 1010) {
        width = 520;
    }
    else if (widthScreen <= 1245) {
        width = 555;
    } else {
        width = 768;
        height = 352;
    }

    return (<YMaps>
        <Map width={width}
             height={height} state={mapState}>
            <ListBox data={{ content: 'Выберите город' }} options={{ float: 'right' }}>
                {cities.map(city =>
                    <ListBoxItem
                        data={city.data}
                        options={city.options}
                        onClick={() => onItemClick(city.coords)}
                        key={city.data.content}
                    />
                )}

            </ListBox>


        </Map>
    </YMaps>)
}