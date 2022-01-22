import Head from 'next/head';
import withTransition from '../HOC/withTransition';
import Navbar from '../sections/Navbar/Navbar.component';
import Title from '../components/Title/Title.component';
import { animateScroll as scroll } from 'react-scroll';
import About from '../components/About/About.component';
import Work from '../components/Work/Work.component';
import Contact from '../components/Contact/Contact.component';

function Home() {
  // function scrollTop() {
  //   scroll.scrollToTop();
  // }

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
      <section>
        <About />
      </section>
      <section>
        <Contact />
        
      </section>
    </>
  );
}

export default withTransition(Home);
