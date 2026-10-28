export function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-2IV46W8LHY";
  if (!id || !/^G-[A-Z0-9]+$/.test(id)) return null;
  return <>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
    <script id="ga-config" dangerouslySetInnerHTML={{ __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${id}');
    ` }} />
  </>;
}
