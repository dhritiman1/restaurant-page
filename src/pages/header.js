const header = () => {
    const headerContent = document.createElement('div');
    headerContent.classList.add('header-content');

    const pageList = document.createElement('div');
    pageList.classList.add('page-list');

    const home = document.createElement('div');
    const menu = document.createElement('div');
    const about = document.createElement('div');
    
    const homeText = document.createElement('p');
    homeText.classList.add('home');
    const menuText = document.createElement('p');
    menuText.classList.add('menu');
    const aboutText = document.createElement('p');
    aboutText.classList.add('about');

    homeText.textContent = 'Home';
    menuText.textContent = 'Menu';
    aboutText.textContent = 'About';

    home.appendChild(homeText);
    menu.appendChild(menuText);
    about.appendChild(aboutText);
    
    pageList.appendChild(home);
    pageList.appendChild(menu);
    pageList.appendChild(about);

    headerContent.appendChild(pageList);

    const logo = document.createElement('div');
    logo.classList.add('logo');
    const logoText = document.createElement('p');
    logoText.textContent = 'Oyasu Meals';
    logo.appendChild(logoText);

    headerContent.appendChild(logo);

    const socials = document.createElement('div');
    socials.classList.add('socials');

    const instagram = document.createElement('div');
    const twitter = document.createElement('div');

    const instagramText = document.createElement('p');
    const twitterText = document.createElement('p');

    instagramText.textContent = 'Instagram';
    twitterText.textContent = 'Twitter';

    instagram.appendChild(instagramText);
    twitter.appendChild(twitterText);

    socials.appendChild(instagram);
    socials.appendChild(twitter);

    headerContent.appendChild(socials);

    return headerContent;
};

export default header;