import { Helmet } from 'react-helmet'

const SEO = ({ 
  title = 'Abhishek Goyal - Full Stack Developer | Web3 & MERN Stack',
  description = 'Abhishek Goyal is a Full Stack Developer specializing in Web3, React, Node.js, and MongoDB. Winner of multiple hackathons with 2+ years of experience building innovative web applications.',
  keywords = 'Abhishek Goyal, Full Stack Developer, Web3 Developer, React Developer, Node.js, MERN Stack, Blockchain Developer, Software Engineer',
  image = 'https://abhishekgoyal1.vercel.app/assets/og-image.jpg',
  url = 'https://abhishekgoyal1.vercel.app'
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta name='author' content='Abhishek Goyal' />
      <meta name='robots' content='index, follow' />
      <meta name='language' content='English' />
      <meta name='revisit-after' content='7 days' />

      {/* Open Graph / Facebook */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:site_name' content='Abhishek Goyal Portfolio' />

      {/* Twitter */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={url} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={image} />
      <meta name='twitter:creator' content='@abhishekgoyal' />

      {/* Additional Tags */}
      <link rel='canonical' href={url} />
      <meta name='theme-color' content='#33c2cc' />
    </Helmet>
  )
}

export default SEO
