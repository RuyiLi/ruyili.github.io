const nav = $('nav');

function adjustNavOpacity () {
    const navRect = nav.getBoundingClientRect();
    nav.style.backgroundColor = `rgba(0, 0, 0, ${ (50 - navRect.top) / 100 })`;
}

window.addEventListener('scroll', adjustNavOpacity);
adjustNavOpacity();