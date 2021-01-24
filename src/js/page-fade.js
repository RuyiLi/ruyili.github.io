const mainContainer = document.querySelector('main');
mainContainer.classList.remove(VISIBILITY_CLASS);

document.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function (evt) {
        evt.preventDefault();
        mainContainer.classList.add(VISIBILITY_CLASS);
        setTimeout(function () {
            window.location = a.href;
        }, 150);
    });
});
