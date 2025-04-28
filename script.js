// Simple Scroll Animation
window.addEventListener('scroll', () => {
    document.querySelectorAll('.section-title, .project-card, .about-text, .contact-form')
      .forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.style.opacity = 1;
          el.style.transform = 'translateY(0)';
        }
      });
  });
  
  // Initial style for animation
  document.querySelectorAll('.section-title, .project-card, .about-text, .contact-form')
    .forEach(el => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(50px)';
      el.style.transition = 'all 1s ease-out';
    });
  