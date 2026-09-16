# Khandokar Riajul Islam — Portfolio

React + Vite portfolio with **dedicated service detail pages**.

The portfolio URL stays the same (`/`); each service now has its own shareable page
you can send with a job application or a client proposal.

```
/                                     full portfolio
/services/social-media-marketing      ← Social Media Manager applications
/services/meta-ads
/services/google-ads
/services/seo
/services/analytics
/services/cro
```

Short aliases also work and redirect to the canonical page, so old links never 404:
`/services/smm`, `/services/facebook-ads`, `/services/ppc`,
`/services/search-engine-optimization`, `/services/ga4`,
`/services/conversion-rate-optimization`.

---

## Quick start

```bash
npm install
npm run dev        # local dev server (http://localhost:5173)
npm run build      # production build → dist/
npm run preview    # preview the production build
npm run smoke      # render every route + assert all content is present
```

## Stack

| Concern    | Choice                                             |
| ---------- | -------------------------------------------------- |
| Framework  | React 18 + Vite 5                                  |
| Routing    | react-router-dom v6 (`/services/:slug`)            |
| Animation  | framer-motion                                      |
| Icons      | react-icons                                        |
| Styling    | Hand-written CSS (no framework), dark emerald + gold |
| Hosting    | Vercel (SPA rewrite configured in `vercel.json`)   |

## Visual direction — dynamic & 3D

Dark green / emerald base · gold accent · white typography · premium professional look.

Motion & depth layer:

- **WebGL hero backdrop** (three.js, lazy-loaded): emerald/gold particle field + rotating
  wireframe torus-knot & icosahedron, pointer-parallax camera. Auto-disables without WebGL,
  pauses off-screen, single static frame under `prefers-reduced-motion`.
- **3D tilt cards** with moving glare (`Tilt3D`) on service / project / skill / cert cards
- **Scroll parallax**: hero text and visual move + rotate on scroll (framer-motion)
- **3D conveyor marquees** (skills strip + testimonial rows) with perspective rotateX
- **Floating 3D chips** around the profile photo, count-up statistics, rotating headline
- Framer Motion reveals with rotateX entry; full `prefers-reduced-motion` support

All colours live in `src/styles/global.css` under `:root` — change them once and the whole site
(including every service page) follows.

## Page flow

`Navbar → Hero → About → Skills → Certifications → Projects → Services → Experience → Testimonials → Contact → Footer`

## Project structure

```
index.html                     Vite entry (SEO meta, fonts)
vercel.json                    SPA rewrite → fixes /services/... 404 on Vercel
public/
  favicon.svg
  resume/README.md             ← put your PDF here
src/
  data/                        ALL CONTENT LIVES HERE
    site.js                    name, email, phone, WhatsApp, socials, booking URL, resume path
    services.js                the 6 services: capabilities, process, deliverables, tools, FAQs
    projects.js                7 case studies with real campaign metrics
    skills.js                  skill groups + About badges
    experience.js              work history + About stats
    certifications.js          credentials
    testimonials.js            client feedback
  styles/
    global.css                 tokens, reset, typography, buttons, utilities
    layout.css                 navbar, mobile menu, footer, 404
    home.css                   hero → contact sections
    service.css                service detail pages
  components/                  Navbar, Footer, Layout, Reveal, Avatar, Faq,
                               ServiceCard, ProjectCard, ContactButtons, …
  sections/                    Hero, About, Skills, Certifications, Projects,
                               Services, Experience, Testimonials, Contact, Strip
  pages/                       Home, ServiceDetail, NotFound
  hooks/useSeo.js              per-page <title>, description, canonical, OG tags
smoke/ssr-entry.jsx            route + content smoke test
legacy-static/                 the previous single-file HTML site (kept for reference)
```

## Editing content

**Everything is data-driven** — you never need to touch JSX to change copy.

| I want to change…                        | Edit                                  |
| ---------------------------------------- | ------------------------------------- |
| Email / phone / WhatsApp / socials       | `src/data/site.js`                    |
| The "Book a Call" destination            | `bookingUrl` in `src/data/site.js`    |
| Resume file                              | `public/resume/` + `resumeUrl`        |
| Contact form                             | `web3formsKey` in `src/data/site.js`  |
| A service's capabilities / process / FAQ | `src/data/services.js`                |
| Case study numbers                       | `src/data/projects.js`                |
| Certifications, experience, testimonials | matching file in `src/data/`          |

### Adding a new service

Add one object to the `services` array in `src/data/services.js` with a unique `slug`.
The home-page card, the detail route, the service switcher, the footer list, the 404 page
and the mobile menu all pick it up automatically. Tag relevant case studies in
`projects.js` (`services: ['your-slug']`) and they appear on the new page under "Relevant Work".

## Service page anatomy

Each `/services/:slug` page contains:

1. **Sub-nav** — breadcrumb + horizontal switcher between all six services
2. **Hero** — icon, title, tagline, real result highlights, Book a Call / WhatsApp / Email
3. **Overview** — three-paragraph positioning statement
4. **Capabilities** — grouped checklist (Social Media Marketing lists all 26 across 7 groups)
5. **Process** — 6 numbered steps
6. **Deliverables & tools** — what you receive + the stack used + engagement models
7. **Relevant work** — case studies filtered to that service, with real metrics
8. **FAQ** — animated accordion
9. **CTA panel** — Book a Call · WhatsApp · Email
10. **Other services** — cross-links

## Deployment notes

### Vercel

`vercel.json` already contains the SPA rewrite, which is what fixes the
`/services/social-media-marketing → 404` problem on a client-side routed app:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

### Other hosts

Any static host works — just point it at `dist/` and add a "rewrite all routes to
`index.html`" rule (Netlify: a `public/_redirects` file with `/* /index.html 200`).

---

## SEO / AEO / GEO / EEAT

Built for search engines **and** AI answer engines:

| Layer | What is implemented |
| --- | --- |
| **SEO** | Per-page `<title>` / description / canonical / OG / Twitter tags (`useSeo`), semantic heading order, `sitemap.xml`, `robots.txt`, image `alt` + `loading="lazy"` |
| **AEO** | "Quick answers" box at the top of every service page, home FAQ section, `FAQPage` + `Question/AcceptedAnswer` JSON-LD so answer engines can quote directly |
| **GEO** | `llms.txt` machine-readable summary, AI crawlers explicitly allowed in `robots.txt` (GPTBot, ClaudeBot, Google-Extended, PerplexityBot, CCBot…), full JSON-LD graph (`Person`, `ProfessionalService`, `Service`, `WebPage`, `BreadcrumbList`) |
| **EEAT** | Author box on every service page (photo, credentials, "content last reviewed" date, sameAs links), `hasCredential` in schema, platform-sourced metrics with the source named, named client testimonials, education + certification record |

## ⚠️ Remaining before publishing

| Item | File | Status |
| --- | --- | --- |
| Web3Forms key | `src/data/site.js` → `web3formsKey` | Still a placeholder — form shows a notice and points to email/WhatsApp |

Everything else is now real data: profile photo (`public/profile.jpg`), resume PDF
(`public/resume/`), Calendly booking link, certifications by provider, education,
experience timeline and client testimonials — all taken from your resume and your
published portfolio (portfolio.riajultech.com).
