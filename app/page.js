"use client";
import { useEffect } from 'react';
import HoverIcon from './HoverIcon'; // اطمینان از مسیر درست
import MainBox from './MainBox';
import Medias from './Medias';
import Text from './Text';

export default function Page() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.lordicon.com/lordicon.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>

    <div className="fixed top-0 left-0 right-0 z-50  
                w-full mx-auto py-6 flex items-center justify-between 
                bg-black/50 backdrop-blur-md backdrop-saturate-150 
                rounded-xl px-25 shadow-lg text-white">
      
      {/* دکمه سمت چپ */}
      <div className="flex items-center gap-4">
        <div className="bg-[#FF8F9B] rounded-3xl h-[50px] flex items-center px-6">
          <button
            style={{ fontFamily: "Shabnam" }}
            className="font-bold text-[#2B2D42] text-center"
            >
            به من پیام بده
          </button>
        </div>
      </div>

      <div
        style={{ fontFamily: "Shabnam" }}
        className="flex gap-10 items-center text-lg "
        >
        <p className='hover:text-[#FF8F9B] cursor-pointer'>درباره من</p>
        <p className='hover:text-[#FF8F9B] cursor-pointer'>نمونه کارها</p>
        <p className='hover:text-[#FF8F9B] cursor-pointer'>صفحه اصلی</p>
      </div>

      {/* آیکون سمت راست */}
      <div className="flex items-center ">
        <HoverIcon
          src="https://cdn.lordicon.com/zfemvkpr.json"
          baseColors="primary:#6366f1,secondary:#fbbf24"
          hoverColors="primary:#FF8F9B,secondary:#FF8F9B"
          size={100}
          />
      </div>
          </div>
          <div className='pt-32'>

      <MainBox/>
      <Text/>
          </div>
    </div>
  );
}
