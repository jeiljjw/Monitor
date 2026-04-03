# Design: blog-page

## Executive Summary

### 1.1 Project Overview

| Field | Value |
|-------|-------|
| **Feature** | blog-page |
| **Type** | Static HTML blog + SEO article |
| **Level** | Starter (static site) |
| **Started At** | 2026-04-03 |

### 1.2 Design Summary

| Metric | Value |
|--------|-------|
| **Pages** | 2 (index.html + blog.html) |
| **New CSS** | 1 shared stylesheet |
| **SVG Images** | 3 inline illustrations |
| **SEO Targets** | 1 primary keyword ("what is my screen size") |

### 1.3 Value Delivered

| Problem | Solution | Function UX Effect | Core Value |
|---------|----------|-------------------|------------|
| No informational content, missing SEO opportunity | Fully SEO-optimized blog targeting "what is my screen size" | Organic visitors land on educational content, navigate to the tool via contextual backlink | Topical authority in screen resolution niche, organic traffic pipeline |

---

## 1. Architecture Overview

### 1.1 Site Structure
```
D:\Antigravity\New/
├── index.html              ← Homepage (screen resolution tool) — MODIFIED
├── blog.html               ← Blog article — NEW
├── css/
│   └── style.css           ← Shared styles extracted from index.html — NEW
├── images/                 ← SVG illustrations — NEW
│   ├── resolution.svg      ← Pixel grid visualization
│   ├── screen-sizes.svg    ← Device comparison chart
│   └── how-it-works.svg    ← Step-by-step diagram
├── docs/
│   ├── 01-plan/...
│   └── 02-design/...
└── .bkit/...
```

### 1.2 Design Decisions

| Decision | Rationale |
|----------|-----------|
| Extract shared CSS to `css/style.css` | Both pages share the same visual theme (dark mode, animated grid, fonts, colors). Centralized CSS avoids duplication and makes future theming easier. |
| Inline SVG images (not external JPEGs/PNGs) | Zero external dependencies, always load fast, infinitely scalable, editable as code. No hosting required for a static site. |
| Single article file (`blog.html`), not a CMS | Starter-level feature. No dynamic rendering needed. Fast to ship, easy to extend later. |
| SEO meta tags in `<head>` | Google crawlers index HTML directly. No server-side rendering needed for this use case. |

---

## 2. Component Design

### 2.1 Shared Styles (`css/style.css`)

Extracted from `index.html`, organized into sections:

**CSS Custom Properties (root):**
- All current `--bg`, `--card`, `--border`, `--text`, `--muted`, `--accent`, `--accent-dim`, `--accent-glow`, `--label`, `--label-dim`
- **New additions:**
  - `--font-body`: `'DM Sans', system-ui, sans-serif`
  - `--font-mono`: `'JetBrains Mono', monospace`
  - `--font-serif`: `'Georgia', serif` (for blog article body — editorial feel)
  - `--max-content-width`: `800px` (blog articles need wider reading area than the tool's 720px)
  - `--link-color`: `#6ee7b7`
  - `--link-hover`: `#34d399`

**Shared Classes:**
- `.container` — Main layout container
- `.navbar` — Header navigation bar
- `.logo` — Site logo/text
- `.nav-links` — **NEW** — flex row of page links (Home, Blog)
- `.nav-link` — **NEW** — individual page link with active state
- `.nav-link.active` — **NEW** — currently active page highlight
- `.footer` — Footer bar

### 2.2 Navbar Redesign

**Current (`index.html`):**
```
[Logo]                    [Refresh Button]
```

**New structure (both pages):**
```
[Logo]                    [Blog  │  Home]
```

The Refresh button is moved to a subtle position within the hero section (below the resolution display) to keep the navbar minimal and consistent across both pages.

**`nav-links` structure:**
```html
<nav class="navbar">
  <a href="index.html" class="logo"><span>Screen</span>Resolution</a>
  <div class="nav-links">
    <a href="blog.html" class="nav-link" id="nav-home">Home</a>
    <a href="blog.html" class="nav-link active" id="nav-blog">Blog</a>
  </div>
</nav>
```

The `active` class is set on the appropriate link per page (via inline JS or hardcoded).

### 2.3 Blog Page Layout (`blog.html`)

```
┌──────────────────────────────────────────┐
│  Navbar: [Logo]           [Blog │ Home]  │
├──────────────────────────────────────────┤
│                                          │
│  <header class="article-header">         │
│    <h1>What Is My Screen Size?...</h1>  │
│    <p class="article-meta">              │
│      Published: Apr 3, 2026             │
│      Last Updated: Apr 3, 2026          │
│    </p>                                   │
│  </header>                               │
│                                          │
│  <hr>                                     │
│                                          │
│  <main class="article-content">           │
│    <h2>Understanding Your Screen Size</h2>│
│    <p>Intro paragraph...</p>             │
│                                          │
│    <figure>                              │
│      <img src="images/resolution.svg">    │
│      <figcaption>...</figcaption>        │
│    </figure>                              │
│                                          │
│    <h2>How Screen Resolution Works</h2>  │
│    ...                                    │
│                                          │
│    <aside class="cta-box">               │ ← Contextual CTA
│      <a href="index.html">Check your     │
│        what is my screen size</a>        │
│    </aside>                               │
│                                          │
│    <h2>Screen Size vs Resolution</h2>    │
│    <figure>                              │
│      <img src="images/screen-sizes.svg"> │
│      <figcaption>...</figcaption>        │
│    </figure>                              │
│                                          │
│    <h2>Common Screen Sizes</h2>          │
│    <table>...</table>                    │ ← Common sizes table
│                                          │
│    <h2>How to Measure Your Screen Size</h2>│
│    <figure>                              │
│      <img src="images/how-it-works.svg"> │
│      <figcaption>...</figcaption>        │
│    </figure>                              │
│                                          │
│    <h2>FAQ</h2>                          │
│    <details>...</details>                 │
│    <details>...</details>                 │
│  </main>                                  │
│                                          │
├──────────────────────────────────────────┤
│  Footer                                  │
└──────────────────────────────────────────┘
```

### 2.4 Article Content Structure

**Full article outline with word count targets:**

| Section | Heading Level | Target Words | SEO Keywords |
|---------|--------------|-------------|--------------|
| Title | `<h1>` | — | "what is my screen size" (exact match) |
| Intro | Paragraph | ~200 | what is my screen size, screen resolution, find my screen size |
| Understanding Screen Sizes | `<h2>` | ~300 | screen size meaning, display dimensions |
| Screen Resolution Explained | `<h2>` | ~250 | screen resolution, pixel count, display resolution |
| How to Check Your Screen Size | `<h2>` | ~200 | check screen size, find screen resolution |
| Common Screen Sizes Table | `<h2>` | ~150 | common screen sizes, 1080p, 4K, 1440p |
| Screen Size vs Resolution | `<h2>` | ~200 | screen size vs resolution difference |
| How to Measure Screen Size | `<h2>` | ~200 | how to measure screen size, screen diagonal |
| FAQ | `<h2>` + `<details>` | ~250 | screen size faq, what screen size |
| **Total** | | **~1750 words** | |

### 2.5 SVG Image Designs

All images are inline SVGs embedded directly in the HTML, wrapped in `<figure>` tags.

**Image 1: `resolution.svg` — Pixel Grid Visualization**
- Purpose: Illustrate what screen resolution means (a grid of pixels)
- Style: Dark background, glowing green pixel grid, 16x9 aspect ratio representation
- Dimensions: 720w x 400h
- ALT: "Illustration of screen resolution showing a 1920x1080 grid of individual pixels on a monitor display"
- Includes: Grid overlay, pixel labels, resolution badge

**Image 2: `screen-sizes.svg` — Device Comparison Chart**
- Purpose: Show common screen sizes (phone, tablet, laptop, desktop, TV)
- Style: Clean outline icons with size labels, horizontal arrangement
- Dimensions: 720w x 300h
- ALT: "Comparison chart showing different screen sizes from mobile phone to large desktop monitors with their resolution labels"
- Includes: Device silhouettes, resolution labels, size comparison annotations

**Image 3: `how-it-works.svg` — Step-by-Step Diagram**
- Purpose: Visual guide showing how to find your screen size
- Style: 3-step linear flow with icons (monitor → settings → results)
- Dimensions: 720w x 250h
- ALT: "Step by step visual guide showing how to find what is my screen size on Windows, macOS, and mobile devices"
- Includes: Numbered steps, connected arrows, device icons

### 2.6 CTA Box Component

A highlighted call-to-action box that appears mid-article:

```html
<aside class="cta-box">
  <p>Want to check your exact screen resolution right now?</p>
  <a href="index.html" class="cta-button">
    Check What Is My Screen Size →
  </a>
</aside>
```

- Background: `--accent-dim` with border `rgba(110, 231, 183, 0.2)`
- Button: Primary CTA styling with hover effect
- Links use the anchor text "what is my screen size" (SEO backlink)

---

## 3. SEO Implementation

### 3.1 Meta Tags (in `<head>` of `blog.html`)

```html
<title>What Is My Screen Size? How to Check & Common Sizes (2026)</title>
<meta name="description" content="Find out what is my screen size instantly. Learn how to check your screen resolution, understand common screen sizes, and measure your display diagonal.">
<link rel="canonical" href="https://yoursite.com/blog.html">
<meta name="robots" content="index, follow">

<!-- Open Graph -->
<meta property="og:title" content="What Is My Screen Size? How to Check & Common Sizes">
<meta property="og:description" content="Find your screen size instantly. Learn how screen resolution works, common screen sizes, and measurement guide.">
<meta property="og:type" content="article">
<meta property="og:url" content="https://yoursite.com/blog.html">
<meta property="og:site_name" content="ScreenResolution">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="What Is My Screen Size? How to Check & Common Sizes">
```

### 3.2 JSON-LD Structured Data

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What Is My Screen Size? How to Check & Common Sizes (2026)",
  "description": "Find out what is my screen size instantly...",
  "author": { "@type": "Organization", "name": "ScreenResolution" },
  "datePublished": "2026-04-03",
  "dateModified": "2026-04-03",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://yoursite.com/blog.html" }
}
```

### 3.3 Heading Hierarchy

```
h1: What Is My Screen Size? Complete Guide to Screen Resolution (2026)
  h2: What Is My Screen Size?
  h2: Understanding Screen Resolution
  h2: How to Check Your Screen Size
    h3: On Windows
    h3: On macOS
    h3: On Mobile Devices
  h2: Common Screen Sizes and Resolutions
  h2: Screen Size vs Resolution — Key Differences
  h2: How to Measure Your Screen Size
  h2: Frequently Asked Questions
    h3: How do I know my screen size?
    h3: What is a full HD screen size?
    h3: How is screen size measured?
```

### 3.4 Internal Linking Strategy

| Location | Anchor Text | Target |
|----------|-------------|--------|
| Intro paragraph | "what is my screen size" (exact match) | `index.html` |
| CTA box | "Check What Is My Screen Size →" | `index.html` |
| Conclusion paragraph | "free screen resolution checker" | `index.html` |
| Navbar link (Home) | "Home" | `index.html` |
| `index.html` navbar | "Blog" | `blog.html` |

### 3.5 Semantic HTML

```html
<body>
  <nav class="navbar">...</nav>
  <main>
    <article>
      <header>...</header>
      <section>...</section> × N
      <aside class="cta-box">...</aside>
      <section id="faq">...</section>
    </article>
  </main>
  <footer>...</footer>
</body>
```

---

## 4. Responsive Design

Both pages use the existing `540px` breakpoint with these additions:

| Breakpoint | Behavior |
|-----------|----------|
| `> 540px` | Full layout, wide content area (800px max) |
| `≤ 540px` | Stacked nav links, smaller heading sizes, single-column FAQ |
| `≤ 400px` | Ultra-small screens: further reduce font sizes, collapse padding |

**Blog-specific responsive rules:**
- Article content width: `max(90%, 720px)` — comfortable reading width
- Images: `max-width: 100%, height: auto` — never overflow container
- CTA box: full-width on mobile, styled card on desktop
- FAQ `<details>`: expanded/collapsible on all screen sizes

---

## 5. Accessibility

| Requirement | Implementation |
|-------------|---------------|
| Image ALT text | All 3 SVG images have descriptive `alt` attributes |
| Semantic HTML | `<article>`, `<nav>`, `<main>`, `<header>`, `<footer>`, `<aside>`, `<figure>` |
| Heading hierarchy | Single `<h1>`, logical `<h2>` → `<h3>` nesting |
| Color contrast | Existing contrast ratios maintained (dark bg + light text) |
| Keyboard navigation | Active nav link indicated visually, focus states on links |
| `lang` attribute | `<html lang="en">` on all pages |

---

## 6. Files Reference

| File | Path | Action | Lines (est.) |
|------|------|--------|-------------|
| Shared CSS | `css/style.css` | Create | ~300 |
| Homepage | `index.html` | Modify | Remove inline styles, add nav links |
| Blog page | `blog.html` | Create | ~600 (HTML+CSS+JS) |
| Resolution SVG | `images/resolution.svg` | Create | ~50 |
| Screen sizes SVG | `images/screen-sizes.svg` | Create | ~50 |
| How-it-works SVG | `images/how-it-works.svg` | Create | ~50 |

---

## 7. Implementation Order

1. Write `css/style.css` — extract and organize shared styles
2. Modify `index.html` — reference shared CSS, update navbar, move refresh button
3. Create `images/resolution.svg` — pixel grid illustration
4. Create `images/screen-sizes.svg` — device comparison chart
5. Create `images/how-it-works.svg` — step-by-step diagram
6. Create `blog.html` — full SEO-optimized article with all components
7. Cross-test: verify nav links work both directions, check mobile responsiveness
