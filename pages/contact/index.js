import Head from 'next/head';
import React from 'react';
import withTransition from '../../HOC/withTransition';
import Navbar from '../../components/Navbar/Navbar.component';
import Form from '../../components/Form/Form.component';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <header>
        <Navbar />
      </header>
        <Form />
    </>
  );
}

export default withTransition(Contact);
