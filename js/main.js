// Navbar scroll effect
const navbar = document.querySelector('.navbar');
const scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar?.classList.add('scrolled');
    scrollTop?.classList.add('visible');
  } else {
    navbar?.classList.remove('scrolled');
    scrollTop?.classList.remove('visible');
  }
});

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu?.classList.toggle('open');
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    navMenu?.classList.remove('open');
  });
});

// Active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// Scroll to top
scrollTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Intersection Observer for fade-in animations
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

fadeEls.forEach(el => observer.observe(el));

// Contact form handler
const contactForm = document.querySelector('#contact-form');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"]');
  const origText = btn.textContent;
  btn.textContent = 'Nachricht gesendet ✓';
  btn.disabled = true;
  btn.style.background = '#22c55e';
  btn.style.borderColor = '#22c55e';
  setTimeout(() => {
    btn.textContent = origText;
    btn.disabled = false;
    btn.style.background = '';
    btn.style.borderColor = '';
    contactForm.reset();
  }, 3000);
});
