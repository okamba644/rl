/* ============================================================
   HAMBURGER MENU
   ============================================================ */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');

// Create overlay element
const overlay = document.createElement('div');
overlay.className = 'nav-overlay';
document.body.appendChild(overlay);

function openMenu() {
  hamburger.classList.add('open');
  navMenu.classList.add('open');
  overlay.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  hamburger.classList.remove('open');
  navMenu.classList.remove('open');
  overlay.classList.remove('visible');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  hamburger.classList.contains('open') ? closeMenu() : openMenu();
});

overlay.addEventListener('click', closeMenu);

// Close on nav link click
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});

/* ============================================================
   SCROLL REVEAL (IntersectionObserver)
   ============================================================ */
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // animate once
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

revealEls.forEach(el => observer.observe(el));

/* ============================================================
   NAVBAR SCROLL EFFECT
   ============================================================ */
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > 60) {
    header.style.background = 'rgba(10,8,17,0.9)';
    header.style.backdropFilter = 'blur(12px)';
    header.style.webkitBackdropFilter = 'blur(12px)';
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,.4)';
    header.style.position = 'fixed';
    header.style.top = '0';
    header.style.left = '0';
    header.style.right = '0';
    header.style.padding = '8px 0';
    header.style.transition = 'all .35s ease';
  } else {
    header.style.background = 'transparent';
    header.style.backdropFilter = 'none';
    header.style.webkitBackdropFilter = 'none';
    header.style.boxShadow = 'none';
    header.style.position = 'relative';
    header.style.padding = '15px 0';
  }
  lastScroll = current;
}, { passive: true });