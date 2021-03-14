const button = document.querySelector('.projectsbutton');
const nav = document.querySelector('nav');

function buttonToggle() {
    if (nav.style.left === '100%') {
        nav.style.left = '0%';
    }

    else {
        nav.style.left = '100%';
    }
}

button.addEventListener('click', buttonToggle);