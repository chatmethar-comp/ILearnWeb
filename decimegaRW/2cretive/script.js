document.querySelectorAll('.story-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('show');
        btn.nextElementSibling.classList.toggle('show');
    })
})