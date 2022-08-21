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
    const nav = navBar.parentElement.querySelector('.sub-menu');
    const arrowUp = navBar.querySelector('.arrow-up');
    const arrowDown = navBar.querySelector('.arrow-down');
    if (!nav.classList.contains('show')) {
        nav.classList.remove('hide')
        nav.classList.add('show');
        arrowDown.style.display = 'none';
        arrowUp.style.display = 'inline';
    } else {
        nav.classList.remove('show');
        nav.classList.add('hide')
        arrowDown.style.display = 'inline';
        arrowUp.style.display = 'none';
    }
}

if (window.innerWidth <= 769) {
    const subNavs = document.querySelectorAll('.sub-menu');
    subNavs.forEach((subNav) => {
        subNav.classList.add('hide');
    })
    featureTab.addEventListener('click', (event) => {
        dropDown(event.target);
    })

    companyTab.addEventListener('click', (event) => {
        dropDown(event.target);
    })
} else if (window.innerWidth > 769) {
    featureTab.removeEventListener('click', () => {
        const nav = document.querySelector('nav');
        const subNavs = nav.querySelectorAll('.sub-menu');
        nav.style.display = 'none';
        subNavs.forEach((subNav) => {
            subNav.classList.remove('hide');
            subNav.classList.remove('show');
        })
    })

    companyTab.removeEventListener('click', () => {
        const nav = document.querySelector('nav');
        const subNavs = nav.querySelectorAll('.sub-menu');
        nav.style.display = 'none';
        subNavs.forEach((subNav) => {
            subNav.classList.remove('hide');
            subNav.classList.remove('show');
        })
    })
}

window.addEventListener('resize', ()=> {
    if (window.innerWidth <= 769) {
        const nav = document.querySelector('nav');
        nav.style.display = 'none';
        const subNavs = nav.querySelectorAll('.sub-menu');
        subNavs.forEach((subNav) => {
            subNav.classList.add('hide');
        })

        featureTab.addEventListener('click', (event) => {
            dropDown(event.target);
        })

        companyTab.addEventListener('click', (event) => {
            dropDown(event.target);
        })
    } else  {
        const nav = document.querySelector('nav');
        nav.style.display = 'flex';
        nav.querySelectorAll('.features-nav').forEach((subNav) => {
            subNav.classList.remove('show');
            subNav.classList.remove('hide');
        })
    }
})

mobileMenuOpen.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    const subNavs = nav.querySelectorAll('.sub-menu');
    nav.style.display = 'block';
    subNavs.forEach((subNav) => {
        subNav.classList.add('hide');
    })
});

mobileMenuClose.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    const subNavs = nav.querySelectorAll('.sub-menu');
    nav.style.display = 'none';
    subNavs.forEach((subNav) => {
        subNav.classList.remove('hide');
        subNav.classList.remove('show');
    })
});