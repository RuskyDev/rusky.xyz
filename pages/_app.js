import '@/styles/globals.css';
import { GeistSans } from 'geist/font/sans';
import Head from 'next/head';
import { ProjectsProvider } from '@/context/ProjectsContext';
import Navbar from '@/components/ui/Navbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>rusky.xyz</title>
        <link rel="icon" href="favicon.ico" />
        <meta name="theme-color" content="#09233B" />
      </Head>
      <ProjectsProvider>
        <main style={{ fontFamily: GeistSans.style.fontFamily }}>
          <Navbar
            menuItems={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Projects", href: "/projects" },
              { label: "Contact", href: "/contact" },
            ]}
          />
          <Component {...pageProps} />
        </main>
      </ProjectsProvider>
    </>
  );
}
