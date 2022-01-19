import Head from 'next/head';
import React from 'react';
import withTransition from '../../HOC/withTransition';
import Navbar from '../../sections/Navbar/Navbar.component';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <h1>Contact</h1>
    </>
  );
}

export default withTransition(Contact);
