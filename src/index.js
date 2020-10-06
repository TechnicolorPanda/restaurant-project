//import page modules

import {loadHome} from "./modules/home.js";
import {loadMenu} from './modules/menu.js';
import {loadContactInfo} from './modules/contactInfo.js';

//load home page

initiate();

function initiate() {
    loadHome();
}

//create tabs

//const header = document.querySelector('header');

const menu = document.createElement('section');
menu.innerHTML = `
    <h2>Menu</h2>
`

const selectMenu = document.getElementById('menu');
selectMenu.addEventListener("click", loadMenu());

    // const selectContent = function(event) {
    //     const newContentLink = event.target.closest('a');
    //     const mainSection = document.querySelector('.section-content');

        
    // };

    // header.addEventListener('click', selectContent);
    // header.querySelector('.sections-list__link[data-content="home"]').click();