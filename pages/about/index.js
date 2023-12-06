import Head from 'next/head';
import Image from 'next/image';

import Link from 'next/link';
import styles from './about.module.scss';
import withTransition from '../../HOC/withTransition';
import Navbar from '../../components/Navbar/Navbar.component';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <section className="container">
        <h1 className="title center">About Me</h1>
        <div className="left mt-2">
          <Image
            src="/images/ramon.png"
            alt="Ramon"
            width="400rem"
            height="400rem"
            className="profile-img"
          />
        </div>
        <p className="mt-4">
          I&#39;ve been Originally from Brazil &#127463;&#127479;, I've called San Diego,
          California home for the past 12 years. Throughout this time, I`ve
          immersed myself in mobile development while simultaneously steering my
          own entrepreneurial ventures. Over five years, I honed my skills in
          the restaurant industry, leveraging technical tools to drive sales.
          <br/>
          <br/>
          In
          2020, I completed the Full Stack Web Development certificate program
          at the University of California San Diego, refining both my front-end
          and back-end development expertise. This journey equipped me to
          undertake diverse projects, either solo or collaboratively, aiming
          always to craft user experiences that captivate and resonate with
          audiences.
          <br/>
          <br/>
          Adding to this journey, I'm currently enrolled in the App
          Academy Software Development Program. App Academy stands out for its
          immersive and comprehensive curriculum in software development,
          emphasizing hands-on learning and collaborative problem-solving. This
          program aligns seamlessly with my pursuit of creating impactful
          applications that engage users effectively.
        </p>
        <p>
          Interested on getting to know me better?{' '}
          <Link href="/contact" className="test">
            Let&#39;s talk
          </Link>{' '}
        </p>
      </section>
    </>
  );
}

export default withTransition(About);
