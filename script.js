// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Event listener for the dark mode button click
const darkModeButton = document.getElementById('dark-mode-button');
darkModeButton.addEventListener('click', toggleDarkMode);
