import menu1 from "./img/menu1.jpg";
import menu2 from "./img/menu2.jpg";
import menu3 from "./img/menu3.jpg";
import menu4 from "./img/menu4.jpg";
import menu5 from "./img/menu5.jpeg";
import menu6 from "./img/menu6.jpg";

export const MenuTab = (() => {
    const content = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.setAttribute('class', 'menu_tab');
    
    const h2 = document.createElement('h2');
    h2.setAttribute('class', 'h2');
    h2.textContent = 'Menu';

    const menuContent = document.createElement('div');
    menuContent.setAttribute('class', 'menu_content');

    let menuCards = [];
    for (let i = 0; i <= 5; i++) {
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
        MenuObj.price = document.createElement('div');
        MenuObj.price.setAttribute('class', 'price');

        menuCard.appendChild(MenuObj.img);
        menuCard.appendChild(MenuObj.h3);
        menuCard.appendChild(MenuObj.descr);
        menuCard.appendChild(MenuObj.price);
        menuContent.appendChild(menuCard);
        menuCards.push(MenuObj);
    };

    menuCards[0].img.src = menu1;
    menuCards[0].h3.textContent = 'Pork Baby Back Ribs Burger';
    menuCards[0].descr.textContent = 'New! Pork ribs, onions, pickles, barbecue sauce and a secret ingridient.';
    menuCards[0].price.textContent = '$6.9';

    menuCards[1].img.src = menu2;
    menuCards[1].h3.textContent = 'Mammoth Burger';
    menuCards[1].descr.textContent = 'Extra big burger! Double beef patty, onion rings, lettuce and special sauce.';
    menuCards[1].price.textContent = '$8.8';

    menuCards[2].img.src = menu3;
    menuCards[2].h3.textContent = 'Durham Ranch Bison Burge';
    menuCards[2].descr.textContent = 'Hit! Beef patty, fresh tomatoes and onions, ranch sauce.';
    menuCards[2].price.textContent = '$7.2';

    menuCards[3].img.src = menu4;
    menuCards[3].h3.textContent = 'Super Cheeseburger';
    menuCards[3].descr.textContent = 'Hit! Beef, cheese, salad, cheese, onions, cheese and cheese again.';
    menuCards[3].price.textContent = '$6.9';

    menuCards[4].img.src = menu5;
    menuCards[4].h3.textContent = 'Humble chickenburger';
    menuCards[4].descr.textContent = 'Light burger! Chicken, tomatoes and a tasty sauce';
    menuCards[4].price.textContent = '$5.3';

    menuCards[5].img.src = menu6;
    menuCards[5].h3.textContent = 'Pizza Burger';
    menuCards[5].descr.textContent = 'Pizza + Burger!!! Bacon, beef patty, cheese, tomatoes, special sauce';
    menuCards[5].price.textContent = '$9.69';

    menu.appendChild(h2);
    menu.appendChild(menuContent);
    content.appendChild(menu);

    return {menuContent, menuCards};

});