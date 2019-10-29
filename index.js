document.addEventListener('DOMContentLoaded', init);

const $ = document.querySelector.bind(document);

function init () {
    new Swup({
        linkSelector: 'a[href^="/"]',
        debug: true
    });
}