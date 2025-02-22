document.addEventListener('DOMContentLoaded', () => {
  // Header scroll effect
  const header = document.querySelector('[data-header]');
  const backdrop = document.querySelector('[data-header-backdrop]');
  const scrollThreshold = 50;

  function updateHeader() {
    if (window.scrollY > scrollThreshold) {
      backdrop.classList.add('backdrop-blur-md');
      backdrop.style.opacity = '1';
    } else {
      backdrop.classList.remove('backdrop-blur-md');
      backdrop.style.opacity = '0';
    }
  }

  // Initial check
  updateHeader();

  // Add scroll listener with throttling
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateHeader();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Menu functionality
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const menuOverlay = document.querySelector('[data-menu-overlay]');
  const menuText = document.querySelector('[data-menu-text]');
  const menuIcon = document.querySelector('[data-menu-icon]');
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
      menuOverlay.classList.remove('opacity-0', 'pointer-events-none');
      menuText.textContent = 'CLOSE';
      menuIcon.style.transform = 'rotate(45deg)';
      document.body.style.overflow = 'hidden';
    } else {
      menuOverlay.classList.add('opacity-0', 'pointer-events-none');
      menuText.textContent = 'MENU';
      menuIcon.style.transform = 'rotate(0deg)';
      document.body.style.overflow = '';
    }
  }

  menuToggle.addEventListener('click', toggleMenu);

  // Close menu when clicking on a link
  const menuLinks = menuOverlay.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isMenuOpen) {
        toggleMenu();
      }
    });
  });
});