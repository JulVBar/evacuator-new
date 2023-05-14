
import './styles/main.scss';
import preloader from './js/preloader';
import nav from './js/nav';
import burger from './js/burger';
import buttonsJs from './js/buttonsJs';
import pageScrollAnimation from './js/pageScrollAnimation';
import counter from './js/counter';
import calculator from './js/calculator';
import accordion from './js/accordion';
import swiper from './js/swiper';

window.addEventListener('DOMContentLoaded', function() {
    preloader();
    buttonsJs();
    nav();
    burger();
    pageScrollAnimation();
    counter();
    calculator();
    accordion();
    swiper();
});

// load all images
//каждую подпапку импортируем отдельно (иконки просто копируются в конфиге)
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg|gif)$/));
const calculatorImg = importAll(require.context('./images/calculator', false, /\.(png|jpe?g|svg|gif)$/));
const logo = importAll(require.context('./images/logo', false, /\.(png|jpe?g|svg|gif)$/));

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

