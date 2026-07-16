# ARHITEKTONS — Arhitektūras biroja tīmekļa vietne

> Pilna cikla arhitektūras un būvprojektēšanas biroja tīmekļa vietne, izstrādāta ar **Astro 5** + **Sveltia CMS**, gatava hostēšanai uz **Cloudflare Pages**.

![Stack](https://img.shields.io/badge/Astro-5.x-FF5D01?logo=astro&logoColor=white)
![CMS](https://img.shields.io/badge/CMS-Sveltia-4F46E5)
![Hosting](https://img.shields.io/badge/Hosting-Cloudflare%20Pages-F38020?logo=cloudflare&logoColor=white)

---

## 📖 Par projektu

**ARHITEKTONS** ir arhitektūras un būvprojektēšanas birojs Jēkabpilī. Šī tīmekļa vietne aizstāj iepriekšējo risinājumu ar mūsdienīgu, ātru un viegli uzturamu risinājumu.

### ✨ Galvenās iezīmes

- 🎨 **Premium tumšs dizains** ar bronzas akcentiem un Cormorant Garamond tipogrāfiju
- ⚡ **Astro 5** — zems JavaScript patēriņš, ātra ielāde, augsts Lighthouse rezultāts
- 📝 **Sveltia CMS** — saturs rediģējams pārlūkā bez koda zināšanām
- 📱 **Pilnībā atsaucīgs** — darbojas visos ekrāna izmēros
- 🔍 **SEO optimizēts** — sitemap, OpenGraph, semantiskā HTML, meta tagi
- ♿ **Pieejams** — atbilst WCAG vadlīnijām, atbalsta tastatūras navigāciju
- 🌐 **Latviešu valoda** — pilnībā lokalizēta lietotāja saskarne
- ☁️ **Cloudflare Pages** gatavs — automātisks deploy no GitHub caur Git integrāciju

---

## 🛠️ Tehnoloģiju steks

| Slānis          | Tehnoloģija                                      |
| --------------- | ------------------------------------------------- |
| Framework       | [Astro 5](https://astro.build) (static output)    |
| Stili           | CSS Custom Properties (vanilla, bez framework)   |
| CMS             | [Sveltia CMS](https://github.com/sveltia/sveltia-cms) |
| Hosting         | [Cloudflare Pages](https://pages.cloudflare.com) (Git integrācija) |
| Fonti           | Google Fonts (Cormorant Garamond, Inter)         |
| Versiju kontroļe| Git + GitHub                                       |

---

## 📁 Projeka struktūra

```
arhipro_zai/
├── public/                    # Statiskie faili (kopēti kā such)
│   ├── admin/                 # Sveltia CMS instance
│   │   ├── index.html         # CMS entry point
│   │   └── config.yml         # CMS kolekciju konfigurācija
│   ├── favicon.svg            # Vietnes ikona
│   └── robots.txt             # Search engine norādes
├── src/
│   ├── components/            # Atkārtoti izmantojamas komponentes
│   │   ├── Header.astro       # Navigācija (sticky, mobile menu)
│   │   ├── Footer.astro       # Kājene ar CTA un kontaktiem
│   │   ├── Hero.astro         # Sākumlapas hero sekcija
│   │   ├── Icon.astro         # SVG ikonu sistēma
│   │   ├── Logo.astro         # ARHITEKTONS logo + monogramma
│   │   ├── SEO.astro          # Meta tagi, OpenGraph, Twitter
│   │   ├── ProcessTimeline.astro
│   │   ├── ValuesSection.astro
│   │   ├── ClientsMarquee.astro
│   │   ├── services/ServicesGrid.astro
│   │   └── projects/ProjectsShowcase.astro
│   ├── data/                  # Saturs (JSON — rediģējams caur CMS)
│   │   ├── services.json      # 6 pakalpojumi
│   │   ├── projects.json      # Projektu portfelis
│   │   ├── clients.json       # Sadarbības partneri
│   │   └── settings.json      # Kontakti un iestatījumi
│   ├── layouts/
│   │   └── BaseLayout.astro   # Galvenā shēma (header/footer/SEO)
│   ├── pages/                 # Lapas (faila sistēmas routing)
│   │   ├── index.astro        # Sākumlapa
│   │   ├── pakalpojumi.astro  # Pakalpojumi (detalizēti)
│   │   ├── projekti.astro     # Projektu portfelis
│   │   ├── par-mums.astro     # Par uzņēmumu
│   │   ├── kontakti.astro     # Kontaktinformācija + forma
│   │   └── 404.astro          # Kļūdas lapa
│   ├── styles/
│   │   └── global.css         # Dizaina sistēma (tokens, reset)
│   └── config.ts              # Globālā konfigurācija (SEO, kontakti, nav)
├── .github/workflows/deploy.yml  # CI/CD — auto-deploy uz Cloudflare
├── astro.config.mjs           # Astro konfigurācija
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Darba uzsākšana

### Priekšnosacījumi

- **Node.js 20+** un **npm**
- **Git**
- **GitHub** konts (deployalam caur GitHub Actions)

### Lokālā instalācija

```bash
# Klonējiet repo
git clone https://github.com/kazdans/arhipro_zai.git
cd arhipro_zai

# Uzstādiet atkarības
npm install

# Startējiet izstrādes serveri (http://localhost:4321)
npm run dev

# Veidojiet produkcijas versiju
npm run build

# Priekšskatiet produkcijas build
npm run preview
```

---

## ✏️ Satura rediģēšana (Sveltia CMS)

Vietnes saturs tiek glabāts JSON failos mapē `src/data/`. To var rediģēt divos veidos:

### 1. Caur CMS administratora paneli (ieteicams)

1. Atveriet `https://arhiprozai.lazdans.workers.dev/admin/` pēc deploy
2. Piesakieties ar GitHub kontu (jābūt uzaicinātam)
3. Rediģējiet pakalpojumus, projektus, partnerus un kontaktus vizuāli
4. Saglabājiet — izmaiņas automātiski nonāks GitHub un publicēsies

### 2. Tieši GitHub

- Atveriet `src/data/*.json` failus GitHub web interfeisā
- Rediģējiet un commit'ojiet — deploy notiks automātiski

### Pieejamās CMS kolekcijas

| Kolekcija   | Fails                    | Apraksts                              |
| ----------- | ------------------------ | ------------------------------------- |
| Pakalpojumi | `src/data/services.json` | 6 biroja pakalpojumi ar detalizāciju  |
| Projekti    | `src/data/projects.json` | Projektu portfelis ar filtrēšanu      |
| Partneri    | `src/data/clients.json`  | Sadarbības partneri un klienti        |
| Iestatījumi | `src/data/settings.json` | Kontakti, darba laiks, sociālie tīkli |

---

## ☁️ Hostēšana uz Cloudflare

Vietne ir izvietota uz Cloudflare caur **Git integrāciju** (web interfeiss) —
nav vajadzīgi ne Wrangler, ne GitHub Secrets, ne komandrinda.

> **Pilnas soli-pa-solim instrukcijas** skatiet failā **[`HOSTING.md`](./HOSTING.md)**.

**Īsumā:**
1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Atlasiet GitHub repo `kazdans/arhipro_zai`
3. Build command: `npm run build`, output: `dist`, preset: **Astro**
4. Spiediet **Save and Deploy** — pēc 1–2 minūtēm vietne pieejama

**Pašreizējais URL:** `https://arhiprozai.lazdans.workers.dev`

Katrs push uz `main` (ieskaitot izmaiņas caur Sveltia CMS) automātiski izveidos jaunu deploy.

### Pielāgots domēns (pēc izvēles)

Kad vēlies piesaistīt īsto domēnu (piem., `arhitektons.lv`):
1. Cloudflare projektā → **Custom domains** → pievienojiet domēnu
2. Pievienojiet DNS `CNAME` ierakstu → `arhiprozai.lazdans.workers.dev`
3. Pēc tam atjauniniet `astro.config.mjs` `site:` uz jauno domēnu

---

## 🎨 Dizaina sistēma

Visi dizaina lēmumi centralizēti `src/styles/global.css` CSS Custom Properties:

```css
/* Krāsu palete */
--c-bg: #0a0a0b;              /* pamata fons */
--c-bronze: #c9a063;          /* primārais akcents */
--c-bronze-bright: #e0b878;   /* hover stāvokļi */
--c-text: #f5f5f4;            /* galvenais teksts */
--c-text-muted: #a1a1a2;      /* sekundārais teksts */

/* Tipogrāfija */
--font-display: 'Cormorant Garamond', serif;
--font-sans: 'Inter', sans-serif;
```

Lai mainītu zīmola krāsu, rediģējiet `--c-bronze*` vērtības — tas automātiski atjaunosies visā vietnē.

---

## 📋 Lapas pārskats

| Lapa           | URL             | Apraksts                                      |
| -------------- | --------------- | --------------------------------------------- |
| Sākums         | `/`             | Hero, pakalpojumi, projekti, process, vērtības |
| Pakalpojumi    | `/pakalpojumi`  | 6 pakalpojumi ar detalizētu aprakstu           |
| Projekti       | `/projekti`     | Projektu portfelis ar kategoriju filtrēšanu   |
| Par mums       | `/par-mums`     | Misija, vērtības, pieeja, statistika           |
| Kontakti       | `/kontakti`     | Kontakti + interaktīva forma + karte           |
| 404            | `/404`          | Kļūdas lapa                                   |
| CMS admin      | `/admin/`       | Sveltia CMS administratora panelis             |

---

## 🔧 Konfigurācijas punkti

Pirms deploy pārliecinieties, ka esat mainījuši:

1. **`src/config.ts`** — kontaktdati, telefons, e-pasts, adrese, sociālie tīkli
2. **`astro.config.mjs`** → `site: 'https://arhiprozai.lazdans.workers.dev'` → jūsu domēns
3. **`public/admin/config.yml`** → `backend.repo: kazdans/arhipro_zai` → jūsu GitHub repo
4. **`src/data/settings.json`** — kontakti (sasaistīts ar CMS)
5. **`public/robots.txt`** → `Sitemap:` URL → jūsu domēns

---

## 📈 Performance un SEO

- ✅ **Static Site Generation** — lapas tiek priekšĢenerētas
- ✅ **Minimāls JavaScript** — tikai animation un UI loģika
- ✅ **Responsive images** ar Astro's built-in image service
- ✅ **Sitemap.xml** automātiski generēts
- ✅ **OpenGraph** un **Twitter Card** tagi
- ✅ **Semantic HTML5** — header, nav, main, section, article, footer
- ✅ **Latviešu valoda** (`lang="lv"`) un `lv-LV` locale

---

## 📝 Licenze un autortiesības

© 2026 ARHITEKTONS SIA. Visas tiesības aizsargātas.

Kods licencēts privātam izmantojumam. Trešo pušu bibliotēkām ir to pašu licences.

---

## 📞 Atbalsts

Jautājumu gadījumā par vietnes uzturēšanu sazinieties ar izstrādātāju.
Paša uzņēmuma kontakti pieejami vietnes sadaļā **Kontakt**.
