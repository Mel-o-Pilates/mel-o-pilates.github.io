function getViewport() {
    const phoneMaxWidth = 480;
    const phoneMaxHeight = 926;
    const tabletMaxWidth = 1080;
    const tabletMaxHeight = 1366;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const orientation = (window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait';

    let screenType;

    if (width <= phoneMaxWidth && height <= phoneMaxHeight || width <= phoneMaxHeight && height <= phoneMaxWidth) {
        screenType = 'phone';
    } 
    else if (width <= tabletMaxWidth && height <= tabletMaxHeight || width <= tabletMaxHeight && height <= tabletMaxWidth) {
        screenType = 'tablet';
    } 
    else {
        screenType = 'computer';
    }

    return {
        screenType: screenType,
        orientation: orientation
    };
}

function toggleMobileMenu(menu) {
    menu.classList.toggle('open')
    menu.parentElement.classList.toggle('open');
}

/*
document.addEventListener('DOMContentLoaded', async function(event) {
    var viewport = getViewport();

    switch (viewport.screenType) {
        case "phone":
        case "tablet":
        case "computer":
            const headerNavbar = document.querySelector('.header-navbar');
            const headerNavbarHTML = headerNavbar.innerHTML;

            const headerSocial = document.querySelector('.header-social-links');
            const headerSocialHTML = headerSocial.innerHTML;

            headerSocial.remove();

            headerNavbar.innerHTML = `
                <button class="header-navbar-menu-button">
                    <i class="fa-solid fa-bars"></i>
                </button>
            `;

            
            break;

        
        default:
            break;
    }
});
*/