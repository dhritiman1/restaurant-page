const homePage = () => {
    
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');

    const textBox = document.createElement('div');

    const slogan = document.createElement('p');
    slogan.classList.add('slogan');
    slogan.textContent = "いらっしゃいませ！";

    const translation = document.createElement('p');
    translation.classList.add('main-text');
    translation.textContent = '頂きます!';

    textBox.appendChild(slogan);
    textBox.appendChild(translation);
    
    homeContainer.appendChild(textBox);
    
    return homeContainer;
};

export default homePage;