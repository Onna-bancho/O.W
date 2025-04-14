const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', performSearch);

searchInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const searchTerm = searchInput.value;
    if (searchTerm.trim() !== '') {
        console.log('Searching for:', searchTerm);
        // Add your search logic here, such as redirecting to a search results page
        // or filtering a list of items.
    } else {
        alert('Please enter a search term.');
    }
}

