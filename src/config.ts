/**
 * ARHITEKTONS — globālā konfigurācija
 * Centralizēts uzņēmuma, navigācijas un SEO datu avots.
 */

export const SITE = {
  name: 'ARHITEKTONS',
  legalName: 'ARHITEKTONS SIA',
  tagline: 'Arhitektūra · Būvprojekti · Autoruzraudzība',
  description:
    'ARHITEKTONS — arhitektūras un būvprojektēšanas birojs. Pilna cikla pakalpojumi: no projektēšanas uzdevuma līdz autoruzraudzībai un projektu vadībai.',
  url: 'https://arhiprozai.lazdans.workers.dev',
  locale: 'lv-LV',
  lang: 'lv',
  defaultOgImage: '/og/og-default.svg',
} as const;

export const CONTACT = {
  phone: '+371 29 455 679',
  phoneHref: 'tel:+371294555679',
  email: 'info@arhitektons.lv',
  email2: 'ineta.buka@arhitektons.lv',
  address: 'Madonas iela 27E',
  city: 'Jēkabpils, LV-5202',
  country: 'Latvija',
  fullAddress: 'Madonas iela 27E, Jēkabpils, LV-5202, Latvija',
  hoursWeek: 'P–Pk 9:00–12:00, 13:00–17:00',
  hoursWeekend: 'Sestdiena, svētdiena — slēgts',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Madonas+iela+27E,+Jēkabpils',
  regNo: 'REģ. Nr. 4000XXXXXXX',
  bank: 'AS SEB banka',
} as const;

export const SOCIAL = {
  facebook: 'https://www.facebook.com/',
  facebookLabel: 'Facebook',
} as const;

export const NAV = [
  { label: 'Sākums', href: '/' },
  { label: 'Pakalpojumi', href: '/pakalpojumi' },
  { label: 'Projekti', href: '/projekti' },
  { label: 'Par mums', href: '/par-mums' },
  { label: 'Kontakt', href: '/kontakti' },
] as const;

export const FOOTER_NAV = {
  pakalpojumi: [
    { label: 'Projektēšanas uzdevums', href: '/pakalpojumi#projektesanas-uzdevums' },
    { label: 'Būvprojektu izstrāde', href: '/pakalpojumi#buvprojektu-izstrade' },
    { label: 'Apliecinājuma kartis', href: '/pakalpojumi#apliecinajuma-kartis' },
    { label: 'Paskaidrojuma raksti', href: '/pakalpojumi#paskaidrojuma-raksti' },
    { label: 'Projektu vadība', href: '/pakalpojumi#projektu-vadiba' },
    { label: 'Autoruzraudzība', href: '/pakalpojumi#autoruzraudziba' },
  ],
  uznenums: [
    { label: 'Par mums', href: '/par-mums' },
    { label: 'Projekti', href: '/projekti' },
    { label: 'Kontakt', href: '/kontakti' },
  ],
} as const;

export const STATS = [
  { value: '20+', label: 'gadu pieredze nozarē' },
  { value: '500+', label: 'realizēti projekti' },
  { value: '15+', label: 'sadarbības novadi' },
  { value: '100%', label: 'projektu atbilstība normatīviem' },
] as const;
