# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a GitHub Pages personal website hosted at me.jessdp.com. It's a single-page static site built with vanilla HTML, CSS, and JavaScript - no build tools or dependencies required.

## Architecture

The entire site is contained in a single `index.html` file with:
- Embedded CSS in `<style>` tags (no external stylesheets)
- Inline JavaScript for particle animation effects
- Responsive design with mobile breakpoints at 768px
- Google Fonts loaded from CDN (Inter and Urbanist font families)

## Development

### Testing Changes Locally

Since this is a static HTML site, you can test changes by simply opening the file in a browser:

```bash
open index.html
```

Or use a local server for better accuracy:

```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Deployment

Changes are deployed automatically via GitHub Pages when pushed to the `main` branch. No build process required.

## Site Structure

- **index.html**: Single-page application containing all markup, styles, and scripts
- **CNAME**: DNS configuration for custom domain (me.jessdp.com)
- **README.md**: Basic repository description

## Design System

The site uses a dark gradient theme with:
- Primary colors: Blues (#3b82f6) and slate grays (#94a3b8, #64748b, #e2e8f0)
- Background gradient: Dark navy (#1a1a2e → #16213e → #0f3460)
- Typography: Urbanist for headings (800 weight), Inter for body text
- Animations: Fade-in-up on page load, floating particles background effect
- Accessibility features: ARIA labels, focus states, semantic HTML

## Key Components

1. **Header Section**: Name, title, location with animated entrance
2. **Bio Section**: Professional summary with staggered animation
3. **Connect Section**: Social links (GitHub, LinkedIn, email) with hover effects
4. **Background Effects**: SVG grain texture and animated particle system

## Making Changes

When modifying the site:
- All styles are in the `<style>` tag (lines 15-283)
- Content structure is in the `<body>` tag (lines 286-361)
- Particle animation logic is in the `<script>` tag (lines 347-360)
- Preserve accessibility attributes (aria-labels, semantic HTML)
- Test responsive behavior at mobile breakpoints
