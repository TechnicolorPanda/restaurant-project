
import {loadHome} from "./modules/home.js";
import {loadMenu} from './modules/menu.js';
import {loadContactInfo} from './modules/contactInfo.js';

initiate();

function initiate() {
    console.log("initiate");
    loadHome();
}