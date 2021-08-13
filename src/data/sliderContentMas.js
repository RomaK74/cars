import slide1 from "../img/slide-1.png";
import slide2 from "../img/slide-3.png";
import slide3 from "../img/slide-2.png";
import slide4 from "../img/slide-4.png";


const images = [slide1, slide2, slide3, slide4];

const titles = ['Бесплатная парковка', 'Страховка', 'Бензин', 'Обслуживание'];
const subtitles = ['Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
    'Полная страховка страховка автомобиля', 'Полный бак на любой заправке города за наш счёт', 'Автомобиль проходит еженедельное ТО'];
export const slidersContent = [
    {
        slide: images[0],
        title: titles[0],
        subtitle: subtitles[0],
        button: 'linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)'
    },
    {
        slide: images[1],
        title: titles[1],
        subtitle: subtitles[1],
        button: 'linear-gradient(90deg, #132949 0%, #0C7B67 100%)'
    },
    {
        slide: images[2],
        title: titles[2],
        subtitle: subtitles[2],
        button: 'linear-gradient(90deg, #493013 0%, #7B0C3B 100%)'
    },
    {
        slide: images[3],
        title: titles[3],
        subtitle: subtitles[3],
        button: 'linear-gradient(90deg, #281349 0%, #720C7B 100%)'
    },
];

