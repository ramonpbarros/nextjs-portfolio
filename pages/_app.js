import '../styles/globals.scss';
import '../styles/utilities.scss';
import '../styles/typography.css';
import '../styles/reset.css';
import Head from 'next/head';
import Navbar from '../sections/Navbar/Navbar.component'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <header>
        <Navbar />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
