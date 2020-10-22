//import page modules

import {loadHome} from './modules/home.js';
import {loadMenu} from './modules/menu.js';
import {loadContactInfo} from './modules/contactInfo.js';

initiatePage();

function initiatePage() {

    //load home page

    const contentSection = document.querySelector('#content');

    loadHome(contentSection);

    //load tabs

    const sectionTabs = document.querySelector('#tabs');

    sectionTabs.innerHTML =
        `<nav class = 'header'>
            <ul>
                <li id = 'home'>Home</a></li>
                <li id = 'menu'>Menu</a></li>
                <li id = 'contacts'>Contacts</a></li>
            </ul>
        </nav>`

    const homeTab = document.querySelector('#home');
    const menuTab = document.querySelector('#menu');
    const contactsTab = document.querySelector('#contacts');

    //add event listeners for tabs

    homeTab.addEventListener('click', () => {
        console.log('home');
        console.log(contentSection.childElementCount);
        resetPage(contentSection);
        loadHome(contentSection);
        }
    )

    menuTab.addEventListener('click', () => {
        console.log('menu');
        console.log(contentSection.childElementCount);
        resetPage(contentSection);
        loadMenu(contentSection);
        }
    )

    contactsTab.addEventListener('click', () => {
        console.log('contacts');
        console.log(contentSection.childElementCount);
        resetPage(contentSection);
        loadContactInfo(contentSection);
        }
    )
}

//reset page to change tabs

const resetPage = function(contentSection) {

    console.log('reset');

    while (contentSection.childElementCount > 0) {
        contentSection.removeChild(contentSection.lastChild);
    }
};
