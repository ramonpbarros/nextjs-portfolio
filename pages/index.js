import Head from 'next/head';
import Navbar from '../sections/Navbar/Navbar.component';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <Navbar />
      <section>
        <h1>Welcome</h1>
      </section>
    </div>
  );
}
