import Parallax from 'parallax-js/dist/parallax.js';

const scene = document.querySelector('div#dogs');
new Parallax(scene, {
    relativeInput: true,
    hoverOnly: true,
});