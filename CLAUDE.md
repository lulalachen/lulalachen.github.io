# CLAUDE.md — AI Assistant Guide for lulalachen.github.io

## Project Overview

This is a **static personal portfolio website** for Lulala Chen, a Full-Stack Web Developer.
Hosted on GitHub Pages at the custom domain **lulalachen.info**.
The site is **bilingual**: English (`index.html`) and Traditional Chinese (`index-tw.html`).

No build tools, no framework, no dependencies — pure HTML, CSS, and minimal vanilla JavaScript.

---

## Repository Structure

```
lulalachen.github.io/
├── index.html            # English portfolio page
├── index-tw.html         # Traditional Chinese portfolio page
├── CNAME                 # Custom domain: lulalachen.info
├── LICENSE.txt           # Creative Commons Attribution 3.0
├── README.md             # Brief theme attribution note
│
├── cv/
│   ├── CV-lulalachen-english.pdf
│   └── cover-letter.pdf
│
├── fonts/                # FontAwesome 4.7 in all web formats
│   ├── FontAwesome.otf
│   ├── fontawesome-webfont.{eot,svg,ttf,woff,woff2}
│
├── images/
│   ├── avatar.jpg        # 400×400 profile photo
│   └── favicon.jpg       # 160×160 favicon
│
├── javascripts/
│   ├── loading.js        # Page-load fade-in animation
│   └── scale.fix.js      # Mobile viewport pinch-to-zoom fix
│
└── stylesheets/
    ├── styles.css         # Main stylesheet (responsive, print styles included)
    ├── font-awesome.min.css
    ├── loading.css        # Loading animation keyframes
    └── pygment_trac.css   # Syntax highlighting (legacy, rarely used)
```

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 with Open Graph meta tags |
| Styling | CSS3 (flexbox, keyframe animations, media queries) |
| Icons | FontAwesome 4.7 |
| Fonts | Google Fonts (CWT Hei for Chinese text) |
| JavaScript | Vanilla JS (minimal) |
| Analytics | Google Tag Manager → Google Analytics (UA-80050725-1) |
| Scheduling | Calendly badge widget |
| Hosting | GitHub Pages |
| Domain | CNAME → lulalachen.info |

---

## Development Workflow

### No Build Process

There is no `npm install`, no build step, no CI pipeline. To develop:

1. Edit HTML/CSS/JS files directly.
2. Open `index.html` or `index-tw.html` in a browser to preview.
3. Commit and push to `master` — GitHub Pages deploys automatically.

### Branching

- `master` — production branch; GitHub Pages serves from here.
- Feature/AI branches follow the pattern `claude/<description>-<id>`.

### Deployment

Pushing to `master` triggers automatic GitHub Pages deployment. There is no separate build or deploy command.

---

## Key Conventions

### Bilingual Content

- **Every content change must be applied to both `index.html` (English) and `index-tw.html` (Chinese).**
- The two files share the same layout and structure; only the text content differs.
- Google Analytics tracks them separately: English → page_path `/`, Chinese → page_path `/index-tw.html`.

### HTML Structure

- Fixed two-column layout: left sidebar (header with profile info) + right scrollable content.
- Sections: Work Experience, Accomplishments, Skills.
- Skills are displayed inside `<pre>` tags formatted as JSON-like key-value pairs.
- Archived/hidden experience entries are commented out with `<!-- ... -->`.

### CSS Conventions

- Main stylesheet: `stylesheets/styles.css`
- Responsive breakpoints: **960px** (tablet) and **720px** (mobile).
- `.fade-in` CSS class for entrance animations (defined in `loading.css`).
- Print styles are included at the bottom of `styles.css` for PDF/print output.
- Vendor prefixes (`-webkit-`, `-moz-`) are used for animation properties.

### FontAwesome Icons

- Use class syntax: `<span class="fa fa-<icon-name>"></span>`
- All font files are self-hosted in `fonts/` — do not reference a CDN.
- The CSS is in `stylesheets/font-awesome.min.css`.

### Analytics

- Google Tag Manager script is inline in both HTML files (near `</head>`).
- GA page tracking is a custom `gtag('config', ...)` call near `</body>`.
- Do not remove or modify the GTM/GA snippets without being asked.

### Calendly Widget

- Embedded as a badge widget via inline `<link>` + `<script>` tags near `</body>`.
- Color: `#4d5055`. Do not change the color unless asked.
- English version uses default Calendly locale; Chinese version uses `locale: "zh-TW"` (if set).

---

## Content Sections Reference

### Work Experience (`index.html`)

| Company | Role | Period |
|---------|------|--------|
| Sidecar Health | Senior Software Engineer | (current/recent) |
| Inbound Tech | Full-Stack Developer | (prior) |
| MediaTek | Software Engineer | (prior) |

### Accomplishments

- 2016 MediaTek vAward

### Skills (displayed in `<pre>` blocks)

- Programming: JavaScript, Python, Ruby, etc.
- Design: Sketch, Figma, etc.
- Finance: Financial modeling background

---

## Files to Know

| File | When to Edit |
|------|-------------|
| `index.html` | English content, layout, or meta changes |
| `index-tw.html` | Chinese content (mirror changes from index.html) |
| `stylesheets/styles.css` | Layout, typography, responsive behavior |
| `stylesheets/loading.css` | Loading animation |
| `javascripts/loading.js` | Page-load behavior |
| `cv/*.pdf` | Replace when updating resume (binary files) |
| `images/avatar.jpg` | Replace when updating profile photo |
| `CNAME` | Only if changing the custom domain |

---

## What NOT to Do

- Do not introduce a build tool, bundler, or package manager unless explicitly requested.
- Do not add a JavaScript framework (React, Vue, etc.) without discussion.
- Do not edit only one language version — always update both `index.html` and `index-tw.html`.
- Do not modify `font-awesome.min.css` or the font files.
- Do not remove the Google Analytics / GTM snippets.
- Do not change the `CNAME` file content.
