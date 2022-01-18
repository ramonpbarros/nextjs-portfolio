import Head from 'next/head';
import Button from '../components/Button/Button';
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" value="Ramon's Portfolio" />
      </Head>
      <section className="section center">
        <p className="title">Hi, I&#39;m Ramon</p>
        <h1>Front End Web Developer</h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('Passionate about developing apps.')
              .pauseFor(2500)
              .deleteAll()              
              .start()
              .typeString('Building a more intuitive user experience on the web.')
          }}
        />
        <Button title="Portfolio" link="/work" />
        <Button title="Resume" link="/work" />
      </section>
    </>
  );
}
