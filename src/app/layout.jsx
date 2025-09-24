import '@/styles/globals.css'
import { GeistSans } from 'geist/font/sans'
import Navbar from '@/components/ui/Navbar'
import Script from 'next/script'

export const metadata = {
  title: 'rusky.xyz',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  const isProd = process.env.NODE_ENV === 'production'

  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ fontFamily: GeistSans.style.fontFamily }} suppressHydrationWarning>
        <Navbar
          menuItems={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Portfolio', href: '/portfolio' },
            { label: 'Contact', href: '/contact' },
          ]}
        />
        {children}
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
