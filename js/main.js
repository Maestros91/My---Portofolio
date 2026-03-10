// ── Dark / Light toggle ──────────────────────────
  let isDark = true;

  function toggleTheme() {
    isDark = !isDark;
    document.documentElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
    document.getElementById('themeIcon').className    = isDark ? 'bi bi-sun-fill me-1' : 'bi bi-moon-fill me-1';
    document.getElementById('themeLabel').textContent = isDark ? 'Light Mode' : 'Dark Mode';
  }

  document.getElementById('themeToggle').addEventListener('click', toggleTheme);