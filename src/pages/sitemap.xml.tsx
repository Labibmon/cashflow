import { globby } from 'globby';
import { GetServerSideProps } from 'next';

const Sitemap = () => <></>

export default Sitemap

export const getServerSideProps: GetServerSideProps =
  async (context: any) => {
    let pages = await globby([
      'src/pages/*.tsx',
      '!src/pages/[*.tsx',
      '!src/pages/_app.tsx',
      '!src/pages/_document.tsx',
      '!src/pages/manifest.json.tsx',
      '!src/pages/sitemap.xml.tsx',
    ]);

    const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
        .map((page) => {
          const path = page
            .replace("pages", "")
            .replace("src/", "")
            .replace(".tsx", "")
            .replace(".json", "")
            .replace(".xml", "")
            .replace(".mdx", "")
            .replace("/index", "");
          const route = path === "/index" ? "" : path;

          return `
          <url>
            <loc>${`https://${context.req.headers.host}/${route}`}</loc>
          </url>
        `.replace(",", "")
        })
        .join("")}
    </urlset>
    `.trim()

    context.res.writeHead(200, {
      "Content-Length": Buffer.byteLength(sitemap),
      "Content-Type": "application/xml",
    });
    context.res.write(sitemap)
    context.res.end()

    return { props: {} };
  }