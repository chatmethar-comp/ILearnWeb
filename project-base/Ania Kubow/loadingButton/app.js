const searchButton = document.querySelector('#search-button');
const searchButtonContent = document.querySelector('.loading');
searchButton.addEventListener('click', () => {
    toggleButton();
})

const toggleButton = () => {
    searchButtonContent.classList.toggle('loading')
}