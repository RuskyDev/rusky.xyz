import '@/styles/globals.css'
import { GeistSans } from 'geist/font/sans'
import Navbar from '@/components/ui/Navbar'
import Script from 'next/script'

export const metadata = {
  metadataBase: new URL('https://www.rusky.xyz'),
  title: 'Rusky',
  description: 'I build code that works for web, mobile, desktop, and beyond.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'Rusky',
    description: 'I build code that works for web, mobile, desktop, and beyond.',
    url: 'https://www.rusky.xyz',
    siteName: 'rusky.xyz',
    images: [
      {
        url: 'https://www.rusky.xyz/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rusky',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rusky',
    description: 'I build code that works for web, mobile, desktop, and beyond.',
    images: ['https://www.rusky.xyz/og-image.png'],
  },
}

export default function RootLayout({ children }) {
  const isProd = process.env.NODE_ENV === 'production'

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://www.rusky.xyz/" />
        <link
          rel="preload"
          href="/fonts/BukhariScript.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body style={{ fontFamily: GeistSans.style.fontFamily }} suppressHydrationWarning>
        <header>
          <Navbar
            menuItems={[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Portfolio', href: '/portfolio' },
              { label: 'Contact', href: '/contact' },
            ]}
          />
        </header>
        <main>{children}</main>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Rusky",
            "url": "https://www.rusky.xyz",
            "sameAs": [
              "https://twitter.com/ruskydev",
              "https://github.com/ruskydev",
              "https://instagram.com/ruskydev",
              "https://discord.com/users/969507085316399154"
            ],
            "jobTitle": "Full Stack Developer",
            "worksFor": { "@type": "Organization", "name": "Freelance" }
          })}
        </script>

        {isProd && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-45DP7S7L04"
              strategy="afterInteractive"
              async
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-45DP7S7L04');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
