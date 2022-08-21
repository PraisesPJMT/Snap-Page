// const mobileWindow = window.matchMedia('(max-width: 377px)');

const mobileMenuOpen = document.querySelector('.menu-icon');
const mobileMenuClose = document.querySelector('.close-icon');
const featureTab = document.querySelector('.feature');
const companyTab = document.querySelector('.company');

const dropDown = (input) => {
    let navBar;
    if (input.classList.contains('arrow')) {
        navBar = input.parentElement;
    } else {
        navBar = input;
    }
    const nav = navBar.parentElement.querySelector('ul');
    const arrowUp = navBar.querySelector('.arrow-up');
    const arrowDown = navBar.querySelector('.arrow-down');
    if (nav.style.display === 'none') {
        nav.style.display = 'flex';
        arrowDown.style.display = 'none';
        arrowUp.style.display = 'inline';
    } else {
        nav.style.display = 'none'
        arrowDown.style.display = 'inline';
        arrowUp.style.display = 'none';
    }
}

if (window.innerWidth <= 414) {
    mobileMenuOpen.addEventListener('click', () => {
        const nav = document.querySelector('nav');
        nav.style.display = 'block';
    });

    mobileMenuClose.addEventListener('click', () => {
        const nav = document.querySelector('nav');
        nav.style.display = 'none';
    });

    featureTab.addEventListener('click', (event) => {
        dropDown(event.target);
    })

    companyTab.addEventListener('click', (event) => {
        event.preventDefault();
        dropDown(event.target);
    })
}