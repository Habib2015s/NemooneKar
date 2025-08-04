"use client"
import { useEffect } from 'react';
import HoverIcon from './HoverIcon';

export default function Page() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.lordicon.com/lordicon.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div >
      <p >درباره من</p>
      <p className='font-bold text-2xl' style={{fontFamily:"Shabnam"}}>درباره من</p>
      <p style={{fontFamily:"sans-serif"}}>درباره من</p>
      <p style={{fontFamily:"Sahel"}}>درباره من</p>

    </div>
  );
}
