import React from "react";
import { ImLocation } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import GoogleMapReact from "google-map-react";

function Contact() {
     const coords = { lat: 44.468132007487974, lng: 26.0650626686858 };
     return (
          <div className="h-auto w-full flex items-center justify-center max-w-7xl mx-auto mb-24" id="contact">
               <div className="h-full mt-12 flex flex-col items-center justify-start rounded-3xl px-64 py-20">
                    <p className="mb-4 bg-black px-3 py-2 rounded-2xl text-sm">Contact form</p>
                    <p className="text-3xl">Our Contact Address Here.</p>
                    <div className="flex flex-row my-5 space-x-8 w-full">
                         <div className="w-1/3 h-48 px-10 p-6 rounded-2xl flex flex-col space-y-3 bg-black">
                              <AiFillPhone className="text-3xl text-blue-500" />
                              <p>Contact Phone Number</p>
                              <p className="text-sm">+40 21 323 14 23</p>
                         </div>
                         <div className="w-1/3 h-48 px-10 p-6 rounded-2xl flex flex-col space-y-3 bg-black">
                              <HiOutlineMail className="text-3xl text-blue-500" />
                              <p>Our Email Address</p>
                              <p className="text-sm">office@alphamedical.ro</p>
                         </div>
                         <div className="w-1/3 h-48 px-10 p-6 rounded-2xl flex flex-col space-y-3 bg-black">
                              <ImLocation className="text-3xl text-blue-500" />
                              <p>Our Location</p>
                              <p className="text-sm">Str. Sandu-Aldea Constantin nr.22, Sector 1, Bucureşti</p>
                         </div>
                    </div>
                    <div className="w-full flex flex-row space-x-8">
                         <div className="w-1/2 h-auto space-y-4">
                              <input type="text" className="bg-black w-full h-10 rounded-lg border border-gray-700 p-3" placeholder="Your Name" />
                              <input type="text" className="bg-black w-full h-10 rounded-lg border border-gray-700 p-3" placeholder="Email Address" />
                              <input type="text" className="bg-black w-full h-10 rounded-lg border border-gray-700 p-3" placeholder="Phone Number" />
                              <input type="text" className="bg-black w-full h-10 rounded-lg border border-gray-700 p-3" placeholder="Subject" />
                              <input type="text" className="bg-black w-full h-36 rounded-lg border border-gray-700 p-3" placeholder="Your Message" />
                         </div>
                         <div className="w-1/2 bg-gray-700 h-auto">
                              <GoogleMapReact defaultCenter={coords} defaultZoom={13} center={coords}>
                                   <p defaultCenter={coords} center={coords} defaultZoom={13} className="text-black">
                                        Alpha Medical
                                   </p>
                              </GoogleMapReact>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Contact;
