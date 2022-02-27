'use strict'

const header = document.getElementById('myHeader');
const search = document.getElementById('search');

const hamIcon = document.getElementById('ham-icon');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('flyout-menu');

document.onscroll = () => {

    if (window.pageYOffset > 0) {
        header.style.backgroundColor = 'white';
        header.style.transition = `${0.2}s ease`;
    } else {
        header.style.backgroundColor = 'transparent';
    }

    if (window.pageYOffset > 325) {
        search.style.visibility = 'visible';
    } else {
        search.style.visibility = 'hidden';
    }
};

hamIcon.addEventListener("click", () => {
    menu.classList.toggle('active');
    overlay.style.visibility = 'visible';
    document.body.style.overflow = 'hidden';
});

overlay.addEventListener("click", () => {
    menu.classList.toggle('active');
    overlay.style.visibility = 'hidden';
    document.body.style.overflow = 'visible';
});
