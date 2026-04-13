# 🌗 Dark & Light Mode Toggle

A clean, minimal dark/light mode toggle built with **pure HTML, CSS, and JavaScript** — no frameworks, no build tools, no dependencies.

![Made with HTML](https://img.shields.io/badge/HTML-5-orange?style=flat-square&logo=html5)
![Made with CSS](https://img.shields.io/badge/CSS-3-blue?style=flat-square&logo=css3)
![Made with JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=flat-square&logo=javascript)
![Zero dependencies](https://img.shields.io/badge/dependencies-0-brightgreen?style=flat-square)

---

## ✨ Features

- **Instant toggle** — switches between dark and light modes with a single click
- **Persistent preference** — saves the chosen theme to `localStorage` so it survives page reloads
- **OS-aware** — reads `prefers-color-scheme` on first visit and defaults accordingly
- **CSS Variables** — a single `data-theme` attribute on `<html>` drives the entire color system
- **Zero dependencies** — no npm, no bundler, just open `index.html` and go
- **Responsive layout** — works cleanly across all screen sizes

---

## 📁 Project Structure

```
Dark-Light-Mode-Toggle/
├── index.html     # Markup & SVG icons (sun / moon)
├── styles.css     # CSS custom properties + full theming
└── scripts.js     # Toggle logic + localStorage persistence
```

---

## 🚀 Getting Started

No install step required.

```bash
# Clone the repo
git clone https://github.com/Vineet3458/Dark-light-mode-toggle.git

# Open in your browser
open Dark-Light-Mode-Toggle/index.html
```

Or just double-click `index.html`. That's it.

---

## 🎨 How It Works

### Theme switching (CSS)

All colors are stored as CSS custom properties on `:root` (light) and `[data-theme="dark"]`:

```css
:root {
  --bg: #f6f6f6;
  --surface: #ffffff;
  --text: #111;
  --accent: #5b5bd6;
  /* … */
}

[data-theme="dark"] {
  --bg: #0f0f13;
  --surface: #18181f;
  --text: #e8e8f0;
  --accent: #8080f0;
  /* … */
}
```

Flipping the `data-theme` attribute on `<html>` instantly re-themes every element that uses these variables.

### Icon swap (CSS)

The sun/moon icons are plain inline SVGs. CSS handles the visibility toggle — no JS class juggling needed:

```css
#toggle .moon { display: none; }

[data-theme="dark"] #toggle .sun  { display: none; }
[data-theme="dark"] #toggle .moon { display: block; }
```

### Persistence & OS preference (JavaScript)

On page load, the script checks `localStorage` first, then falls back to the OS media query:

```js
const saved = localStorage.getItem('theme');
if (saved) {
  root.dataset.theme = saved;
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  root.dataset.theme = 'dark';
}
```

On every click, the new theme is written back to `localStorage`:

```js
btn.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('theme', next);
});
```

---

## 🛠 Tech Stack

| Layer      | Technology              |
|------------|-------------------------|
| Markup     | HTML5 (semantic)        |
| Styling    | Vanilla CSS + Custom Properties |
| Logic      | Vanilla JavaScript (ES6) |
| Font       | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |

---

## 📄 License

MIT © [Vineet](https://github.com/Vineet3458)
