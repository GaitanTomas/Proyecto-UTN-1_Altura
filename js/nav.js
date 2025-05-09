// Navbar scroll effect
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector('.header__nav');
  const navBtn = document.querySelector('.header__btn-access');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      nav.classList.add('header__nav-scrolled');
      navBtn.classList.add('header__btn-access-scrolled');
    } else {
      nav.classList.remove('header__nav-scrolled');
      navBtn.classList.remove('header__btn-access-scrolled');
    }
  });
});

// Mobile menu toggle
function toggleMenu() {
  document.querySelector('.header__nav-list').classList.toggle('active');
}