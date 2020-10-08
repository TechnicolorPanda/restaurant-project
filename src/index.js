//import page modules

import {loadHome} from "./modules/home.js";
import {loadMenu} from './modules/menu.js';
import {loadContactInfo} from './modules/contactInfo.js';

//load home page

initiate();

function initiate() {
    loadHome();
}

//add event listeners for tabs

const homeTab = document.querySelector('#home');
const menuTab = document.querySelector('#menu');
const contactsTab = document.querySelector('#contacts')

homeTab.addEventListener('click', () => {
    console.log('home');
    resetPage();
    loadHome();
})

menuTab.addEventListener('click', () => {
    console.log('menu');
    loadMenu();
}
)

contactsTab.addEventListener('click', () => {
    console.log('contacts');
    loadContactInfo();
}
)

//reset page to change tabs
//*fix*

const resetPage = function() {
    console.log('reset');
}