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

    const hamMenu = document.querySelector(".ham_menu");

    const offScreenMenu = document.querySelector(".off_screen_menu");

    hamMenu.addEventListener("click", () => {
        hamMenu.classList.toggle("active");
        offScreenMenu.classList.toggle("active");
    });

    return {rmClass, activate, SwitchTabs};

})();

HomeTab();