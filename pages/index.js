import Head from 'next/head';
import withTransition from '../HOC/withTransition';
import Navbar from '../components/Navbar/Navbar.component';
import Title from '../components/Title/Title.component';
import Work from '../components/Work/Work.component';

function Home() {

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" value="Ramon's Portfolio" />
      </Head>
      <header>
        <Navbar />
      </header>
      <section>
        <Title />
      </section>
      <section>
        <Work />
      </section>
    </>
  );
}

export default withTransition(Home);
