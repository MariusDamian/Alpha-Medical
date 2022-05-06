import React from "react";
import Menu from "./components/Navbar/Menu";
import Navbar from "./components/Navbar/Navbar";

function Contact() {
  return (
    <div>
      <Menu />
      <Navbar />
      <div className='bg-alpha-bg pb-20'>
        <div className='h-full pt-36 flex flex-row max-w-[1440px] mx-auto'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.304637529315!2d26.062718515555794!3d44.46792800738279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b20223548f5fa9%3A0xd06b47e956eba9e7!2sStrada%20Constantin%20Sandu-Aldea%2022%2C%20Bucure%C8%99ti%20012244!5e0!3m2!1sen!2sro!4v1651868451083!5m2!1sen!2sro'
            width='1000'
            height='450'
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
