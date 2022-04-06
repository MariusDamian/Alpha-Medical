import React from "react";
import { ImLocation } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import GoogleMapReact from "google-map-react";

function Contact() {
  return (
    <div className='h-auto w-full flex items-center justify-center max-w-7xl mx-auto mb-24' id='contact'>
      <div className='h-full mt-12 flex flex-col items-center justify-start rounded-3xl px-64 py-20'>
        <p className='text-3xl'>Ne puteti contacta aici</p>
        <div className='flex flex-row my-5 space-x-8 w-full'>
          <div className='w-1/3 h-48 px-10 p-6 rounded-2xl flex flex-col space-y-3 bg-gray-900'>
            <AiFillPhone className='text-3xl text-blue-500' />
            <p>Numar telefon</p>
            <p className='text-sm'>+40 21 323 14 23</p>
          </div>
          <div className='w-1/3 h-48 px-10 p-6 rounded-2xl flex flex-col space-y-3 bg-gray-900'>
            <HiOutlineMail className='text-3xl text-blue-500' />
            <p>Adresa email</p>
            <p className='text-sm'>office@alphamedical.ro</p>
          </div>
          <div className='w-1/3 h-48 px-10 p-6 rounded-2xl flex flex-col space-y-3 bg-gray-900'>
            <ImLocation className='text-3xl text-blue-500' />
            <p>Locatie</p>
            <p className='text-sm'>Str. Sandu-Aldea Constantin nr.22, Sector 1, Bucureşti</p>
          </div>
        </div>
        <div className='w-full flex flex-row space-x-8'>
          <div className='w-1/2 h-auto space-y-4'>
            <input type='text' className='bg-black w-full h-10 rounded-lg border border-gray-700 p-3' placeholder='Nume si Prenume' />
            <input type='text' className='bg-black w-full h-10 rounded-lg border border-gray-700 p-3' placeholder='Adresa email' />
            <input type='text' className='bg-black w-full h-10 rounded-lg border border-gray-700 p-3' placeholder='Numar telefon' />
            <input type='text' className='bg-black w-full h-10 rounded-lg border border-gray-700 p-3' placeholder='Subiect' />
            <input type='text' className='bg-black w-full h-36 rounded-lg border border-gray-700 p-3' placeholder='Mesajul dumneavoastra' />
          </div>
          <div className='w-1/2 bg-gray-700 h-auto'>
            {/* <GoogleMapReact defaultCenter={coords} defaultZoom={13} center={coords}>
                                   <p defaultCenter={coords} center={coords} defaultZoom={13} className="text-black">
                                        Alpha Medical
                                   </p>
                              </GoogleMapReact> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
