import React from "react";
import Head from "next/head";
import Navbar from "./components/Navbar/Navbar";

function Custom404() {
  return (
    <>
      <Head>
        <title>Alpha Medical | Aparatura si echipamente medicale</title>
        <meta name='description' content='Aparatura si echipamente medicale' />
      </Head>
      <Navbar />
      <div className="h-screen flex items-center justify-center bg-[url('/images/404.png')] bg-cover"></div>
    </>
  );
}

export default Custom404;
