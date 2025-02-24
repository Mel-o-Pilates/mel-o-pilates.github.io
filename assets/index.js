async function toggleMobileMenu(menu) {
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.toggle('close');
        menu.parentElement.classList.toggle('open');
        await new Promise(res => setTimeout(res, 200));
        mobileMenu.classList.toggle('open');
        mobileMenu.classList.toggle('close');
    } else {
        menu.parentElement.classList.toggle('open');
        mobileMenu.classList.toggle('open');
    }
}

async function loadContent() {
    const delay = 100;

    await new Promise(res => setTimeout(res, 50));
    document.querySelector('#brand').style.opacity = 1;

    await new Promise(res => setTimeout(res, delay));
    document.querySelector('#nav-menu').style.opacity = 1;
    document.querySelector('.navbar').style.opacity = 1;
    document.querySelector('.footer-social-links').style.opacity = 1;

    await new Promise(res => setTimeout(res, delay));
    document.querySelector('.nav-social-links').style.opacity = 1;
    document.querySelector('.footer-navbar').style.opacity = 1;
}

document.addEventListener('DOMContentLoaded', async function(event) {
    loadContent();
});
