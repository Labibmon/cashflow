import { MetaSeo, SeoMetaSource } from '@/config/seo';
import Head from 'next/head'
import { FC, ReactNode } from 'react';

type LayoutPropType = {
  title?: string,
  lang?: string,
  description?: string,
  author?: string,
  meta?: ConcatArray<MetaSeo>,
  children?: ReactNode
}

const Layout: FC<LayoutPropType> = ({
  description,
  author,
  meta,
  title,
  children
}) => {

  const metaData = SeoMetaSource({
    description,
    author,
    meta: meta || [],
    title,
  })

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="manifest" href="/manifest.json" />

        {metaData.map(({ name, content, property }, i) => (
          <meta key={i} name={name} content={content} property={property} />
        ))}

      </Head>
      <main>
        {children}
      </main>
    </>
  )
}

Layout.defaultProps = {
  lang: `en`,
  description: `Cashflow Application`,
  author: 'Karya Labib',
  title : 'Cashflow',
  meta: [
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }
  ],
};

export default Layout

