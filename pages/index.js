import Head from 'next/head';
import Button from '../components/Button/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" value="Ramon's Portfolio" />
      </Head>
      <section className='section'>
        <h1>Welcome</h1>
        <p>Hi, I&#39;m Ramon</p>
        <p>Front End Web Developer</p>
        <p>Passionate about developing apps.</p>
        <p>Building a more intuitive user experience on the web.</p>

        <Button title='Portfolio' link='/work'/>
        <Button title='Resume' link='/work'/>
      </section>
    </>
  );
}
