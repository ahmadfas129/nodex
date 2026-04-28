import Head from 'next/head'
import logo from '../logo.jpeg'

export default function Meta({ title, description }){
  const siteTitle = title || 'NodeX'
  const siteDescription = description || 'NodeX — Connect. Compute. Conquer.'
  const ogImage = (logo && logo.src) ? logo.src : '/logo.jpeg'
  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />

      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  )
}
