const hamburgerBtn = document.querySelector('.hamburger-btn');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerBtn.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('show-menu');
    hamburgerBtn.ariaExpanded = hamburgerMenu.classList.contains('show-menu');
});

document.addEventListener('click', (event) => {
    if (!hamburgerMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
      hamburgerMenu.classList.remove('show-menu');
      hamburgerBtn.ariaExpanded = 'false';
    }
});
  
document.addEventListener('keyup', (event) => {
    if (event.key === 'Escape' && hamburgerMenu.classList.contains('show-menu')) {
    hamburgerMenu.classList.remove('show-menu');
    hamburgerBtn.ariaExpanded = 'false';
    hamburgerBtn.focus();
    }
});
  