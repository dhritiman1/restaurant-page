const about = () => {
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('restaurant-img');

    const image = document.createElement('img');
    image.src = 'assets/restaurantImg.svg';
    imageContainer.appendChild(image);

    const aboutText = document.createElement('div');
    aboutText.classList.add('text');

    const aboutHeading = document.createElement('h1');
    aboutHeading.textContent = '[ ABOUT US ]'
    const aboutDesc = document.createElement('p');
    aboutDesc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    aboutText.appendChild(aboutHeading);
    aboutText.appendChild(aboutDesc);

    aboutContainer.appendChild(imageContainer);
    aboutContainer.appendChild(aboutText);

    return aboutContainer;
};

export default about;