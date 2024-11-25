const nav = document.querySelector('.header__nav');
const navButton = document.querySelector('.header__nav-button');
const navLinks = document.querySelectorAll('.header__nav-link');

navButton.addEventListener('click', toggleMenu);

for (const link of navLinks) {
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            toggleMenu();
        }
    });
}

function toggleMenu() {
    document.body.classList.toggle('no-scroll');
    nav.classList.toggle('active');
    navButton.classList.toggle('active');
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && nav.classList.contains('active')) {
        navButton.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});

document.getElementById('year').textContent = new Date().getFullYear();