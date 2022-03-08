import React from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Head from "next/head";
import { useRouter } from "next/router";
import partners from "../../components/JSON/partners.json";

// Partner page

function Partner() {
  const router = useRouter();
  const { partener } = router.query;
  let currentPartner = partners.filter((current) => current?.partnerName?.replace(/ /g, "-").toLocaleLowerCase() === partener);

  return (
    <>
      <Head>
        <title>Parteneri | Alpha Medical</title>
        <meta name='description' content='Aparatura si echipamente medicale' />
      </Head>
      <Navbar />
      <div className='min-h-screen flex flex-col items-start max-w-7xl mx-auto justify-start pt-40'>
        <Link href={"/parteneri"}>
          <h1 className='mb-10'>Parteneri Alpha Medical</h1>
        </Link>
        <p>{currentPartner[0]?.partnerName}</p>
        <img src={`/images/partnerLogo/${currentPartner[0]?.partnerName}.svg`} className='bg-white p-10' alt='' />
      </div>
      <Footer />
    </>
  );
}

export default Partner;
