import Head from 'next/head';
import Image from 'next/image';

import Link from 'next/link';
import styles from './godzilla.module.scss';
import withTransition from '../../HOC/withTransition';
import Navbar from '../../components/Navbar/Navbar.component';

function About() {
  return (
    <>
      <Head>
        <title>Godzilla</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <section>
      <Image
      src="/img/header_image_godzilla.jpeg"
      width={500}
      height={500}
      alt="Godzilla header picture"
    />
      </section>
    </>
  );
}

export default withTransition(About);
