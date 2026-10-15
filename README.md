# Sangyeop Nam — CV

Graduate-school oriented Curriculum Vitae (English). Same design tokens as `leaf-nam/resume` and `leaf-nam/portfolio`, no build required — static `index.html` only.

Live: `https://leaf-nam.github.io/cv/` (after first push + Pages enable)

## Sections (in order)

1. Education
2. Research Interests
3. Projects
4. Experience
5. Technical Skills
6. Awards & Certifications

## Local preview

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Export PDF

1. Click `Export PDF` (top right)
2. Chrome print settings:
   - Destination: Save as PDF
   - Paper: A4, Margins: None (margins are built into the page)
   - Background graphics: ON
   - Headers/footers: OFF

Auto-fit-to-one-page logic is shared with `resume` (`assets/js/main.js`).

## Deploy

- Push to `main` → GitHub Actions auto-deploys to GitHub Pages
- Source content: `이력서(백엔드) - Google Docs.pdf` + `resume/index.html`
- Portfolio: https://github.com/leaf-nam/portfolio
