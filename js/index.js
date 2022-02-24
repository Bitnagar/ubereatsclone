'use strict'

const header = document.getElementById('myHeader');

document.onscroll = () => {
    if(window.pageYOffset > 0) {
        header.style.backgroundColor = 'white';
        header.style.transition = `${0.2}s ease`
    } else {
        header.style.backgroundColor = 'transparent';
    }
}

const hamIcon = document.getElementById('ham-icon');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('flyout-menu');

hamIcon.addEventListener("click", showMenu, false);

overlay.addEventListener("click", closeMenu, false);

function showMenu(e) {
    menu.classList.add("show");
    overlay.classList.add("show");

    document.body.style.overflow = 'hidden';
    e.stopPropagation();
}

function closeMenu(e) {
    menu.classList.remove("show");
    overlay.classList.remove("show");

    document.body.style.overflow = 'auto';
    e.stopPropagation();
}


