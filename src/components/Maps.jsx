import {ListBox, ListBoxItem, Map, Placemark, YMaps} from 'react-yandex-maps';
import React from 'react';
import {cities} from '../data/cities';
import Point from '../img/point.svg';
import {coordinates} from "../data/coordinates";
import {points} from "../data/points";

export const Maps = ({setPoint, setCity}) => {
    const [mapState, setMapState] = React.useState({center: [54.3282, 48.3866], zoom: 10});
    const [widthScreen, setWidthScreen] = React.useState(window.screen.width);
    React.useEffect(() => {
        setWidthScreen(window.screen.width);
    }, []);
    let width;
    let height;
    switch (true) {
        case widthScreen <= 310:
            width = 270;
            break;
        case widthScreen <= 380:
            width = 300;
            break;
        case widthScreen <= 550:
            width = 350;
            break;
        case widthScreen <= 880:
            width = 430;
            break;
        case widthScreen <= 1010:
            width = 520;
            break;
        case widthScreen <= 1245:
            width = 555;
            break;
        default:
            width = 768;
            height = 352;
            break;
    }

    const onItemClick = (coords, city) => {
        setMapState({...mapState, center: coords});
        setCity(city);
    };

    const getPoint = (coord) => {
        setPoint(points.get(coord));
    }

    return (<YMaps>
        <Map width={width}
             height={height} state={mapState}>
            <ListBox data={{content: 'Выберите город'}}>
                {cities.map(city =>
                    <ListBoxItem
                        data={city.data}
                        options={city.options}
                        onClick={() => onItemClick(city.coords, city.data.content)}
                        key={city.data.content}
                    />
                )}

            </ListBox>
            {coordinates.map(coordinate => <Placemark key={coordinate} geometry={coordinate} properties={{
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }}
                                                      options={{
                                                          iconLayout: 'default#image',
                                                          iconImageHref: Point,
                                                          iconImageSize: [18, 18],
                                                          iconImageOffset: [-9, -9],
                                                          iconShape: {
                                                              type: 'Circle',
                                                              coordinates: [0, 0],
                                                              radius: 9
                                                          },
                                                      }}
                                                      onClick={() => getPoint(coordinate)}/>)}

        </Map>
    </YMaps>)
}