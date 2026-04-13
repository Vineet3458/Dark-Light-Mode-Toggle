const root   = document.documentElement;
const toggle = document.getElementById('themeToggle');

// ── initialise ──────────────────────────────────────────────────────────────
// priority: saved preference → OS preference → default (light)
const saved = localStorage.getItem('theme');

if (saved) {
  root.dataset.theme = saved;
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  root.dataset.theme = 'dark';
}

// ── toggle ───────────────────────────────────────────────────────────────────
toggle.addEventListener('click', () => {
  const isDark = root.dataset.theme === 'dark';
  const next   = isDark ? 'light' : 'dark';

  root.dataset.theme = next;
  localStorage.setItem('theme', next);
});

// ── keep in sync if the OS preference changes while the tab is open ─────────
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  // only follow OS if the user has never manually picked a theme
  if (!localStorage.getItem('theme')) {
    root.dataset.theme = e.matches ? 'dark' : 'light';
  }
});