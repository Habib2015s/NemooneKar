"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import Menu from "../Menu";

export default function SocialMedia() {
  return (
    <>
      <Menu />
      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 80px auto 0 auto;
          display: flex;
          flex-direction: column;
          padding: 40px;
          background: linear-gradient(135deg, #575757 0%, #21074b 50%, #21074b 100%);
          border-radius: 25px;
          box-shadow: 0 8px 25px rgba(219, 39, 119, 0.6);
          color: #ddd;
          font-family: "Vazirmatn", sans-serif;
          text-align: center;
          direction: rtl;
        }

        .description {
          font-size: 1.2rem;
          margin-bottom: 30px;
          line-height: 1.6;
          color: #eee;
          text-align: right;
        }

        .social-container {
          display: flex;
          justify-content: center;
          gap: 50px;
          flex-wrap: wrap;
        }

        a {
          color: #bb86fc;
          font-size: 56px;
          position: relative;
          transition: transform 0.3s ease, filter 0.3s ease;
          filter: drop-shadow(0 0 6px rgba(187, 134, 252, 0.6));
          border-radius: 50%;
          padding: 10px;

          /* انیمیشن ورود */
          opacity: 0;
          animation: fadeInScale 0.6s forwards;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        /* زمان‌بندی انیمیشن‌ها برای هر آیکون */
        a:nth-child(1) {
          animation-delay: 0.1s;
        }
        a:nth-child(2) {
          animation-delay: 0.3s;
        }
        a:nth-child(3) {
          animation-delay: 0.5s;
        }
        a:nth-child(4) {
          animation-delay: 0.7s;
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        a::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: linear-gradient(45deg, #9b4dca, #db2777, #a855f7);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
          filter: blur(10px);
        }

        a:hover {
          transform: scale(1.3) rotate(10deg);
          filter: drop-shadow(0 0 18px rgba(219, 39, 119, 0.9));
        }

        a:hover::before {
          opacity: 1;
        }

        /* ریسپانسیو */
        @media (max-width: 768px) {
          .container {
            max-width: 90%;
            margin-top: 100px;
            padding: 30px 20px;
          }
          a {
            font-size: 44px;
            padding: 8px;
            margin: 10px;
          }
          .social-container {
            gap: 30px;
            justify-content: center;
          }
          .description {
            font-size: 1rem;
            text-align: justify;
          }
        }

        @media (max-width: 480px) {
          a {
            font-size: 36px;
            padding: 6px;
            margin: 8px;
          }
          .description {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div className="container">
        <p className="description" style={{ fontFamily: "Shabnam" }}>
          اگر سوالی دارید، دنبال همکاری هستید،
          می‌توانید از شبکه‌های اجتماعی زیر استفاده کنید.
          روی آیکون‌ها کلیک کنید تا به صفحه من هدایت شوید.
        </p>

        <div className="social-container">
          {[
            { icon: faGithub, name: "GitHub", url: "https://github.com/Habib2015s" },
            { icon: faInstagram, name: "Instagram", url: "https://www.instagram.com/habib.racel/" },
            { icon: faLinkedin, name: "LinkedIn", url: "https://www.linkedin.com/in/%D8%AD%D8%A8%DB%8C%D8%A8-%D8%A7%D9%84%D9%84%D9%87-%D9%85%D9%88%D8%B3%D9%88%DB%8C-974a61352/" },
            { icon: faTelegram, name: "Telegram", url: "https://t.me/Habib_m0" },
          ].map(({ icon, name, url }, idx) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              title={name}
              style={{ animationDelay: `${0.2 * idx}s` }} 
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
