import header from '../pages/header';
import contentBox from './contentBox';

const addHeader = () => {
    const content = contentBox();
    const headerBox = header();
    content.appendChild(headerBox);
}

export default addHeader;