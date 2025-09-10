// Hamburger Menu Toggle
const toggleMenu = document.getElementById('toggle-menu');
const menuItems = document.querySelector('.menu-items');

toggleMenu.addEventListener('change', () => {
    menuItems.classList.toggle('active');
});

// Smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
