// /components/CommonMeta/index.js

import Head from 'next/head'

export default function CommonMeta({ title = "GO VOTE JAPAN", description = "GO VOTE JAPAN", url = "", ogpURL = "" }) {

  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={url} />
      <meta property="og:url" content={ogpURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="shortcut icon" type="image/png" href="/favicon.png" />
    </Head>
  )
}

