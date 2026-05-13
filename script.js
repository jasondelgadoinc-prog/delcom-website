// DelCom — small interactions only. No frameworks.

// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const menu   = document.getElementById('mobile-menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    if (open) {
      menu.removeAttribute('data-open');
      menu.hidden = true;
    } else {
      menu.hidden = false;
      menu.setAttribute('data-open', 'true');
    }
  });
  // Close after tapping a link
  menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      toggle.setAttribute('aria-expanded', 'false');
      menu.removeAttribute('data-open');
      menu.hidden = true;
    }
  });
}

// Year in footer
const yr = document.getElementById('year');
if (yr) yr.textContent = new Date().getFullYear();

// Show thank-you message after a successful Netlify form submission
if (new URLSearchParams(window.location.search).get('submitted') === 'true') {
  const msg = document.getElementById('form-msg');
  if (msg) {
    msg.hidden = false;
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
