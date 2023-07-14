import Head from 'next/head';
import clsx from 'clsx';
import withTransition from '../../HOC/withTransition';
import Navbar from '../../components/Navbar/Navbar.component';
import styles from './work.module.scss'

function Work() {
  return (
    <>
      <Head>
        <title>Work</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <h1>Portfolio</h1>
      <div className={clsx('img-wrapper')}>
        <div>
          <img src="your image" />
          <h1>image1</h1>
        </div>
        <div>
          <img src="your image" />
          <h1>image2</h1>
        </div>
      </div>
    </>
  );
}

export default withTransition(Work);
