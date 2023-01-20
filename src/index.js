
import './styles/main.scss';
import preloader from './js/preloader';
import btnToTop from './js/btn-to-top';


window.addEventListener('DOMContentLoaded', function() {
    // preloader();
    btnToTop();
});

// load all images
//каждую подпапку импортируем отдельно (иконки просто копируются в конфиге)
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg|gif)$/));
const slider = importAll(require.context('./images/slider', false, /\.(png|jpe?g|svg|gif)$/));
const logo = importAll(require.context('./images/logo', false, /\.(png|jpe?g|svg|gif)$/));

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

