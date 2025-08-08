"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Menu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth); // مقدار اولیه عرض صفحه
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const telegramLink = "https://t.me/Habib_m0";

  return (
    <>
      <style jsx>{`
        .navbar-container {
          display: flex;
          align-items: center;
          transition: all 0.5s ease-in-out;
          flex-wrap: wrap;
        }
        .logo-container {
          transition: all 0.5s ease-in-out;
        }
        .menu-links {
          display: flex;
          gap: 2rem;
          transition: all 0.5s ease-in-out;
          font-family: Shabnam;
          text-align: center;
          flex-wrap: wrap;
        }
        .telegram-button {
          background: #FF8F9B;
          border-radius: 1.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 0;
          transition: all 0.5s ease-in-out;
          font-family: Shabnam;
          font-weight: bold;
          color: #2B2D42;
          border: none;
        }
        /* حالت موبایل */
        @media (max-width: 768px) {
          .navbar-container {
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }
          .menu-links {
            order: 1;
            gap: 1.2rem;
            font-size: 0.9rem;
          }
          .telegram-button {
            order: 2;
            width: 100%;
            max-width: 300px;
            height: 40px;
            font-size: 1rem;
          }
          .logo-container {
            order: 0;
            display: none;
          }
        }
      `}</style>

      <div
        className={`
          fixed top-0 left-0 right-0 z-50 w-full
          bg-black/50 backdrop-blur-md backdrop-saturate-150 rounded-xl shadow-lg text-white
          transition-all duration-500 ease-in-out
          ${isScrolled ? 'py-2' : 'py-6'}
        `}
      >
        <div className="max-w-screen-xl mx-auto px-4">
          <div
            className="navbar-container"
            style={{
              justifyContent: isScrolled ? 'center' : 'space-between',
              gap: isScrolled ? '1rem' : '2.5rem',
            }}
          >
            {/* لوگو */}
            <div
              className="logo-container"
              style={{
                transform: isHovered
                  ? "matrix(1.2, 0.1, 0.1, 1.2, 0, 0)"
                  : "matrix(1, 0, 0, 1, 0, 0)",
                transition: "transform 0.5s",
                display: windowWidth < 768 ? "none" : "block",
                transformOrigin: "center",
                scale: isScrolled ? 0.75 : 1,
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src="./pngg.png"
                alt="logo"
                className="w-[100px] h-auto cursor-pointer"
              />
            </div>

            {/* لینک‌ها */}
            <div className="menu-links">
              <Link href="/darbare"><p className='hover:text-[#FF8F9B] cursor-pointer'>درباره من</p></Link>
              <Link href="/nemone"><p className='hover:text-[#FF8F9B] cursor-pointer'>نمونه کارها</p></Link>
              <Link href="/home"><p className='hover:text-[#FF8F9B] cursor-pointer'>صفحه اصلی</p></Link>
            </div>

            {/* دکمه */}
            <button
              className="telegram-button"
              style={{
                height: isScrolled ? 40 : 50,
                padding: isScrolled ? "0 1rem" : "0 1.5rem",
                fontSize: isScrolled ? "0.875rem" : "1rem",
                transform: isScrolled ? "scale(0.9)" : "scale(1)",
              }}
              onClick={() => window.open(telegramLink, "_blank")}
            >
              به من پیام بده
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
