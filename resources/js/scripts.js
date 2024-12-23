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
        if (page.includes('projects.html')) {
          loadProjectsPage();
        }
        if (page.includes('habilitations.html')) {
          loadLanguagePage();
        }
        if (page.includes('bio.html')) {
          loadBio();
        }
      })
      .catch(error => console.error('Error loading content:', error));
  }

  // Load the initial content (e.g., home page)
  loadContent('bio.html');

  // Add event listeners to navigation links
  document.querySelectorAll('#top-bar .nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const page = this.getAttribute('href');
      loadContent(page);
    });
  });

  // Add event to logo to load home page
  document.querySelector('#logo').addEventListener('click', function (event) {
    event.preventDefault();
    loadContent('bio.html');
  });
});
