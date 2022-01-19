import '../styles/globals.scss';
import '../styles/utilities.scss';
import '../styles/typography.css';
import '../styles/reset.css';
import Navbar from '../sections/Navbar/Navbar.component';
import { AnimatePresence, motion } from 'framer-motion';

import Head from 'next/head';

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial='pageInitial'
        animate='pageAnimate'
        variants={{
          pageInitial: {
            opacity: 0
          },
          pageAnimate: {
            opacity: 1
          },
        }}
      >
        <Head>
          <link rel="icon" href="/favicon.ico"></link>
        </Head>
        <header>
          <Navbar />
        </header>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
