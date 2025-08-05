'use client';

import { useEffect, useState } from 'react';
import HoverIcon from './HoverIcon';
import Link from 'next/link';
import MainBox from './MainBox';
import Text from './Text';
import FooterMenu from './FooterMenu';
export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <div
        className={`
          fixed top-0 left-0 right-0 z-50 w-full
          bg-black/50 backdrop-blur-md backdrop-saturate-150 rounded-xl shadow-lg text-white
          transition-all duration-500 ease-in-out
          ${isScrolled ? 'py-2' : 'py-6'}
        `}
      >
        <div className="max-w-screen-xl mx-auto px-4">
          <div className={`
            flex items-center transition-all duration-500 ease-in-out flex-wrap
            ${isScrolled ? 'justify-center gap-4' : 'justify-between gap-10'}
          `}>
            {/* آیکن سمت راست - فقط در دسکتاپ */}
            <div className={`
              transition-all duration-500 hidden md:block
              ${isScrolled ? 'scale-75' : 'scale-100'}
            `}>
              <HoverIcon
                src="https://cdn.lordicon.com/zfemvkpr.json"
                baseColors="primary:#6366f1,secondary:#fbbf24"
                hoverColors="primary:#FF8F9B,secondary:#FF8F9B"
                size={isScrolled ? 60 : 100}
              />
            </div>

            {/* منوی وسط */}
            <div
              style={{ fontFamily: "Shabnam" }}
              className={`
                flex items-center flex-wrap text-center
                transition-all duration-500 ease-in-out
                ${isScrolled ? 'gap-3 text-sm' : 'gap-8 text-base'}
              `}
            >
              <p className='hover:text-[#FF8F9B] cursor-pointer'>درباره من</p>
              <p className='hover:text-[#FF8F9B] cursor-pointer'>نمونه کارها</p>
              <Link href="/home">
                <p className='hover:text-[#FF8F9B] cursor-pointer'>صفحه اصلی</p>
              </Link>
            </div>

            {/* دکمه سمت چپ */}
            <div className={`
              bg-[#FF8F9B] rounded-3xl cursor-pointer transform transition-all duration-500
              flex items-center justify-center mt-2 md:mt-0
              ${isScrolled ? 'h-[40px] px-4 scale-90' : 'h-[50px] px-6 scale-100'}
            `}>
              <button
                style={{ fontFamily: "Shabnam" }}
                className={`
                  font-bold text-[#2B2D42] text-center
                  transition-all duration-500
                  ${isScrolled ? 'text-sm' : 'text-base'}
                `}
              >
                به من پیام بده
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* بقیه صفحه */}
      <div className="pt-32">
        <MainBox />
        <Text />
        <FooterMenu />
      </div>
    </div>
  );
}
