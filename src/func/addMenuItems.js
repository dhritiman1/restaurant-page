const addItems = (itemName, itemDesc, itemImgSrc) => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const menuInfo = document.createElement('div');
    menuInfo.classList.add('menu-info');

    const name = document.createElement('h3');
    name.classList.add('.dishName');
    name.textContent = itemName;

    const description = document.createElement('p');
    description.classList.add('.dishDescription');
    description.textContent = itemDesc;

    menuInfo.appendChild(name);
    menuInfo.appendChild(description);

    const dishImage = document.createElement('img');
    dishImage.classList.add('.dish');
    dishImage.src = itemImgSrc;

    menuItem.appendChild(menuInfo);
    menuItem.appendChild(dishImage);

    return menuItem;
};

export default addItems;

