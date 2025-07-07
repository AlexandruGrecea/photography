const toggle = document.getElementById('toggleDark');
const body = document.body;

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggle.classList.remove('bi-brightness-high-fill');
    toggle.classList.add('bi-moon');
  } else {
    body.classList.remove('dark-mode');
    toggle.classList.remove('bi-moon');
    toggle.classList.add('bi-brightness-high-fill');
  }
});

toggle.addEventListener('click', function () {
  const isDark = body.classList.toggle('dark-mode');

  if (isDark) {
    this.classList.remove('bi-brightness-high-fill');
    this.classList.add('bi-moon');
    localStorage.setItem('theme', 'dark');
  } else {
    this.classList.remove('bi-moon');
    this.classList.add('bi-brightness-high-fill');
    localStorage.setItem('theme', 'light');
  }
});
