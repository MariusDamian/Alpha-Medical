import React from "react";
import Menu from "./components/Navbar/Menu";
import Navbar from "./components/Navbar/Navbar";
import Partners from "./components/HomePage/Partners";
import Footer from "./components/Footer/Footer";

function Contact() {
  return (
    <div>
      <Menu />
      <Navbar />
      <div className='pt-40 dark:bg-alpha-bg-dark'>
        <Partners />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
