import Head from 'next/head';
import Button from '../components/Button/Button';
import Typewriter from 'typewriter-effect';
import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import withTransition from '../HOC/withTransition';
import Navbar from '../sections/Navbar/Navbar.component';
import Btntest from '../components/btntest/btntest';
import Title from '../components/Title/Title.component';

function Home() {
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
      <header>
        <Navbar />
      </header>
      <section>
        <Title />
      </section>
      {/* <div className="module" id="module"></div> */}

      {/* <section className="section center centered">
        <motion.div
          initial="hidden"
          animate="visible"
          whileHover={{
            scale: [1, 1.4, 1.2],
            rotate: [0, 10, -10, 0]
          }}
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4
              }
            }
          }}
        >
          <p className="title">Hi, I&#39;m Ramon</p>
          <h1>Front End Web Developer</h1>
        </motion.div>
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
        <Button title="Resume" link="/work" />
        <Btntest />
      </section> */}
    </>
  );
}

export default withTransition(Home);
