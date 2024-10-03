export const HomeTab = (() => {
    const content = document.querySelector('#content');
    const home = document.createElement('div');
    home.setAttribute('class', 'home_tab');
    
    const h2 = document.createElement('h2');
    h2.setAttribute('class', 'h2');
    h2.textContent = 'Home';

    const homeContent = document.createElement('div');
    homeContent.setAttribute('class', 'home_content');

    const descr = document.createElement('div');
    descr.setAttribute('class', 'text');
    descr.setAttribute('class', 'home_descr');

    const imgs = document.createElement('div');
    imgs.setAttribute('class', 'imgs_wrapper');
    for (let i = 0; i <= 3; i++) {
        const img = document.createElement('img');
        img.setAttribute('class', 'home_img');
        imgs.appendChild(img);
    };

    homeContent.appendChild(descr);
    homeContent.appendChild(imgs);
    home.appendChild(h2);
    home.appendChild(homeContent);
    content.appendChild(home);

    return {home, h2, homeContent, descr, imgs};

});