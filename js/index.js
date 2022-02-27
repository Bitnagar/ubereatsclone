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

}

hamIcon.addEventListener("click", () => {
    menu.classList.toggle('active');
    overlay.style.visibility = 'visible';
    document.body.style.overflow = 'hidden';
})

overlay.addEventListener("click", () => {
    menu.classList.toggle('active');
    overlay.style.visibility = 'hidden';
    document.body.style.overflow = 'visible';
})

// function showMenu(e) {

//     menu.classList.add("show");
//     overlay.classList.add("show");

//     document.body.style.overflow = 'hidden';
//     e.stopPropagation();

// }

// function closeMenu(e) {

//     // menu.classList.add("hidden");
//     menu.classList.remove("show");
//     overlay.classList.remove("show");

//     document.body.style.overflow = 'auto';
//     e.stopPropagation();

// }

// let isOpen;

// hamIcon.addEventListener("click", () => {
//     if(!isOpen) {
//         menu.style.transition = `transform ${0.3}s cubic-bezier(0, 1.02, 0.58, 1)`
//         menu.style.transform =`translateX(${0}vw)`;
//         overlay.style.visibility = `visible`;
//         isOpen = true;
//     }
// }, false);

// overlay.addEventListener("click", () => {
//     if(isOpen) {
//         menu.style.transition = `transform ${1}s ease`
//         menu.style.transform =`translateX(${-100}vw)`;
//         overlay.style.visibility = `hidden`;
//         isOpen = false;
//     }
// }, false);


