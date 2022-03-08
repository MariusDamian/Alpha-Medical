import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import partners from "../components/JSON/partners.json";

// Partners list

function Parteneri() {
  return (
    <>
      <Head>
        <title>Parteneri | Alpha Medical</title>
        <meta name='description' content='Aparatura si echipamente medicale' />
      </Head>
      <Navbar />
      <div className='min-h-screen flex flex-col items-start max-w-7xl mx-auto justify-start pt-40'>
        <h1>Parteneri Alpha Medical</h1>
        <div className='font-medium space-y-1'>
          {partners.map((partner) => (
            <Link href={`/parteneri/${partner.partnerName.replace(/ /g, "-").toLowerCase()}`}>
              <p>{partner.partnerName}</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Parteneri;
