# Taste of Boudha and Sherpa Bar: static website

Plain HTML, CSS and JavaScript. No build step, no backend.

## Structure
- `index.html`, `menu.html`, `gallery.html`, `about.html`, `contact.html`
- `css/style.css` (base, mobile-first), `css/responsive.css` (tablet and desktop)
- `js/main.js` (mobile menu, back-to-top, reveals), `js/gallery.js` (lightbox), `js/menu.js` (menu data and renderer)
- `images/restaurant`, `images/food`, `sitemap.xml`, `robots.txt`

## Update the menu
Open `js/menu.js`. Each `## Section|note` line starts a section, and each line after it is `Name|Price|Description`. Leave the price empty to show "Ask". Save and reload.

## Replace images
Overwrite a file in `images/` with the same name (JPG, about 1200 px on the long side). If the new photo has a different shape, update the `width` and `height` attributes of its `<img>` in the HTML.

## Business information
Search all five `.html` files for the address, `980-6514322`, `9779806514322` and the two Google Maps URLs. The header, footer and WhatsApp button are repeated in each page, so edit each file. The structured data (JSON-LD) is in `index.html` and `contact.html`.

## Opening hours
Search for "Open until 12 AM" in `index.html`, `contact.html` and the "Why visit" list, and edit each.

## Deploy
**GitHub Pages:** create a repository, upload the contents of this folder to the root, then Settings > Pages > Deploy from a branch > `main` / root.
**Cloudflare Pages:** Workers & Pages > Create > Pages > Upload assets (drag the folder), or connect the repository. Build command: none. Output directory: `/`.

## After going live
Your site gets its own address when you publish it (for example `yourname.pages.dev`). Replace `YOUR-DOMAIN` in `sitemap.xml` and `robots.txt` with that address. The website itself works without this. Add `<link rel="canonical">` and an `og:image` (absolute URL) to each page once the domain is known.

## Notes
- The rating (4.7 / 445 reviews) and price range come from the Google listing and are not live.
- There is no contact form, because a form needs a backend. WhatsApp is the working contact route.
- The embedded map is a search for the restaurant name, not a verified pin.
