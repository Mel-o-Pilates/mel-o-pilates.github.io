async function loadPageContent() {
    const delay = 250;

    const sections = document.getElementsByTagName('section');

    for (const sect of sections) {
        await new Promise(res => setTimeout(res, delay));
        sect.style.opacity = 1;
    }

}

document.addEventListener('DOMContentLoaded', async function(event) {
    loadPageContent();
});