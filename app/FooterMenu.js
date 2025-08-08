import React, { useEffect } from 'react'
import HoverIcon from './HoverIcon';
import Link from 'next/link';

export default function FooterMenu() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.lordicon.com/lordicon.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <HoverIcon
          src="https://cdn.lordicon.com/zfemvkpr.json"
          baseColors="primary:#6366f1,secondary:#fbbf24"
          hoverColors="primary:#FF8F9B,secondary:#FF8F9B"
          size={100}
        />
      </div>

      <div
        style={{ fontFamily: "Shabnam" }}
        className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center text-lg my-10 px-4"
      ><Link href="/darbare">
        <p className='hover:text-[#FF8F9B] cursor-pointer text-center sm:text-left'>درباره من</p>
      </Link>
      <Link href="/nemone">
        <p className='hover:text-[#FF8F9B] cursor-pointer text-center sm:text-left'>نمونه کارها</p>
      </Link>
      <Link href="/home">
        <p className='hover:text-[#FF8F9B] cursor-pointer text-center sm:text-left'>صفحه اصلی</p>
      </Link>
      </div>
    </div>
  );
}
