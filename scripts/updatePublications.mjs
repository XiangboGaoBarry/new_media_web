/* scripts/updatePublications.mjs — SerpAPI version */
import { config } from 'dotenv';     
config({ path: '.env.local' });      
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const authorId = 'bSpZc84AAAAJ';
const apiKey   = process.env.SERPAPI_KEY;   // ← export SERPAPI_KEY=xxxxxx
if (!apiKey) {
  console.error('SERPAPI_KEY not set');
  process.exit(1);
}

const url = `https://serpapi.com/search.json?engine=google_scholar_author&author_id=${authorId}&api_key=${apiKey}&num=1000`;
const data = await fetch(url).then(r => r.json());

const pubs = (data.articles || []).map(p => ({
  title: p.title,
  authors: p.authors,
  conference: p.publication,
  paperlink: p.link,
  paperlinksmall: p.link,
  imageSrc: '',
  githublink: '',
  description: '',
  projectpage: '',
}));

const banner =
  '/* AUTO-GENERATED via SerpAPI — do not edit */\n' +
  "import { PublicationItem } from './dataDef';\n" +
  'export const autoPublications: PublicationItem[] = ';
const outPath = resolve(dirname(fileURLToPath(import.meta.url)), '../src/data/publications.generated.ts');
writeFileSync(outPath, banner + JSON.stringify(pubs, null, 2) + ';\n', 'utf8');
console.log(`wrote ${pubs.length} publications → ${outPath}`);