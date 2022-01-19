import Head from 'next/head';
import withTransition from '../../HOC/withTransition';
import Navbar from '../../sections/Navbar/Navbar.component';

function Work() {
  return (
    <>
      <Head>
        <title>Work</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <h1>Work 1234</h1>
    </>
  );
}

export default withTransition(Work);
