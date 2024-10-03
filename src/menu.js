export const MenuTab = (() => {
    const content = document.querySelector('#content');
    const menu = document.createElement('div');
    home.setAttribute('class', 'menu_tab');
    
    const h2 = document.createElement('h2');
    h2.setAttribute('class', 'h2');
    h2.textContent = 'Menu';

    const menuContent = document.createElement('div');
    menuContent.setAttribute('class', 'menu_content');

    let menuCards = [];
    for (let i = 0; i <= 6; i++) {
        const MenuObj = {};
        const menuCard = document.createElement('div');
        menuCard.setAttribute('class', 'menu_card');
        
        MenuObj.img = document.createElement('img');
        MenuObj.img.setAttribute('class', 'menu_img');
        MenuObj.h3 = document.createElement('h3');
        MenuObj.h3.setAttribute('class', 'h3');
        MenuObj.descr = document.createElement('div');
        MenuObj.descr.setAttribute('class', 'menu_descr');
        MenuObj.descr.setAttribute('class', 'text');

        menuCard.appendChild(MenuObj.img);
        menuCard.appendChild(MenuObj.h3);
        menuCard.appendChild(MenuObj.descr);
        menuContent.appendChild(menuCard);
        menuCards.push(MenuObj);
    };

    menu.appendChild(h2);
    menu.appendChild(menuContent);
    content.appendChild(menu);

    return {menuContent, menuCards};

});