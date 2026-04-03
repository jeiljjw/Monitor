# Plan: blog-page

## Executive Summary

### 1.1 Project Overview

| Field | Value |
|-------|-------|
| **Feature** | blog-page |
| **Type** | Content page + SEO blog article |
| **Level** | Starter (static HTML) |
| **Started At** | 2026-04-03 |

### 1.2 Results Summary

| Metric | Target | Actual |
|--------|--------|--------|
| **Files Modified** | 2 | — |
| **New Files** | 1 (blog page) | — |
| **Match Rate** | 90%+ | — |

### 1.3 Value Delivered

| Perspective | Description |
|-------------|-------------|
| **Problem** | No informational content on the site — only the tool homepage exists, missing SEO opportunity for long-tail keywords like "what is my screen size" |
| **Solution** | Add a Blog page with a navigation link in the header, containing a fully SEO-optimized article targeting the keyword "what is my screen size" with a backlink to the homepage |
| **Function UX Effect** | Users navigating from search engines land on educational blog content; the homepage link from the blog drives traffic to the tool; all images are accessible with ALT text |
| **Core Value** | Organic search traffic acquisition through SEO-optimized content marketing, establishing topical authority for screen-related queries |

---

## Feature

Create a Blog page (`blog.html`) with a first SEO-optimized blog post targeting the keyword **"what is my screen size"**. Add a "Blog" link to the navigation header alongside the "Home" link on both pages.

This is a Starter-level static site feature — no backend, no framework, just HTML/CSS/JS.

---

## Requirements

### R1 — Navigation Header (both pages)
- The navbar must contain exactly 2 links: **Home** and **Blog**
- Home links to `index.html` (the screen resolution tool)
- Blog links to `blog.html` (the article)
- Current active page should be visually indicated
- The navbar structure from `index.html` (logo + button) must be updated to include the nav links

### R2 — Blog Page Structure (`blog.html`)
- Same visual theme/design as `index.html` (dark mode, same CSS variables, same animated grid background, same font families)
- Shared CSS should be extracted to avoid duplication (inline `<style>` in a shared file or consistent copy)
- Page structure: navbar → article header → article content → footer
- The article must be **highly SEO optimized** (see R3)
- The article must include **scaled, relevant images** with ALT text (see R4)
- The article must **backlink** the keyword "what is my screen size" to the homepage (see R5)

### R3 — SEO Optimization
- Page `<title>`: "What Is My Screen Size? | Check Your Screen Size - ScreenResolution"
- `<meta name="description">` targeting the keyword with a compelling 150-160 character description
- `<h1>` tag containing the exact keyword "what is my screen size"
- `<h2>` and `<h3>` subheadings with related semantic keywords
- Open Graph tags for social sharing (`og:title`, `og:description`, `og:type`, `og:url`)
- Structured data (JSON-LD) for `Article` or `BlogPosting` schema
- Canonical link tag pointing to the blog page
- Semantic HTML: `<article>`, `<header>`, `<main>`, `<section>`, `<aside>`
- Proper heading hierarchy (one `<h1>`, multiple `<h2>`/`<h3>`)
- Target word count: ~1500-2000 words of informative, original content

### R4 — Images
- Include 2-3 relevant, scaled images in the blog article
- Images should illustrate screen size / resolution concepts (e.g., resolution comparison, device sizing)
- Use placeholder images via inline SVG or CSS-generated illustrations (no external image hosting dependencies)
- **Every image must have descriptive `alt` text** containing natural keyword variations
- Images must be responsive (`max-width: 100%`, `height: auto`)
- Use `srcset` or `picture` element if multiple sizes are needed
- Each image should include a `figure` and `figcaption` for accessibility

### R5 — Backlink
- The exact anchor text "what is my screen size" must link to `index.html` (homepage) at least once in the article body
- The link should appear naturally within the content (not forced)
- The link can appear in an introductory paragraph, a CTA box, or within the body text

---

## Non-Goals (Out of Scope)
- No CMS or dynamic blog system — this is a single static article
- No blog listing/index page — just the single article for now
- No comments, shares, or social widgets
- No category/archive/tagging system

---

## Implementation Steps

1. **Extract shared CSS** — Create `css/style.css` with all shared styles from `index.html`. Update `index.html` to reference it.
2. **Update `index.html` navbar** — Add "Home" + "Blog" navigation links; remove or reposition the Refresh button.
3. **Create `blog.html`** — Full page with SEO-optimized article content.
4. **Create inline SVG images** — Build 2-3 illustrative SVG images for the article.
5. **Add JSON-LD structured data** — Article schema on `blog.html`.
6. **Verify responsive layout** — Test both pages on mobile breakpoints.

---

## Files to Create/Modify

| File | Action | Purpose |
|------|--------|---------|
| `css/style.css` | Create | Shared styles extracted from both pages |
| `index.html` | Modify | Add nav links, reference shared CSS |
| `blog.html` | Create | SEO-optimized blog article |
| `images/` | Create | SVG illustrations directory |

---

## Success Criteria

1. Both pages share the same navbar with "Home" and "Blog" links
2. `blog.html` loads and displays the full article with all SEO meta tags
3. All images have descriptive ALT text
4. The keyword "what is my screen size" links to `index.html`
5. Both pages are responsive on mobile (540px breakpoint)
6. The blog article is 1500+ words of educational content
