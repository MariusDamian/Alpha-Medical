import React from "react";
import Menu from "./components/Navbar/Menu";
import Navbar from "./components/Navbar/Navbar";
import { MdLocationPin } from "react-icons/md";
import { BsEnvelope, BsTelephone } from "react-icons/bs";

function Contact() {
  return (
    <div>
      <Menu />
      <Navbar />
      <div className='bg-alpha-bg pb-20'>
        <div className='h-full pt-36 flex flex-col max-w-[1440px] mx-auto'>
          <h1 className='mt-10 mb-20 text-4xl'>Produsele noastre</h1>
          <div className='flex flex-row items-center justify-center w-full'>
            <div className='h-[450px] bg-[#E3E3E3] w-full py-10 px-5'>
              <form action='' className=''>
                <label htmlFor='name'>
                  Nume si Prenume<em className='text-red-500'>*</em>
                </label>
                <input type='text' className='w-full h-10 mb-3 focus:outline-gray-400 px-2' />
                <label htmlFor='email'>
                  Email<em className='text-red-500'>*</em>
                </label>
                <input type='text' className='w-full h-10 mb-3 focus:outline-gray-400 px-2' />
                <label htmlFor='message'>
                  Mesaj<em className='text-red-500'>*</em>
                </label>
                <textarea type='text' className='w-full h-32 min-h-[128px] mb-5 focus:outline-gray-400 p-2' />
                <button className='bg-alpha-green w-full h-10 text-white'>Trimite</button>
              </form>
            </div>
            <div className='w-[1100px]'>
              {" "}
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.304637529315!2d26.062718515555794!3d44.46792800738279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b20223548f5fa9%3A0xd06b47e956eba9e7!2sStrada%20Constantin%20Sandu-Aldea%2022%2C%20Bucure%C8%99ti%20012244!5e0!3m2!1sen!2sro!4v1651868451083!5m2!1sen!2sro'
                width='1100'
                height='450'
                allowFullScreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
          <div className='flex flex-row h-[300px] mt-2 space-x-2'>
            <div className='w-[340px] bg-[#E3E3E3] flex flex-col items-start justify-start pt-24 px-4 text-left pl-14 relative'>
              <div className='flex flex-row text-4xl font-semibold w-full mb-4 text-left items-center'>
                <MdLocationPin className='absolute left-0 ml-2 text-3xl' />
                <h1>Locatie</h1>
              </div>
              <h1 className='font-semibold'>Romania</h1>
              <p>Str. Sandu-Aldea Constantin nr.22, Sector 1, Bucureşti Romania</p>
            </div>
            <div className='w-[350px] bg-[#E3E3E3] flex flex-col items-start justify-start pt-24 px-4 text-left pl-14 relative'>
              <div className='flex flex-row text-4xl font-semibold w-full mb-4 text-left items-center'>
                <BsEnvelope className='absolute left-0 ml-2 text-3xl' />
                <h1>Email</h1>
              </div>
              <p>office@alphamedical.ro</p>
            </div>
            <div className='w-[350px] bg-[#E3E3E3] flex flex-col items-start justify-start pt-24 px-4 text-left pl-14 relative'>
              <div className='flex flex-row text-4xl font-semibold w-full mb-4 text-left items-center'>
                <BsTelephone className='absolute left-0 ml-2 text-3xl' />
                <h1>Phone</h1>
              </div>
              <p>+ 40 21 323 14 23</p>
            </div>
            <div className='w-[400px] bg-[#E3E3E3]'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
