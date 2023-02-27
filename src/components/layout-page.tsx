import Head from 'next/head'
import { FC, ReactNode } from 'react';

type LayoutPropType = {
  children?: ReactNode
}

const Layout: FC<LayoutPropType> = ({
  children
}) => {

  return (
    <>
      <Head>
        <title>Cashflow Apps</title>
        {/* Link Tag */}
        <link rel="icon" href="/icon-192x192.png"  />
        <link rel="canonical" href="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Meta Tag */}
        <meta name="description" content="Cashflow Apps" />
        <meta name="robots" content="index, follow" />
        {/* <meta property="og:title" content={title} key="ogtitle" />
          <meta property="twitter:title" content={title} key="twittertitle" />

          <meta name="description" content={description} />
          <meta property="og:description" content={description} key="ogdescription" />
          <meta property="twitter:description" content={description} key="twitterdescription" />

          <meta property="og:image" content={image} key="ogimage" />
          <meta property="twitter:image" content={image} key="twitterimage" />
          <meta property="twitter:card" content="summary" />

          <meta property="og:url" content={url} key="ogurl" />
          <meta property="twitter:url" content={url} key="twitterurl" /> */}
      </Head>
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout

