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
//needs fixed

const switchPages = function(){
        console.log('menu');
}

section1.addEventListener('click', switchPages);