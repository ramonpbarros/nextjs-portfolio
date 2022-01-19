import Head from 'next/head';
import Button from '../components/Button/Button';
import Typewriter from 'typewriter-effect';
import { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  // useEffect(() => {
  //   const el = document.querySelector('body');

  //   el.addEventListener('mousemove', (e) => {
  //     el.style.backgroundPositionX = -e.offsetX + 'px';
  //     el.style.backgroundPositionY = -e.offsetY + 'px';
  //   });
  // }, []);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" value="Ramon's Portfolio" />
      </Head>
      <div className="module" id="module"></div>
      
      <section className="section">
        {/* <p className="title">Hi, I&#39;m Ramon</p>
        <h1>Front End Web Developer</h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('Passionate about developing apps.')
              .pauseFor(2500)
              .deleteAll()
              .start()
              .typeString(
                'Building a more intuitive user experience on the web.'
              );
          }}
        />
        <Button title="Portfolio" link="/work" />
        <Button title="Resume" link="/work" /> */}
      </section>
    </>
  );
}
