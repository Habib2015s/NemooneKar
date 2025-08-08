"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Menu  ()  {const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
          <img
      src="./pngg.png"
      alt="logo"
      className="transition-all duration-500 w-[100px] h-auto cursor-pointer"
      style={{
        transform: isHovered
          ? "matrix(1.2, 0.1, 0.1, 1.2, 0, 0)" // افکت بزرگ‌تر و کمی خمیده
          : "matrix(1, 0, 0, 1, 0, 0)", // حالت عادی
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
              <Link href="/nemone">
              <p className='hover:text-[#FF8F9B] cursor-pointer'>نمونه کارها</p>
              </Link>
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
                  transition-all duration-500 cursor-pointer
                  ${isScrolled ? 'text-sm' : 'text-base'}
                `}
              >
                به من پیام بده
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

