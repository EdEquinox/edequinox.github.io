import { loadProjectsPage } from './projects.js';
import { loadLanguagePage } from './skills.js';
import { loadBio } from './bio.js';

document.addEventListener("DOMContentLoaded", function () {

  const pageDiv = document.getElementById("page");

  // Function to load content into the page div
  function loadContent(page) {
    fetch(page)
      .then(response => response.text())
      .then(data => {
        pageDiv.innerHTML = data;
        if (page.includes('pages/projects.html')) {
          loadProjectsPage();
        }
        if (page.includes('pages/habilitations.html')) {
          loadLanguagePage();
        }
        if (page.includes('pages/bio.html')) {
          loadBio();
        }
      })
      .catch(error => console.error('Error loading content:', error));
  }

  // Load the initial content (e.g., home page)
  loadContent('pages/bio.html');

  document.querySelector('.navbar-toggler').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.navbar-collapse').classList.toggle('show');
  });

  // Add event listeners to navigation links
  document.querySelectorAll('#top-bar .nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      document.querySelector('.navbar-collapse').classList.remove('show');
      const page = this.getAttribute('href');
      loadContent(page);
      // Close the navigation menu
    });
  });

  // Add event to logo to load home page
  document.querySelector('#logo').addEventListener('click', function (event) {
    event.preventDefault();
    loadContent('pages/bio.html');
  });
  
});
