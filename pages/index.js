import Head from "next/head";
import AboutSection from "./components/HomePage/AboutSection";
import Hero from "./components/HomePage/Hero";
import Partners from "./components/HomePage/Partners";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Navbar/Menu";
import Products from "./components/HomePage/Products";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alpha Medical | Aparatura si echipamente medicale</title>
        <meta name='description' content='Aparatura si echipamente medicale' />
      </Head>
      <Menu />
      <Navbar />
      <Hero />
      <AboutSection />
      <Products />
      <Partners />
      <Footer />
    </div>
  );
}
