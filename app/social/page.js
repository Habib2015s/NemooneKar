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
    <Menu/>
      <style jsx>{`
        .container {
          max-width: 600px;
          margin-top: 224px;
          display:flex;
          flex-direction:column;
          margin-left:448px;
          padding: 40px;
          background: linear-gradient(135deg, #575757 0%, #21074b 50%, #21074b 100%);
          border-radius: 25px;
          box-shadow: 0 8px 25px rgba(219, 39, 119, 0.6);
          color: #ddd;
          font-family: "Vazirmatn", sans-serif;
          text-align: center;
        }

        .description {
          font-size: 1.2rem;
          margin-bottom: 30px;
          line-height: 1.6;
          color: #eee;
        }

        .social-container {
          display: flex;
          justify-content: center;
          gap: 50px;
        }

        a {
          color: #bb86fc;
          font-size: 56px;
          position: relative;
          transition: transform 0.3s ease, filter 0.3s ease;
          filter: drop-shadow(0 0 6px rgba(187, 134, 252, 0.6));
          border-radius: 50%;
          padding: 10px;
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
      `}</style>

      <div className="container ">
        <p className="description"style={{ fontFamily: "Shabnam" }}>  
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
          ].map(({ icon, name, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              title={name}
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
