import content from './contentBox'
import changeBg from './background.js';

const load = (page) => {
    const contentContainer = content();
    const bgImage = changeBg();

    while(contentContainer.lastChild.className !== 'header-content'){
        contentContainer.removeChild(contentContainer.lastChild);
    }

    if (page.className === 'home-container') {
        bgImage.style.backgroundImage = 'url(\'assets/ramenbg.svg\')';
        contentContainer.appendChild(bgImage);
    } else if (page.className === 'about-container') {
        bgImage.style.backgroundImage = 'url(\'assets/bg.png\')';
        contentContainer.appendChild(bgImage);
    } else if (page.className === 'menu-container') {
        bgImage.style.backgroundImage = 'url(\'assets/ramenbg.svg\')';
        bgImage.classList.add('blur');
        contentContainer.appendChild(bgImage);
    }

    contentContainer.appendChild(page);
}

export default load;