// Outil de build (ponctuel) — génère favicon + image OG PLACEHOLDER
// pour Haiti Talent Lab (le vrai logo reste à créer).
// Lancer : node scripts/gen-brand-assets.mjs
import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pub = path.join(root, 'public');

const NAVY = '#002548';
const SKY = '#30A1FC';
const ORANGE = '#FF5D21';
const WHITE = '#FFFFFF';

/* ───── Favicon (mark géométrique « H » + accents) ───── */
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="${NAVY}"/>
  <!-- H bars -->
  <rect x="14" y="14" width="7" height="36" fill="${WHITE}"/>
  <rect x="43" y="14" width="7" height="36" fill="${WHITE}"/>
  <rect x="21" y="29" width="22" height="6" fill="${WHITE}"/>
  <!-- accents brand -->
  <rect x="14" y="54" width="28" height="2.5" fill="${SKY}"/>
  <rect x="44" y="54" width="6" height="2.5" fill="${ORANGE}"/>
</svg>`;

for (const sz of [32, 192, 512]) {
  await sharp(Buffer.from(faviconSvg))
    .resize(sz, sz)
    .png()
    .toFile(path.join(pub, `favicon-${sz}.png`));
}
await sharp(Buffer.from(faviconSvg))
  .resize(180, 180)
  .flatten({ background: NAVY })
  .png()
  .toFile(path.join(pub, 'apple-touch-icon.png'));

/* ───── Image OG 1200x630 (placeholder) ─────
   - Fond navy avec touches sky/orange diffuses.
   - Wordmark via SVG text (police de fallback système : Helvetica/Arial)
     — pas de dépendance à Space Grotesk côté rasterisation.
   - Mark géométrique « HTL » garanti font-free pour fallback visuel.
   - Filet d'accent orange→sky en bas. */
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${NAVY}"/>
  <circle cx="1080" cy="120" r="240" fill="${SKY}" opacity="0.08"/>
  <circle cx="120" cy="540" r="180" fill="${ORANGE}" opacity="0.08"/>

  <!-- Mark géométrique HTL (font-free, sécurité visuelle) -->
  <g transform="translate(100 180)">
    <!-- H -->
    <rect x="0"  y="0"  width="22" height="120" fill="${WHITE}"/>
    <rect x="78" y="0"  width="22" height="120" fill="${WHITE}"/>
    <rect x="22" y="50" width="56" height="20"  fill="${WHITE}"/>
    <!-- T -->
    <rect x="130" y="0"  width="100" height="22" fill="${WHITE}"/>
    <rect x="169" y="22" width="22"  height="98" fill="${WHITE}"/>
    <!-- L -->
    <rect x="245" y="0"   width="22" height="120" fill="${WHITE}"/>
    <rect x="267" y="98"  width="78" height="22"  fill="${WHITE}"/>
    <!-- accent dot -->
    <circle cx="360" cy="120" r="8" fill="${ORANGE}"/>
  </g>

  <!-- Texte (fallback sans-serif système) -->
  <text x="100" y="395" fill="${SKY}" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="22" font-weight="600" letter-spacing="6">UN PROGRAMME NATIONAL D'EMPLOYABILITE</text>
  <text x="100" y="465" fill="${WHITE}" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="64" font-weight="800" letter-spacing="-2">HAITI TALENT LAB</text>
  <text x="100" y="515" fill="rgba(255,255,255,0.7)" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="26" font-weight="500">6 villes. 12 mois. 1,5 M USD a mobiliser.</text>

  <!-- Filet d'accent bas (orange → sky) -->
  <rect x="0"   y="625" width="600" height="5" fill="${ORANGE}"/>
  <rect x="600" y="625" width="600" height="5" fill="${SKY}"/>
  <text x="100" y="600" fill="rgba(255,255,255,0.3)" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="18">haititalentlab.com — visuel provisoire</text>
</svg>`;

await sharp(Buffer.from(ogSvg))
  .png()
  .toFile(path.join(pub, 'og-haiti.png'));

console.log('OK : favicon-32/192/512.png, apple-touch-icon.png, og-haiti.png');
