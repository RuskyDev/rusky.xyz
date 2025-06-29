import '@/styles/globals.css';
import { GeistSans } from 'geist/font/sans';
import Head from 'next/head';
import { ProjectsProvider } from '@/context/ProjectsContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>rusky.xyz</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <ProjectsProvider>
        <main style={{ fontFamily: GeistSans.style.fontFamily }}>
          <Component {...pageProps} />
        </main>
      </ProjectsProvider>
    </>
  );
}
