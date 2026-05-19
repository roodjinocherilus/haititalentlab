/**
 * Haiti Talent Lab — configuration centralisée.
 *
 * SEUL fichier à éditer quand ZLC confirme les informations en attente.
 * Tous les `[À confirmer]` / placeholders sont regroupés ici.
 *
 * Référence : 02_Wireframes_Haiti_Talent_Lab.md (sitemap + contenu)
 * et 01_Conventions_Communes_2_Sites.md (§5 conventions rédactionnelles).
 */

/* ─────────────────────────────  Site  ───────────────────────────── */

export const site = {
  name: 'Haiti Talent Lab',
  url: 'https://haititalentlab.com',
  /** Tagline maîtresse — doc 01 §5.1, à valider ZLC. */
  tagline: 'Connecter les talents haïtiens aux opportunités réelles.',
  description:
    "Le premier programme national d'employabilité d'Haïti. " +
    '6 villes, 12 mois — un pont entre les talents haïtiens et les ' +
    'opportunités réelles.',
  locale: 'fr',
  lang: 'fr',
} as const;

/* ────────────────────────────  Programme  ─────────────────────────── */

export const program = {
  duration: '12 mois',
  citiesCount: 6,
  budgetLabel: '1,5 M USD',
  /** Période du déploiement national (doc 02). */
  startLabel: 'Juillet 2026',
  endLabel: 'Mai 2027',
} as const;

/* ────────────────────  Écosystème (liens croisés)  ─────────────────── */
/* Règles de renvoi : doc 01 §3.1. Depuis HTL → Cayes/Cap/Hub/ZLC. */

export const ecosystem = {
  cayesTalentLab: 'https://cayestalentlab.com',
  capTalentLab: 'https://captalentlab.com',
  hub: 'https://haititalenthub.com',
  /** Redirection directe candidature candidat (doc brief). */
  hubCandidateSignup: 'https://haititalenthub.com/login?role=candidate#signup',
  zeroLoss: 'https://zeroloss-ht.com',
} as const;

/* ──────────────────  Preuve sociale — pilote Cap T.L.  ─────────────── */
/* Bloc #1, doc 01 §4. Format chiffres : doc 01 §5.3. */

export const pilot = {
  name: 'Cap Talent Lab',
  city: 'Cap-Haïtien',
  dateLabel: '23-24 janvier 2026',
  url: ecosystem.capTalentLab,
  stats: [
    { value: '+200', label: 'candidatures recueillies' },
    { value: '+100', label: 'candidats présélectionnés' },
    /** « 20+ » retenu (dossier de presse officiel) — à valider ZLC. */
    { value: '20+', label: 'entreprises partenaires' },
    { value: '4,9 / 5', label: 'satisfaction' },
    { value: '+10 %', label: 'candidats placés' },
  ],
} as const;

/* ─────────────────  Calendrier national — 6 villes  ────────────────── */
/* Doc 02 §3.5. Cayes → cayestalentlab.com, Cap → captalentlab.com,
   autres villes en placeholder « Bientôt ». */

export type EditionStatus = 'upcoming' | 'soon' | 'past';

export const nationalCalendar: ReadonlyArray<{
  city: string;
  dateLabel: string;
  note: string;
  status: EditionStatus;
  url?: string;
}> = [
  {
    city: 'Les Cayes',
    dateLabel: 'Juillet 2026',
    note: '1ʳᵉ ville — édition nationale',
    status: 'upcoming',
    url: ecosystem.cayesTalentLab,
  },
  {
    city: 'Cap-Haïtien',
    dateLabel: 'Septembre 2026',
    note: '2ᵉ édition — Nord',
    status: 'upcoming',
    url: ecosystem.capTalentLab,
  },
  {
    city: 'Port-au-Prince',
    dateLabel: 'Novembre 2026',
    note: 'Capitale — audience nationale',
    status: 'soon',
  },
  {
    city: 'Gonaïves',
    dateLabel: 'Janvier 2027',
    note: 'Artibonite',
    status: 'soon',
  },
  { city: 'Jacmel', dateLabel: 'Mars 2027', note: 'Grand Sud-Est', status: 'soon' },
  {
    city: 'Port-de-Paix',
    dateLabel: 'Mai 2027',
    note: 'Grand Nord-Ouest',
    status: 'soon',
  },
];

/* ────────────────────────────  Navigation  ────────────────────────── */
/* Header doc 02 §2. CTA absolu = « Devenir partenaire ». */

export const nav: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Programme', href: '/programme' },
  { label: 'Pilote', href: '/pilote' },
  { label: 'Éditions', href: '/editions' },
  { label: 'Entreprises', href: '/entreprises' },
  { label: 'Talents', href: '/talents' },
  { label: 'Partenaires', href: '/partenaires' },
  { label: 'Presse', href: '/presse' },
];

export const primaryCta = {
  label: 'Devenir partenaire',
  href: '/partenaires',
} as const;

/* ──────────────────────────────  Footer  ──────────────────────────── */
/* Structure commune : doc 01 §3.2. */

export const footerColumns: ReadonlyArray<{
  title: string;
  links: ReadonlyArray<{ label: string; href: string; here?: boolean }>;
}> = [
  {
    title: 'Le programme',
    links: [
      { label: 'À propos', href: '/a-propos' },
      { label: 'Le programme', href: '/programme' },
      { label: 'Le pilote', href: '/pilote' },
    ],
  },
  {
    title: 'Éditions',
    links: [
      { label: 'Les Cayes 2026', href: ecosystem.cayesTalentLab },
      { label: 'Cap-Haïtien', href: ecosystem.capTalentLab },
      { label: 'Toutes les villes', href: '/editions' },
    ],
  },
  {
    title: 'Participer',
    links: [
      { label: 'Talents', href: '/talents' },
      { label: 'Entreprises', href: '/entreprises' },
      { label: 'Partenaires', href: '/partenaires' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Presse', href: '/presse' },
      { label: 'Contact', href: '/contact' },
      { label: 'Haiti Talent Hub', href: ecosystem.hub },
    ],
  },
];

export const social: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Facebook', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'YouTube', href: '#' },
];

export const legalLinks: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/confidentialite' },
  { label: 'Contact', href: '/contact' },
];

/* ──────────────────────────────  Contacts  ────────────────────────── */
/* Page Contact : doc 02 §12 (4 contacts qualifiés). Placeholders ZLC. */

export const contacts: ReadonlyArray<{
  audience: string;
  name: string;
  email: string;
  phone: string;
}> = [
  {
    audience: 'Partenariats',
    name: '[Contact à désigner]',
    email: 'partenariats@haititalentlab.com',
    phone: '[Téléphone à confirmer]',
  },
  {
    audience: 'Presse',
    name: '[Contact à désigner]',
    email: 'presse@haititalentlab.com',
    phone: '[Téléphone à confirmer]',
  },
  {
    audience: 'Entreprises recruteuses',
    name: '[Contact à désigner]',
    email: 'entreprises@haititalentlab.com',
    phone: '[Téléphone à confirmer]',
  },
  {
    audience: 'Candidats',
    name: '[Contact à désigner]',
    email: 'candidats@haititalentlab.com',
    phone: '[Téléphone à confirmer]',
  },
];

/* ──────────────────────────────  Formulaires  ─────────────────────── */

/** ID Formspree depuis l'env (voir .env.example). Vide = non configuré. */
export const formspreeId: string = import.meta.env.PUBLIC_FORMSPREE_ID ?? '';
export const formsConfigured = formspreeId.trim().length > 0;
export const formspreeEndpoint = formsConfigured
  ? `https://formspree.io/f/${formspreeId}`
  : '';

/* ──────────────────────  Schema.org Organization  ─────────────────── */
/* JSON-LD du programme HTL (vitrine institutionnelle). */

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  alternateName: 'HTL',
  description: site.description,
  url: site.url,
  logo: `${site.url}/og-haiti.png`,
  image: `${site.url}/og-haiti.png`,
  founder: {
    '@type': 'Organization',
    name: 'Zero Loss Consulting',
    url: ecosystem.zeroLoss,
  },
  areaServed: { '@type': 'Country', name: 'Haïti' },
  sameAs: [
    ecosystem.cayesTalentLab,
    ecosystem.capTalentLab,
    ecosystem.hub,
    ecosystem.zeroLoss,
  ],
} as const;

/* ────────────────────  Organisation porteuse  ─────────────────────── */

export const org = {
  name: 'Zero Loss Consulting',
  url: ecosystem.zeroLoss,
  initiativeLine: 'Une initiative de Zero Loss Consulting',
  hubLine: 'Plateforme partenaire : Haiti Talent Hub',
} as const;
