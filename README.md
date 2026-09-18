# Cleanfree Website – Video Hero Redesign

Premium-Website für **Cleanfree UG (haftungsbeschränkt)** – Gebäudereinigung in Goslar.

## Tech-Stack

- **Vite** (Multi-Page: `index.html`, `impressum.html`, `datenschutz.html`)
- **Tailwind CSS** mit Video-Palette (Cerulean / Navy / Cyan)
- HTML5 **Hero-Video** (full-bleed, muted autoplay loop)
- Vanilla JS (WhatsApp-Formular, Cookie-Banner, Scroll-Reveals)

## Entwicklung

```bash
cd cleanfree-website
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

Ausgabe liegt in `dist/`.

## Struktur

```
cleanfree-website/
├── index.html              # One-Page Marketing-Site
├── impressum.html
├── datenschutz.html
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── video/
│       └── hero-cleanfree.mp4   # Hero-Hintergrundvideo
└── src/
    ├── css/main.css
    └── js/
        ├── main.js           # Entry (Header, Video, Form, Cookie, Reveal)
        ├── form.js           # WhatsApp wa.me
        ├── cookie.js         # localStorage Banner
        └── reveal.js         # IntersectionObserver
```

## Hero-Video

- Pfad: **`/video/hero-cleanfree.mp4`** (liegt unter `public/video/hero-cleanfree.mp4`)
- Full-bleed `<video>` mit `autoplay` / `muted` / `loop` / `playsinline`
- Overlay: Navy-Verläufe an Seiten & unten; Mittelbereich (Logo-Wand) bleibt relativ frei
- CTAs in frosted-glass Panel unten links – kein doppeltes Branding über der Wand
- Weicher Fade in die Off-White-Sektionen darunter

## WhatsApp-Formular

Sendet an `https://wa.me/4917684498697?text=…` mit Name, Kontakt, Kategorie und Nachricht (deutsch kodiert). Datenschutz-Checkbox ist Pflicht.

## Rechtliches / Platzhalter

- Impressum & Datenschutz enthalten **Platzhalter** (Handelsregister, USt-IdNr., Hosting-Anbieter) – vor Go-Live prüfen und ergänzen
- Cookie-Einwilligung wird in `localStorage` unter `cleanfree_cookie_consent` gespeichert

## Markenfarben (Video-Palette)

| Token            | Hex       | Rolle                          |
|------------------|-----------|--------------------------------|
| Cerulean / teal  | `#3A86E0` | Primary                        |
| Navy deep        | `#103868` | Secondary / dunkle Flächen     |
| Cyan sparkle     | `#00AEEF` | Accent (`teal-light` / gold*)  |
| Off-white        | `#F8FAFC` | Hintergrund                    |
| Soft grey        | `#EBEFF2` | Borders / surfaces             |
| Dark slate       | `#1E293B` | Fließtext (`navy`)             |
| Soft blue tint   | `#E8F2FC` | Cards / Icons (`teal-soft`)    |

\* Frühere Gold-Tokens sind auf Cyan-Akzente remappt; `teal-*` Klassen bleiben als Alias zur Cerulean-Palette.

## Kontakt

Cleanfree UG (haftungsbeschränkt)  
Zaid Abdallah  
Rundenienstraße 1, 38640 Goslar  
Tel./WhatsApp: 0176 84498697 · info@cleanfree.de
