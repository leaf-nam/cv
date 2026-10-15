# Sangyeop Nam — CV

Graduate-school oriented Curriculum Vitae (English). Same design tokens as `leaf-nam/resume` and `leaf-nam/portfolio`, no build required — static `index.html` only.

Live: `https://leaf-nam.github.io/cv/` (after first push + Pages enable)

## Sections (in order)

1. Education
2. Training
3. Research Interests
4. Professional Experience
5. Technical Projects
6. Technical Skills
7. Awards & Certifications

## Local preview

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Export PDF

1. Click `Export PDF` (top right)
2. Chrome print settings:
   - Destination: Save as PDF
   - Paper: A4, Margins: Default (page margins come from the `@page` rule: 20mm top/bottom, 18mm sides)
   - Background graphics: ON
   - Headers/footers: OFF

Sections flow continuously; headings never strand at a page bottom and
entries never split across pages (`break-after: avoid` / `break-inside: avoid`).

## Deploy

- Push to `main` → GitHub Actions auto-deploys to GitHub Pages
- Source content: `이력서(백엔드) - Google Docs.pdf` + `resume/index.html`
- Portfolio: https://github.com/leaf-nam/portfolio
