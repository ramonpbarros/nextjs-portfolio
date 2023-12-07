import Head from 'next/head';
import clsx from 'clsx';
import withTransition from '../../HOC/withTransition';
import Navbar from '../../components/Navbar/Navbar.component';
import Timeline from '../../components/Timeline/Timeline.component';
import styles from './work.module.scss';
import Image from 'next/image';

function Work() {
  return (
    <>
      <Head>
        <title>Work</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <Timeline />
      <div className={clsx('img-wrapper')}>
        {/* <Image src="/img/barhop.png" width={800} height={500} alt="Barhop" />
        <Image
          className={clsx('img')}
          src="/img/rendezLogo.png"
          width={800}
          height={500}
          alt="Barhop"
        /> */}
      </div>
    </>
  );
}

export default withTransition(Work);
