# Taste of Boudha & Sherpa Bar: static website
Pages: index, menu, gallery, about, contact (plain HTML, css/style.css, js/script.js).

## Replace these placeholders (use find & replace across all files)
- `977XXXXXXXXXX` and `+977 XXXXXXXXXX`: WhatsApp / phone number (country code, no + in wa.me links)
- `[City]` and `CITY`: city. `[Add opening hours]`: opening hours
- `YOURDOMAIN.com`: your real domain (also in sitemap.xml, robots.txt, JSON-LD)
- `hello@YOURDOMAIN.com`: email

## Google Maps
In Google Maps open the restaurant, Share > Embed a map, copy the src URL and replace the iframe `src` in index.html and contact.html. Also replace the "Open in Google Maps" and "Get directions" links with the share link.

## Deploy
GitHub Pages: push the folder to a repo, Settings > Pages > deploy from branch main, / (root).
Cloudflare Pages: Create project > Direct Upload (or connect the repo), build command empty, output directory `/`.
