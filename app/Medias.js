"use client"
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';

export default function Medias() { 
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.lordicon.com/lordicon.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className='flex flex-col sm:flex-row justify-center gap-6 mt-11 max-w-screen-xl mx-auto px-4'>
      {/* کارت اول */}
      <Link href="/social">
      <div
        className='w-full sm:w-52 cursor-pointer shadow-3xl flex flex-col p-6 rounded-3xl 
        bg-gradient-to-br from-[#FFDDE1] via-[#FF8F9B] to-[#21074b] 
        transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-4xl'
        >
        <div className='flex justify-center gap-4 text-white text-3xl mb-6'>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTelegram} />
          </div>

        <div className='text-white text-right' dir='rtl'>
          <p className='font-bold text-lg' style={{ fontFamily: "Shabnam" }}>سوشال مدیا</p>
          <p className='text-gray-200 text-sm' style={{ fontFamily: "Shabnam" }}>من را دنبال کنید</p>
        </div>
      </div>
        </Link>
      <Link href="/khadamat">
      {/* کارت دوم */}
      <div
        className='w-full sm:w-2/3 cursor-pointer shadow-3xl flex flex-col p-6 rounded-3xl 
        bg-gradient-to-br from-[#FFDDE1] via-[#FF8F9B] to-[#21074b] 
        transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-4xl'
        >
        <div className='flex gap-4 justify-center'>

          <lord-icon
              src="https://cdn.lordicon.com/wjogzler.json"
              trigger="hover"
              style={{width:'50px',height:'50px'}}>
          </lord-icon>
          <lord-icon
              src="https://cdn.lordicon.com/ymjswsps.json"
              trigger="hover"
              style={{width:'50px',height:'50px'}}>
          </lord-icon>
          <lord-icon
              src="https://cdn.lordicon.com/ogjpwrxe.json"
              trigger="hover"
              colors="primary:#121331,secondary:#1b1091"
              style={{width:'50px',height:'50px'}}>
          </lord-icon>
          <lord-icon
              src="https://cdn.lordicon.com/ijsqrapz.json"
              trigger="hover"
              colors="primary:#121331,secondary:#1b1091"
              style={{width:'50px',height:'50px'}}>
          </lord-icon>
        </div>

        <div className='flex text-right justify-end'>
          <p className='font-bold m-3'>خدمات من</p>
        </div>
      </div>
                </Link>
    </div>
  )
}
