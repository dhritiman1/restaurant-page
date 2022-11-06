import initialLoad from './func/initialLoad.js';
import headerAdder from './func/addHeader.js';
import aboutPage from './pages/about.js';
import menuPage from './pages/menu.js';
import homePage from './pages/home.js';
import load from './func/load.js';

headerAdder();
initialLoad();

const loader = () => {
    const menu = document.querySelector('.menu');
    menu.addEventListener('click', () => {
        load(menuPage());        
    });

    const home = document.querySelector('.home');
    home.addEventListener('click', () => {
        load(homePage());
    });

    const about = document.querySelector('.about');
    about.addEventListener('click', () => {
        load(aboutPage());
    });
}

loader();