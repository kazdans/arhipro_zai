# 🌐 Hostinga instrukcija — ARHITEKTONS

Šis dokuments satur soli-pa-solim norādes, kā uzhostēt ARHITEKTONS vietni uz **Cloudflare Workers** caur **GitHub Actions**.

> **Konteksts:** Sveltia CMS instance uz Cloudflare jau ir izveidota. Tāpēc šeit pievēršam uzmanību tikai pašas vietnes deploy.

---

## ✅ Priekšnosacījumi (kas jau ir paveikts)

- ✓ GitHub repo: [github.com/kazdans/arhipro_zai](https://github.com/kazdans/arhipro_zai)
- ✓ Astro build ir pārbaudīts un strādā (CI: ✓ Build Astro site)
- ✓ Wrangler konfigurācija (`wrangler.jsonc`) gatava
- ✓ GitHub Actions workflow (`.github/workflows/deploy.yml`) gatavs
- ✓ Sveltia CMS instance uz Cloudflare jau ir izveidota (lietotāja ziņā)

---

## 🚀 Soli-pa-solim deploy

### 1. Iegūstiet Cloudflare Account ID

1. Atveriet [dash.cloudflare.com](https://dash.cloudflare.com)
2. Labajā augšējā stūrī vai Dashboard sānjoslā atrodiet **Account ID** (32 rakstzīmju hex)
3. Nokopējiet to — tas būs jāpievieno GitHub Secrets

### 2. Izveidojiet Cloudflare API Token

1. Cloudflare Dashboard → **My Profile** ( augšējā labā stūra avatārs) → **API Tokens**
2. Spiediet **Create Token**
3. Atrastiet šablonu **"Edit Cloudflare Workers"** un spiediet **Use template**
4. Atstājiet noklusējuma atļaujas:
   - Account: **Workers Scripts: Edit**, **Account Settings: Read**
   - User: **Member Details: Read**
5. **Continue to summary** → **Create Token**
6. **Nokopējiet Token** — tas būs redzams tikai vienreiz!

### 3. Pievienojiet GitHub Secrets

1. Atveriet [github.com/kazdans/arhipro_zai/settings/secrets/actions](https://github.com/kazdans/arhipro_zai/settings/secrets/actions)
2. Spiediet **New repository secret** divas reizes:

   | Name | Value |
   | ---- | ----- |
   | `CLOUDFLARE_ACCOUNT_ID` | Account ID no 1. soļa |
   | `CLOUDFLARE_API_TOKEN` | API Token no 2. soļa |

3. Saglabājiet abus

### 4. Pirmdeploys (automātisks)

1. Veiciet jebkuru push uz `main` zaru (vai atkārtoti palaidiet workflow)
2. Atveriet **Actions** cilni repo: [github.com/kazdans/arhipro_zai/actions](https://github.com/kazdans/arhipro_zai/actions)
3. Pēdējais "Build & Deploy to Cloudflare" darbinājums vajadzētu būt ✓ zaļš
4. Cloudflare Dashboard → **Workers & Pages** → redzēsiet `arhitektons` worker
5. URL formātā: `https://arhitektons.<jūsu-subdomain>.workers.dev`

### 5. (Pēc izvēles) Pielāgots domēns

Lai piesaistītu `arhitektons.lv` (vai citu domēnu):

1. Cloudflare Dashboard → **Workers & Pages** → `arhitektons`
2. Cilne **Settings** → **Domains & Routes** → **Add Custom Domain**
3. Ievadiet `arhitektons.lv` (vai `www.arhitektons.lv`)
4. Ja domēns nav Cloudflare kontā, pievienojiet to najpirms sadaļā **Websites**
5. Pēc DNS izmaiņām (līdz 24 stundām), vietne būs pieejama jaunajā domēnā

---

## 🔧 Pēc deploy — CMS piekļuves konfigurācija

1. Atveriet `https://<jūsu-workers-url>/admin/`
2. Piesakieties ar GitHub kontu
3. Ja redzat kļūdu par piekļuves tiesībām:
   - GitHub repo → **Settings** → **Collaborators** → pievienojiet savu e-pastu/kontu
   - Vai nomainiet `public/admin/config.yml` → `backend.repo` uz privātu repo, ja vēlaties

---

## 🩺 Problēmu novēršana

| Simptoms | Risinājums |
| -------- | ---------- |
| Deploy neizdodas ar "Missing CLOUDFLARE_API_TOKEN" | Pārbaudiet, vai abi Secrets ir pievienoti (3. solis) |
| Deploy neizdodas ar "Authentication failed" | Pārģenerējiet API Token un atjauniniet GitHub Secret |
| Vietne parāda 404 Cloudflare URL | Pagaidiet 1-2 minūtes pēc deploy; pārbaudiet `_routes.json` `dist/` |
| CMS neļauj pieslēgties | Pārbaudiet, ka GitHub lietotājs ir repo collaborators |
| Bildes neparādās | Pārliecinieties, ka `public/uploads/` direktorija eksistē un ir commitēta |

### Workflow atkārtota palaišana

Ja deploy neizdodas un jūs esat pievienojis Secrets, varat atkārtoti palaist bez jauna commita:

1. GitHub repo → **Actions**
2. Atzīmējiet neveiksmīgo darbinājumu
3. Augšējā labā stūrī → **Re-run all jobs**

---

## 📞 Atbalsts

Lielāko daļu problēmu atrisina:
- **Cloudflare dokumentācija**: [developers.cloudflare.com/workers](https://developers.cloudflare.com/workers/)
- **Astro Cloudflare adaptējs**: [docs.astro.build/en/guides/integrations-guide/cloudflare](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)
- **Sveltia CMS**: [github.com/sveltia/sveltia-cms](https://github.com/sveltia/sveltia-cms)
