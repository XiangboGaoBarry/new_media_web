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

const metricsTable = Array.isArray(data?.cited_by?.table) ? data.cited_by.table : [];
const mergedMetrics = metricsTable.reduce((acc, item) => {
  if (item && typeof item === 'object') {
    for (const [key, value] of Object.entries(item)) {
      if (value && typeof value === 'object') {
        acc[key] = value;
      }
    }
  }
  return acc;
}, {});
const extractMetric = metric => {
  if (!metric || typeof metric !== 'object') {
    return { all: 0, since: 0, sinceYear: null };
  }
  const sinceEntry = Object.entries(metric).find(([key]) => key.startsWith('since_'));
  const sinceYear = sinceEntry ? Number(sinceEntry[0].replace('since_', '')) : null;
  const sinceValue = sinceEntry ? Number(sinceEntry[1]) : 0;
  return {
    all: Number(metric.all ?? 0),
    since: Number.isFinite(sinceValue) ? sinceValue : 0,
    sinceYear: Number.isFinite(sinceYear) ? sinceYear : null,
  };
};

const citationsMetric = extractMetric(mergedMetrics.citations);
const hIndexMetric = extractMetric(mergedMetrics.h_index);
const i10Metric = extractMetric(mergedMetrics.i10_index);

const scholarMetrics = {
  totalCitations: citationsMetric.all,
  totalCitationsSince: citationsMetric.since,
  totalCitationsSinceYear: citationsMetric.sinceYear,
  hIndex: hIndexMetric.all,
  hIndexSince: hIndexMetric.since,
  hIndexSinceYear: hIndexMetric.sinceYear,
  i10Index: i10Metric.all,
  i10IndexSince: i10Metric.since,
  i10IndexSinceYear: i10Metric.sinceYear,
};

const banner =
  '/* AUTO-GENERATED via SerpAPI — do not edit */\n' +
  "import { PublicationItem, ScholarMetrics } from './dataDef';\n" +
  'export const autoPublications: PublicationItem[] = ';
const outPath = resolve(dirname(fileURLToPath(import.meta.url)), '../src/data/publications.generated.ts');
const metricsExport =
  '\n\nexport const autoScholarMetrics: ScholarMetrics = ' +
  JSON.stringify(scholarMetrics, null, 2) +
  ';\n';
writeFileSync(outPath, banner + JSON.stringify(pubs, null, 2) + ';\n' + metricsExport, 'utf8');
console.log(`wrote ${pubs.length} publications → ${outPath}`);
