import load from './load.js';
import home from '../pages/home.js';

const initialLoad = () => {
    load(home());
}

export default initialLoad;