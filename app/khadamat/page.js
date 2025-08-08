"use client";

import React from "react";
import Menu from "../Menu";

export default function Services() {
  const services = [
    {
      title: "طراحی و توسعه وب‌سایت‌های واکنش‌گرا",
      description:
        "ساخت سایت‌هایی که در همه دستگاه‌ها (موبایل، تبلت، دسکتاپ) به بهترین شکل نمایش داده می‌شوند.",
    },
    {
      title: "رابط کاربری (UI) جذاب و تجربه کاربری (UX) کارآمد",
      description:
        "طراحی ظاهر زیبا و آسان برای استفاده کاربران.",
    },
    {
      title: "توسعه پروژه‌های سفارشی",
      description:
        "پیاده‌سازی ایده‌ها و نیازهای خاص شما با استفاده از تکنولوژی‌های مدرن مانند React و Next.js.",
    },
    {
      title: "پشتیبانی و به‌روزرسانی",
      description:
        "امکان نگهداری و بهبود مستمر سایت پس از تحویل پروژه با هزینه مشتری.",
    },
  ];

  return (
    <div>
      <Menu />
      <section
        dir="rtl"
        className="max-w-4xl mt-52 mx-auto p-8 bg-gradient-to-tr from-[#2c0741] via-[#21074b] to-[#21074b] rounded-3xl shadow-xl text-white my-20"
      >
        <h2 className="text-4xl font-extrabold mb-8 text-right">خدمات من</h2>

        <style jsx>{`
          .service-card {
            opacity: 0;
            transform: translateY(30px);
            animation: fadeSlideUp 0.6s forwards;
          }
          @keyframes fadeSlideUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

        <div className="grid gap-8 sm:grid-cols-2">
          {services.map(({ title, description }, idx) => (
            <div
              key={title}
              className="service-card bg-black/30 rounded-xl p-6 shadow-md hover:bg-purple-900/50 transition-colors duration-300"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-right text-purple-400">
                {title}
              </h3>
              <p className="text-purple-200 text-right">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
