# SEO and deployment

The primary domain is **https://www.fazab.com.ng**, with Cloudflare in front of the existing Next.js/Vercel deployment. Keep business contact email addresses as supplied in `src/data/contact.json`; the web domain change does not change email ownership.

Use `npm ci`, `npm run build` and `npm run lint`. For integration checks, start the production build with `npm start -- --port 4175 --hostname 127.0.0.1`, then run `npm run check:seo`. Set `SEO_BASE_URL` to test another preview or the deployed site. The sitemap is built from all five static pages and current CMS project records; no artificial per-build last-modified dates are published.

The site now supplies page-specific titles, descriptions, canonicals, Open Graph and Twitter tags; Organization/WebSite data; project CreativeWork/breadcrumb data; a branded noindex 404; and sitemap/robots routes. `npm run build` generates the 1200×630 sharing JPEG from a real existing project photograph. Illustrative studies retain their existing labels and are not represented as client project evidence.

Next.js Image Optimization remains enabled, with responsive sizes, WebP output and a one-day minimum image cache time. The study cards request sizes appropriate to their columns. The desktop hero image now starts in the first grid row, fixing its collapsed frame. Entrance motion keeps copy readable from first paint. Logo and route prefetch requests are reduced.

`experimental.inlineCss` removes the initial blocking stylesheet request but increases HTML size and sacrifices separate stylesheet caching. Fonts remain self-hosted with swap behavior. No new image hosting/CDN account is needed.

Analytics uses FAZAB's GA4 measurement ID `G-2IV46W8LHY`, supplied by the owner in the layout update. Override it with `NEXT_PUBLIC_GA_MEASUREMENT_ID` if the property changes. A single shared component supplies the tag to prevent duplicate configuration. The tag loads after interactivity. Enable GA4 Enhanced Measurement for page loads and browser-history changes and verify Realtime after deployment. `GOOGLE_SITE_VERIFICATION` is optional if an HTML ownership tag is needed; preserve existing DNS or other verification.

The 27 October 2026 dependency audit reported zero vulnerabilities after updating Next.js, the matching ESLint configuration, Sharp, PostCSS and compatible indirect packages. Recheck with `npm audit` before future releases.

After publishing, verify **https://www.fazab.com.ng/sitemap.xml** returns XML with seven current page URLs and robots.txt references it. Cloudflare may prepend managed crawler rules; preserve those settings and verify the final response still includes the sitemap. If stale cached responses persist, purge the affected URL through the existing Cloudflare account. Check custom 404 statuses, social metadata and optimized image responses, then submit the sitemap in Search Console. Collection, indexing and field performance must be verified after publishing.
