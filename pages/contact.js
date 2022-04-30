import React from "react";
import Menu from "./components/Navbar/Menu";
import Navbar from "./components/Navbar/Navbar";

function Contact() {
  return (
    <div>
      <Menu />
      <Navbar />
      <div className='bg-alpha-bg pb-20'>
        <div className='h-full pt-36 flex flex-row max-w-[1440px] mx-auto'>Contact</div>;
      </div>
    </div>
  );
}

export default Contact;
