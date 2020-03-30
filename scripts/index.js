const $ = document.querySelector.bind(document);
new Swup({
    linkSelector: 'a[href^="/"]:not([href^="/resume"])',
    debug: true
});