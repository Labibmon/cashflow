import { FC, ReactNode, useContext } from 'react';
import Head from 'next/head'
import { SeoMetaSource } from '@/config/seo';
import LayoutStyle from '@/components/layout-style';
import { ThemeContext } from '@/config';

const Layout: FC<{
  children?: ReactNode
}> = ({
  children
}) => {
  const { data } = useContext(ThemeContext);

  const metaData = SeoMetaSource({
    description: data.description,
    author: data.author,
    meta: data.meta || [],
    title: data.title,
  })

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <link rel="manifest" href="/manifest.json" />

        {metaData.map(({ name, content, property }, i) => (
          <meta key={i} name={name} content={content} property={property} />
        ))}

      </Head>
      <LayoutStyle>
        {children}
      </LayoutStyle>
    </>

  )
}

export default Layout

