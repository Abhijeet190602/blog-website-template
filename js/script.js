// script.js

// Function to handle search form submission
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('form[action="/search.html"]');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            const query = searchForm.querySelector('input[name="query"]').value;
            // Redirect to search results page with the query
            window.location.href = `/search.html?query=${encodeURIComponent(query)}`;
        });
    }

    // Example of a button click event (you can add a button in your HTML)
    const exampleButton = document.querySelector('.example-button');
    if (exampleButton) {
        exampleButton.addEventListener('click', function() {
            alert('Button clicked!');
        });
    }

    // Responsive navigation toggle for mobile view
    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-left ul');
            navMenu.classList.toggle('active'); // Toggle the active class to show/hide the menu
        });
    }
});