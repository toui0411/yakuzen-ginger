// /components/CommonMeta/index.js

import Head from 'next/head'

export default function CommonMeta({ title = "薬膳ジンジャー", description = "体も心もポカポカに。薬膳ジンジャーできました。", url = "https://yakuzen-ginger.jp", ogpURL = "https://yakuzen-ginger.jp/img/OGP.png" }) {
  
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogpURL} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
    </Head>
  )
}
