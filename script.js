let searchText = document.querySelector('#searchText');
let searchNow = document.querySelector('#searchNow');
let searchResult = document.querySelector('.searchResult');

searchNow.addEventListener('click', () => {
    if (searchText.value !== "") {
        let searchTerm = encodeURIComponent(searchText.value);
        let yahooUrl = `https://search.yahoo.com/search?p=${searchTerm}`;

        window.open(yahooUrl, '_blank');

        searchResult.innerHTML = `<a href="${yahooUrl}" target="_blank">${yahooUrl}</a>`;
    }
});
