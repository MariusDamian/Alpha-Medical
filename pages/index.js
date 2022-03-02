import Head from 'next/head';
import Image from 'next/image';
import AboutSection from './components/HomePage/AboutSection';
import CategoriesSection from './components/HomePage/CategoriesSection';
import Contact from './components/HomePage/Contact';
import Hero from './components/HomePage/Hero';
import Partners from './components/HomePage/Partners';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alpha Medical | Aparatura si echipamente medicale</title>
        <meta name='description' content='Aparatura si echipamente medicale' />
      </Head>
      <Navbar />
      <Hero />
      <AboutSection />
      <CategoriesSection />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}
