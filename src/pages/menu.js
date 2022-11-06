import addItems from "../func/addMenuItems.js";

const menu = () => {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const title = document.createElement('h2');
    title.textContent = 'Menu';
    menuContainer.appendChild(title);

    const itemList = document.createElement('div');
    itemList.classList.add('menu-list');

    const item1 = addItems('item1',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        'assets/1.png');
    itemList.appendChild(item1);

    const item2 = addItems('item2',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        'assets/2.png');
    itemList.appendChild(item2);

    const item3 = addItems('item3',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        'assets/3.png');
    itemList.appendChild(item3);

    const item4 = addItems('item4',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        'assets/4.png');
    itemList.appendChild(item4);

    const item5 = addItems('item5',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        'assets/5.png');
    itemList.appendChild(item5);

    menuContainer.appendChild(itemList);
    return menuContainer;
}

export default menu;