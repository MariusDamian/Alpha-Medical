import React from "react";
import Menu from "./components/Navbar/Menu";
import Navbar from "./components/Navbar/Navbar";
import Partners from "./components/HomePage/Partners";

function Contact() {
  return (
    <div>
      <Menu />
      <Navbar />
      <div className='pt-40'>
        <Partners />
      </div>
    </div>
  );
}

export default Contact;
