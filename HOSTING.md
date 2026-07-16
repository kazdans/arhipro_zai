# 🌐 Hostinga instrukcija — Cloudflare caur web interfeisu

Šis dokuments satur soli-pa-solim norādes, kā uzhostēt ARHITEKTONS vietni uz **Cloudflare Workers/Pages**, savienojot to ar GitHub repo **caur Cloudflare web interfeisu**.

Šī ir vienkāršākā metode — **nevajag ne Wrangler, ne komandrindu, ne GitHub Secrets**. Cloudflare pats klonē repo, izveido vietni un automātiski izvieto (deploy) pie katra push uz `main`.

> **Konteksts:** Sveltia CMS instance uz Cloudflare jau ir izveidota (lietotāja ziņā).

---

## ✅ Priekšnosacījumi (kas jau ir paveikts)

- ✓ GitHub repo: [github.com/kazdans/arhipro_zai](https://github.com/kazdans/arhipro_zai)
- ✓ Astro build ir pārbaudīts un strādā lokāli
- ✓ Wrangler konfigurācija (`wrangler.jsonc`) gatava
- ✓ Cloudflare konts eksistē (lietotāja ziņā)

---

## 🚀 Soli-pa-solim deploy

### 1. Atveriet Cloudflare Dashboard

1. Atveriet [dash.cloudflare.com](https://dash.cloudflare.com)
2. Piesakieties savā kontā
3. Kreisajā sānjoslā atlasiet **Workers & Pages**

### 2. Izveidojiet jaunu projektu

1. Spiediet **Create** (vai **Create application**)
2. Atlasiet **Pages** cilni
3. Spiediet **Connect to Git**

### 3. Savienojiet GitHub

1. Atlasiet **GitHub** kā Git provider
2. Ja pirmo reizi — apstipriniet **Authorize Cloudflare**:
   - Cloudflare lūgs piekļuvi GitHub
   - Ieteicams izvēlēties **Only select repositories**
   - Sarakstā atlasiet **`kazdans/arhipro_zai`**
   - Spiediet **Install & Authorize**
3. Cloudflare atgriezīsies un parādīs repo sarakstu
4. Atlasiet **`arhipro_zai`** → spiediet **Begin setup**

### 4. Konfigurējiet build iestatījumus

Aizpildiet formu **tieši šādi**:

| Lauks                      | Vērtība                          |
| -------------------------- | -------------------------------- |
| **Project name**           | `arhitektons`                    |
| **Production branch**      | `main`                           |
| **Framework preset**       | `Astro`                          |
| **Build command**          | `npm run build`                  |
| **Build output directory** | `dist`                           |
| **Root directory**         | (atstājiet tukšu)                |

**Cilne "Environment variables" (pēc izvēles, bet ieteicams):**

Pievienojiet vienu mainīgo (lai Astro zinātu galavērta domēnu priekš sitemap/SEO):

| Variable name | Value |
| ------------- | ----- |
| `NODE_VERSION` | `20` |

> Padoms: ja vēlaties, lai Astro ģenerētu absolūtos URL, iestatiet arī `SITE_URL=https://arhitektons.lv` — bet pašreizējā konfigurācija strādā arī bez tā.

5. Spiediet **Save and Deploy**

### 5. Pagaidiet pirmo build

- Cloudflare sāks build → varat sekot līdzi reālajā laikā logā
- Parasti aizņem **1–2 minūtes**
- Kad redzat **✓ Success (Production)** — vietne ir dzīva!

### 6. Atveriet savu vietni

Pēc veiksmīga deploy Cloudflare piešķirs URL formātā:

```
https://arhitektons.pages.dev
```

(Precīzais subdomēns atkarīgs no Project name — spiediet apakšā uz **Visit site**.)

---

## 🔄 Turpmākie deploy (automātiski)

Tagad **katrs push uz `main` zaru** automātiski izraisīs jaunu deploy:
- Veiciet izmaiņas GitHub (vai caur Sveltia CMS `/admin/`)
- Cloudflare pats pamanīs, izveidos un publicēs ~1 minūtes laikā
- Sekojiet līdzi **Deployments** cilnē projektā

---

## 🌐 Pielāgota domēna piesaiste (pēc izvēles)

Lai vietne būtu pieejama `arhitektons.lv`:

1. Projektā → **Custom domains** cilne → **Set up a custom domain**
2. Ievadiet `arhitektons.lv` → **Continue**
3. **Activate domain**:
   - Ja domēns **jau ir Cloudflare kontā** → automātiski pievienos DNS ierakstus, pagaidiet ~minūti
   - Ja domēns ir **citur** (piem., citā reģistrā) → Cloudflare parādīs DNS ierakstus, kas jāpievieno pie reģistra:
     - Tips: `CNAME`
     - Nosaukums: `@` (vai `www`)
     - Mērķis: `arhitektons.pages.dev`
4. Atkārtojiet priekš `www.arhitektons.lv`, ja vēlies arī to

---

## 📝 Sveltia CMS piekļuve pēc deploy

1. Atveriet `https://arhitektons.pages.dev/admin/`
2. Spiediet **Sign in with GitHub**
3. Ja redzat kļūdu par piekļuves tiesībām:
   - Atveriet [github.com/kazdans/arhipro_zai/settings/access](https://github.com/kazdans/arhipro_zai/settings/access)
   - Pievienojiet lietotāju kā **Collaborator**
   - Vai arī mainiet `public/admin/config.yml` `backend.repo` uz repo, kuram pieder

---

## 🩺 Problēmu novēršana

| Simptoms | Risinājums |
| -------- | ---------- |
| Build neizdodas: "command not found: astro" | Pārbaudiet, vai Build command = `npm run build` (nevis `astro build`) |
| Build neizdodas: "Dependencies lock file not found" | Pārliecinieties, ka `package-lock.json` ir commitēts (tas ir) |
| Build veiksmīgs, bet vietne rāda tukšu lapu | Build output directory jābūt `dist` (nevis `public` vai `build`) |
| CMS neparāda saturu | Pārbaudiet `/admin/config.yml` `backend.repo` — tam jābūt `kazdans/arhipro_zai` |
| Cloudflare neredz repozitoriju | GitHub → Settings → Applications → Cloudflare → pievienojiet repo atļaujas |
| Iepriekšējais URL vēl parāda veco saturu | Gaidiet 1–2 minūtes vai spiediet **Retry deployment** Cloudflare |

### Build logu apskate

1. Cloudflare Dashboard → Workers & Pages → `arhitektons`
2. **Deployments** cilne → atzīmējiet jebkuru deploy
3. Redzēsiet pilno build logu — noder, ja kas nestrādā

### Deploy atkārtota palaišana

1. **Deployments** cilne → atzīmējiet konkrēto commit
2. **Retry deployment** — izveidos no jauna bez nepieciešamības mainīt kodu

---

## 📞 Atbalsts

- **Cloudflare Pages dokumentācija**: [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages/)
- **Astro + Cloudflare guide**: [docs.astro.build/en/guides/deploy/cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/)
- **Sveltia CMS**: [github.com/sveltia/sveltia-cms](https://github.com/sveltia/sveltia-cms)

---

## 📌 Īsumā (vienā ekrānā)

```
Cloudflare Dashboard
  → Workers & Pages
    → Create → Pages → Connect to Git
      → GitHub → Authorize → atlasiet "arhipro_zai"
        → Begin setup
          - Project name:         arhitektons
          - Production branch:    main
          - Framework preset:     Astro
          - Build command:        npm run build
          - Build output:         dist
        → Save and Deploy
          → Pagaidiet 1–2 minūtes → vietne dzīva uz *.pages.dev
```
