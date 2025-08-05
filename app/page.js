"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import FooterMenu from "./FooterMenu";
import HoverIcon from "./HoverIcon";
import MainBox from "./MainBox";
import Text from "./Text";

export default function Page() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div
        className={`
          fixed top-0 left-0 right-0 z-50  
          w-full mx-auto py-4 md:py-6 
          flex flex-col md:flex-row 
          items-center md:items-center 
          justify-between
          bg-black/50 backdrop-blur-md backdrop-saturate-150 
          rounded-xl px-4 md:px-20 shadow-lg text-white gap-4 md:gap-0
          transition-all duration-500 ease-in-out
        `}
      >
        {/* دکمه سمت چپ */}
        <div
          className={`
            order-2 md:order-1 bg-[#FF8F9B] transform transition-all duration-500 ease-in-out 
            hover:scale-105 hover:shadow-4xl cursor-pointer rounded-3xl h-[50px] flex items-center px-6
            ${scrolled ? "opacity-0 -translate-x-10 pointer-events-none" : "opacity-100 translate-x-0"}
          `}
        >
          <button
            style={{ fontFamily: "Shabnam" }}
            className="font-bold text-[#2B2D42] text-center cursor-pointer"
          >
            به من پیام بده
          </button>
        </div>

        {/* منو وسط */}
        <div
          style={{ fontFamily: "Shabnam" }}
          className="order-1 md:order-2 flex flex-col md:flex-row gap-4 md:gap-10 items-center text-lg text-center transition-all duration-500"
        >
          <p className="hover:text-[#FF8F9B] cursor-pointer">درباره من</p>
          <p className="hover:text-[#FF8F9B] cursor-pointer">نمونه کارها</p>
          <Link href="/home">
            <p className="hover:text-[#FF8F9B] cursor-pointer">صفحه اصلی</p>
          </Link>
        </div>

        {/* آیکون سمت راست */}
        <div
          className={`
            order-3 flex items-center mt-2 md:mt-0 md:order-3 transition-all duration-500 ease-in-out
            ${scrolled ? "opacity-0 translate-x-10 pointer-events-none" : "opacity-100 translate-x-0"}
          `}
        >
          <HoverIcon
            src="https://cdn.lordicon.com/zfemvkpr.json"
            baseColors="primary:#6366f1,secondary:#fbbf24"
            hoverColors="primary:#FF8F9B,secondary:#FF8F9B"
            size={60}
          />
        </div>
      </div>

      {/* محتوا */}
      <div className="pt-20 md:pt-32">
        <MainBox />
        <Text />
        <FooterMenu />
      </div>
    </div>
  );
}
