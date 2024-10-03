import "./style.css";
import { HomeTab } from "./home";
import { MenuTab } from "./menu";

const Buttons = (() => {

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
    
        return {home, menu}
    })();

    function rmClass() {
        const buttons = document.querySelectorAll('.tab');
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

})();

HomeTab();