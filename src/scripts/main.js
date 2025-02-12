document.addEventListener('DOMContentLoaded', () => {
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
});