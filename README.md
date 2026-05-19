# Haiti Talent Lab — site web

Site institutionnel du programme national d'employabilité **Haiti Talent Lab** — 6 villes, 12 mois, 1,5 M USD à mobiliser. `haititalentlab.cv`

## Stack

- [Astro](https://astro.build) — site statique multi-pages (`output: 'static'`)
- [Tailwind CSS v4](https://tailwindcss.com) (via `@tailwindcss/postcss` — compatible Astro 6 / Rolldown)
- Polices : **Space Grotesk** (titres) + **DM Sans** (corps), via Fontsource
- Icônes : [`@lucide/astro`](https://lucide.dev)
- Déploiement : **GitHub Pages**, domaine personnalisé `haititalentlab.cv`

## Démarrer

> Node.js ≥ **22.12** requis (Astro 6). Sur cette machine, Node est installé dans `~/.local/node`.
> Si `node` est introuvable, exécuter au préalable :
> `export PATH="$HOME/.local/node/bin:$PATH"`

```bash
npm install
npm run dev        # serveur de dev → http://localhost:4322
npm run build      # build de production → ./dist
npm run preview    # prévisualiser le build
```

## Configuration

Tous les contenus variables (nom, tagline, budget, calendrier 6 villes,
contacts, URLs croisées avec Cayes/Cap/Hub/ZLC) sont centralisés dans
**`src/config/site.ts`** — un seul fichier à mettre à jour quand ZLC
confirme les informations.

Formulaires (contact, newsletter) : copier `.env.example` en `.env` et
renseigner `PUBLIC_FORMSPREE_ID`. La candidature candidat redirige
directement vers le Haiti Talent Hub.

## Pages (doc 02)

```
/                Accueil — 11 sections (hero, preuve, problème, méthode, calendrier, appel partenaires, double CTA, presse, partenaires, newsletter)
/programme       Méthode, cycle d'une édition, gouvernance
/pilote          Cap Talent Lab — la preuve qui a tout déclenché
/editions        6 villes — vue d'ensemble + grille détaillée
/entreprises     Espace recruteurs
/talents         Espace candidats (Hub + édition locale)
/partenaires     PAGE STRATÉGIQUE — 1,5 M USD à mobiliser
/presse          Salle de presse nationale
/a-propos        ZLC, Woodmy JB, équipe, histoire, valeurs
/contact         4 contacts qualifiés + formulaire
```

## Déploiement

Push sur `main` → le workflow `.github/workflows/deploy.yml` build
(Node 22) et publie sur GitHub Pages. Le fichier `public/CNAME`
configure le domaine personnalisé ; activer GitHub Pages
(source : *GitHub Actions*) dans les réglages du dépôt et pointer le
DNS de `haititalentlab.cv` vers GitHub.

## Logo et assets de marque

Le **vrai logo Haiti Talent Lab reste à créer** (doc 01 §6).
Pour l'instant le projet utilise des placeholders :
- Wordmark texte dans le header/footer (Space Grotesk, voir `src/components/Logo.astro`)
- Favicon : mark géométrique « H » sur fond navy
- Image OG : `public/og-haiti.png` (placeholder typographique)

Pour régénérer favicon + OG après mise à jour des assets :
`node scripts/gen-brand-assets.mjs`

## Statut

Brouillon de production v0 — en attente de validations ZLC
(logo officiel, contacts qualifiés, photos pilote, témoignages,
dossier de partenariat PDF, biographies équipe, mentions légales).
Voir les `[À confirmer]` / `[à compléter avec ZLC]` dans le code.
