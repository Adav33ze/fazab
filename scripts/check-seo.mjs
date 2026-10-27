import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const base=process.env.SEO_BASE_URL||'http://127.0.0.1:4175';
const origin='https://www.fazab.com.ng';
const projects=JSON.parse(await readFile('src/data/projects.json','utf8'));
const paths=['/','/services','/projects','/about','/contact',...projects.map(p=>`/projects/${p.slug}`)];
const attr=(tag,name)=>tag.match(new RegExp(`\\s${name}="([^"]*)"`,'i'))?.[1];
const titles=new Set();
const sitemapResponse=await fetch(`${base}/sitemap.xml`);assert.equal(sitemapResponse.status,200,'Missing sitemap');
const sitemap=await sitemapResponse.text();
const urls=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
assert.deepEqual(new Set(urls),new Set(paths.map(p=>origin+p)),'Sitemap must include every page');
let images=0;
for(const pathname of paths){
  const response=await fetch(base+pathname);assert.equal(response.status,200,pathname);
  const html=await response.text();
  const title=html.match(/<title>(.*?)<\/title>/)?.[1];assert(title&&!titles.has(title),`Missing or duplicate title: ${pathname}`);titles.add(title);
  assert.equal((html.match(/<h1(?:\s[^>]*)?>/g)||[]).length,1,`Expected one H1: ${pathname}`);
  const links=[...html.matchAll(/<link\b[^>]*>/g)].map(m=>m[0]);
  const canonical=links.find(t=>attr(t,'rel')==='canonical');assert.equal(new URL(attr(canonical||'','href')||'invalid',origin).href,new URL(origin+pathname).href,`Wrong canonical: ${pathname}`);
  assert(!links.some(t=>attr(t,'rel')==='stylesheet'),`Blocking CSS: ${pathname}`);
  const metas=[...html.matchAll(/<meta\b[^>]*>/g)].map(m=>m[0]);
  for(const name of ['description','og:title','og:description','og:url','og:image','twitter:card','twitter:image'])assert(metas.some(t=>(attr(t,'name')===name||attr(t,'property')===name)&&attr(t,'content')),`Missing ${name}: ${pathname}`);
  assert(!metas.some(t=>attr(t,'name')==='robots'&&attr(t,'content')?.includes('noindex')),`Published page noindex: ${pathname}`);
  const schemas=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];assert(schemas.length);schemas.forEach(m=>JSON.parse(m[1]));
  for(const [tag]of html.matchAll(/<img\b[^>]*>/g)){
    images++;assert(attr(tag,'alt')!==undefined);
    if(attr(tag,'src')?.includes('/_next/image?'))assert(attr(tag,'sizes')&&attr(tag,'srcset'),`Missing responsive image: ${pathname}`);
  }
}
for(const pathname of ['/seo-check-missing-page','/projects/seo-check-missing-project']){const r=await fetch(base+pathname);assert.equal(r.status,404);const html=await r.text();assert(html.includes('This page is not on the plan.')&&html.includes('noindex'));assert(!html.includes('rel="canonical"'));}
const robots=await(await fetch(`${base}/robots.txt`)).text();assert(robots.includes(`${origin}/sitemap.xml`));
assert.equal((await fetch(`${base}/social-preview.jpg`)).status,200);
console.log(`SEO checks passed: ${paths.length} pages, ${images} image instances, metadata, structured data, sitemap/robots and 404 statuses.`);
