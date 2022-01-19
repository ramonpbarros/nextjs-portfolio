import Head from 'next/head';
import Image from 'next/image';

import Link from 'next/link';
import styles from './about.module.scss'


export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
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
        <p className='mt-4'>
          Born and raised in Brazil &#127463;&#127479;<br/>I&#39;ve been living in San Diego, California for the past 15 years and during
          this time I had some experience working with mobile development, but
          mostly working on my own business. I was in the restaurant business
          for 5 years, always applying technical tools in order to increase
          sales. I earned a certificate in Full Stack Web Development from the
          University of California San Diego, with newly developed skills. With
          a focus on front-end and back-end web development, I was able to test
          my skills building different projects either by myself or in groups.
          With each project, my goal is to best engage my audience for an
          impactful user-experience.
        </p>
        <p>Interested on getting to know me better? <Link href='/contact'>Let&#39;s talk</Link> </p>
      </section>
    </>
  );
}
