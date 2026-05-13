# Brand assets

The site looks for these four files. SVG placeholders are already in this folder so the site renders cleanly; **drop your real logo files in to replace them.**

| File | Used where | Best format |
| --- | --- | --- |
| `logo-full.png` | Header nav, footer | PNG (transparent background) — the "DelCom" wordmark + icon together |
| `logo-icon.png` | Hero centerpiece, favicon | PNG (transparent background, square) — the icon mark only |
| `logo-full.svg` | Fallback if PNG missing | (placeholder already in place) |
| `logo-icon.svg` | Fallback if PNG missing | (placeholder already in place) |

The HTML loads `.png` first and falls back to `.svg` if the PNG is missing — so as soon as you save your PNGs with these exact filenames, the site will use them automatically. No code changes needed.

**Tip:** for the favicon and hero, save `logo-icon.png` as a square (e.g. 512×512) with a transparent background so it sits cleanly on the gradient.
