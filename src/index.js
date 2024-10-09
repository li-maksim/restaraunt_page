import "./style.css";
import { HomeTab } from "./home";
import { MenuTab } from "./menu";
import { ContactsTab } from "./contacts";

export const Buttons = (() => {

    const SwitchTabs = (() => {
        function hideTab() {
            const content = document.querySelector('#content');
            content.textContent = '';
        };
    
        function home() {
            hideTab();
            HomeTab();
        };
    
        function menu() {
            hideTab();
            MenuTab();
        };

        function contacts() {
            hideTab();
            ContactsTab();
        }
    
        return {home, menu, contacts}
    })();

    function rmClass() {
        const buttons = document.querySelectorAll('.button');
        buttons.forEach((el) => el.classList.remove('act_btn'));
    };
    function activate() {
        this.classList.add('act_btn');
    };

    const homeBtn = document.querySelector('#home');
    homeBtn.addEventListener('click', rmClass);
    homeBtn.addEventListener('click', activate);
    homeBtn.addEventListener('click', SwitchTabs.home);
    const menuBtn = document.querySelector('#menu');
    menuBtn.addEventListener('click', rmClass);
    menuBtn.addEventListener('click', activate);
    menuBtn.addEventListener('click', SwitchTabs.menu);
    const contactsBtn = document.querySelector('#contacts');
    contactsBtn.addEventListener('click', rmClass);
    contactsBtn.addEventListener('click', activate);
    contactsBtn.addEventListener('click', SwitchTabs.contacts);

    const hamHomeBtn = document.querySelector('#ham_home');
    hamHomeBtn.addEventListener('click', SwitchTabs.home);
    const hamMenuBtn = document.querySelector('#ham_menu');
    hamMenuBtn.addEventListener('click', SwitchTabs.menu);
    const hamContactsBtn = document.querySelector('#ham_contacts');
    hamContactsBtn.addEventListener('click', SwitchTabs.contacts);

    const hamMenu = document.querySelector(".ham_menu");
    const offScreenMenu = document.querySelector(".off_screen_menu");
    const hamBtns = document.querySelectorAll('.ham_btn');
    function switchMenu() {
        hamMenu.classList.toggle("active");
        offScreenMenu.classList.toggle("active");
    };
    hamMenu.addEventListener("click", switchMenu);
    hamBtns.forEach(function(i) {i.addEventListener('click', switchMenu)});

    return {rmClass, activate, SwitchTabs};

})();

HomeTab();