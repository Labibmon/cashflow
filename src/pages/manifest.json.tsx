import { GetServerSideProps } from "next";

const Manifest = () => <></>;
export default Manifest;

export const getServerSideProps: GetServerSideProps =
  async (context: any) => {
  const data = {
    settings:{
      websiteTitle: 'Cashflow',
      // faviconURL: '/'
      // "icons": [
      //   {
      //     "src": ${data.settings.faviconURL},
      //     "sizes": "192x192",
      //     "type": "image/png"
      //   }
      // ],
    }
  };

  const body = `
    {
      "name": "${data?.settings?.websiteTitle}",
      "short_name": "${data?.settings?.websiteTitle}",
      "theme_color": "#FFFFFF",
      "background_color": "#FFFFFF",
      "start_url": "/",
      "display": "standalone",
      "orientation": "portrait"
    }
  `.trim();

  context.res.writeHead(200, {
    "Content-Length": Buffer.byteLength(body),
    "Content-Type": "application/json",
  });
  context.res.write(body);
  context.res.end();

  return { props: {} };
}