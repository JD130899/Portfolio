// Typed.js initialization for animated roles with color
document.addEventListener('DOMContentLoaded', function() {
  if (typeof Typed !== 'undefined') {
    const roles = [
      '<span class="typed-role-llm">LLM Engineer</span>',
      '<span class="typed-role-ml">ML Engineer</span>',
      '<span class="typed-role-ai">AI Engineer</span>',
      '<span class="typed-role-ds">Data Scientist</span>'
    ];
    new Typed('.multiple', {
      strings: roles,
      typeSpeed: 60,
      backSpeed: 32,
      backDelay: 1200,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      contentType: 'html',
    });
  }
});
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
});

const darkModeButton = document.getElementById('darkModeButton');
const body = document.body;

const enableLightMode = () => {
  body.classList.add('light-mode');
  body.classList.remove('dark-mode');
};

const enableDarkMode = () => {
  body.classList.add('dark-mode');
  body.classList.remove('light-mode');
};

darkModeButton.addEventListener('change', () => {
  if (darkModeButton.checked) {
    enableLightMode();
  } else {
    enableDarkMode();
  }
});

// Set initial mode based on checkbox
if (darkModeButton.checked) {
  enableLightMode();
} else {
  enableDarkMode();
}

// Multiple Text
const typed = new Typed('.multiple', {
  strings: ['AI Engineer', 'ML Engineer', 'Data Scientist', 'LLM Engineer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
