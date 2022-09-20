const icons = document.querySelectorAll('.section-1-icon i');
let i = 1;

setInterval(() => {
    i++;
    const icon = document.querySelector('.show');
    icon.classList.toggle('show');
    if (i > icons.length) {
        icons[0].classList.toggle('show');
        i = 1;
    } else {
        icon.nextElementSibling.classList.toggle('show')
    }
}, 2500);