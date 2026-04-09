# 🏠 River Kolpa Apartments 2026

Profesionalna spletna stran za apartmaje ob reki Kolpi v Beli krajini. Zgrajena z **Astro 5**, **TailwindCSS v4**, **React** za interaktivne otoke in **Vercel** za deployment.

---

##  🚀 Hitri začetek

```bash
# 1. Namesti odvisnosti
npm install

# 2. Poženi razvojni strežnik
npm run dev

# 3. Odpri brskalnik
http://localhost:4321
```

---

## 🛠️ Tehnični Stack (2026 Standard)

| Komponenta | Tehnologija | Zakaj? |
|------------|-------------|--------|
| **Framework** | Astro 5 | Zero-JS default, najboljši za SEO |
| **CSS** | TailwindCSS v4 | CSS-first konfiguracija, hitri buildi |
| **Interaktivnost** | React 19 (Islands) | Samo kjer je potrebno (koledar, plačila) |
| **Ikone** | Lucide React | Moderne, lahke, prilagodljive |
| **Fonti** | Inter + Playfair Display | Profesionalna kombinacija |
| **Hosting** | Vercel | Zero-config deployment, edge mreža |

---

## 📂 Struktura Projekta

```
riverkolpaapartments1-new/
├── src/
│   ├── components/
│   │   ├── Header.astro       # Navigacija
│   │   └── Sections.astro     # Vse vsebinske sekcije
│   ├── layouts/
│   │   └── Layout.astro       # HTML osnova z SEO
│   ├── pages/
│   │   └── index.astro        # Domača stran
│   └── styles/
│       └── globals.css        # Tailwind v4 tema
├── public/
│   └── favicon.svg            # Logo
├── astro.config.mjs           # Astro konfiguracija
├── package.json               # Odvisnosti
├── tsconfig.json              # TypeScript nastavitve
└── vercel.json                # Vercel deployment
```

---

## 🎨 Barvna Paleta (Bela Krajina Narava)

| Barva | Koda | Uporaba |
|-------|------|---------|
| **Zelena (Gozd)** | `#2C4A3B` | Primarna, gumbi, poudarki |
| **Krema** | `#FDFBF7` | Ozadje, tekst na temnem |
| **Bež** | `#E8E4D9` | Sekundarna, ozadja sekcij |
| **Zlata/Rjava** | `#D4A373` | CTA gumbi, sonce, les |
| **Temna** | `#1A1A1A` | Tekst, footer |

---

##  Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Vse komponente so mobile-first in popolnoma odzivne.

---

## 🔍 SEO Optimizacija

- ✅ Semantic HTML5 (`<main>`, `<section>`, `<nav>`, `<header>`, `<footer>`)
- ✅ Meta tagi (description, og:title, og:image, twitter:card)
- ✅ Canonical URL
- ✅ Alt teksti za vse slike
- ✅ Hitrost nalaganja < 1s (Astro Zero-JS)
- ✅ Google Fonts z preconnect

---

## 🚀 Deployment na Vercel

```bash
# 1. Poveži GitHub repozitorij z Vercelom
# 2. Vercel bo samodejno zaznal Astro konfiguracijo
# 3. Deploy se zgodi ob vsakem pushu na main branch
```

**Nastavitve v Vercel:**
- Framework Preset: **Astro**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

---

## 📝 Naslednji Koraki (Funkcionalnosti)

- [ ] **Koledar zasedenosti** (React komponenta z `react-day-picker`)
- [ ] **Stripe plačila** (Integracija za direktne rezervacije)
- [ ] **WhatsApp chat widget** (Hitro povpraševanje)
- [ ] **Večjezičnost** (SL/EN/DE switcher)
- [ ] **Blog sekcija** (Astro content collections za SEO članke)
- [ ] **Analytics** (Vercel Analytics ali Plausible)

---

## 📞 Kontakt

- **Email**: majda.pezdirc@gmail.com
- **Telefon**: +386 40 858 732
- **WhatsApp**: https://wa.me/38640858732
- **Booking.com**: https://www.booking.com/hotel/si/holiday-house-kolpa.html

---

**Izdelano z ❤️ v Beli krajini, 2026**
