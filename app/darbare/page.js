"use client"
import React, { useState, useEffect } from "react";
import Menu from "../Menu";

export default function Page() {
  const skillsData = [
    { name: "Python", level: 60 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "React", level: 90 },
    { name: "Next.js", level: 100 },
    { name: "Photoshop", level: 55 },
    { name: "After Effects", level: 80 },
  ];

  const [skills, setSkills] = useState(
    skillsData.map(skill => ({ ...skill, current: 0 }))
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setSkills(skillsData.map(skill => ({ ...skill, current: skill.level })));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (<div>

      <Menu />
    <div style={{ fontFamily: "Shabnam", direction: "rtl" }}>

      {/* بخش معرفی */}
      <div className="mt-48 flex flex-col md:flex-row gap-6 justify-center items-center px-4 md:px-0">
        <div className="w-full max-w-xs md:max-w-60 h-48 md:h-full flex justify-center md:justify-end mb-4 md:mb-0">
          <img
            src="./me.jpg"
            alt="me"
            className="rounded-3xl h-full w-auto object-cover max-w-full"
            />
        </div>
        <div className="max-w-3xl flex flex-col shadow-3xl gap-5 rounded-3xl p-6 bg-gradient-to-br from-[#575757] via-[#21074b] to-[#21074b]">
          <p className="font-bold text-2xl mt-4 text-right">سید حبیب الله موسوی</p>
          <p className="text-gray-400 text-right mb-4">
            من کارشناسی مهندسی کامپیوتر دارم و در زمینه گرافیک فعالیت کردم.
            همچنین دارای مدرک معتبر در طراحی با نرم‌افزارهای حرفه‌ای مثل
            افترافکت و فتوشاپ هستم که باعث شده نگاه خلاقانه و دقیقی به طراحی
            داشته باشم. حوزه تخصص اصلی من طراحی وب است و با ترکیب مهارت‌های
            فنی و هنری، وب‌سایت‌هایی می‌سازم که هم زیبا و هم کاربرپسند باشند.
            برای من طراحی وب فقط کدنویسی نیست، بلکه خلق تجربه‌ای است که کاربر
            از ابتدا تا انتها از آن لذت ببرد. با توجه به دانش مهندسی و
            پس‌زمینه گرافیکی، همیشه سعی می‌کنم پروژه‌هایم نوآورانه، دقیق و
            مطابق با نیاز مشتری باشد. اگر دنبال یک طراح وب حرفه‌ای با دانش
            فنی قوی و خلاقیت بالا هستید، من آماده‌ام تا بهترین راهکارها را برای
            موفقیت پروژه شما ارائه دهم و در کنار شما باشم.
          </p>
        </div>

      </div>

      {/* بخش تجربه‌ها و مهارت‌ها */}
      <div className="flex flex-col justify-center md:flex-row gap-6 m-10">
        
        {/* تجربه های کاری */}
        <div className="max-w-xl flex flex-col h-fit shadow-3xl gap-5 rounded-3xl p-6 bg-gradient-to-br from-[#575757] via-[#21074b] to-[#21074b] flex-1">
          <p className="text-right font-bold text-xl m-4">تجربه های کاری</p>
          <ul className="list-disc text-gray-400 space-y-2 pr-6">
            <li>طراحی سایت های فروشگاهی</li>
            <li>طراحی سایت های شرکتی</li>
            <li>طراحی قالب گرافیکی و پوستر</li>
          </ul>
        </div>

        {/* مهارت های من */}
        <div className="max-w-xl flex flex-col shadow-3xl gap-5 rounded-3xl p-6 bg-gradient-to-br from-[#575757] via-[#21074b] to-[#21074b] flex-1">
          <p className="text-right font-bold text-xl mb-4">مهارت های من</p>
          <div className="space-y-6">
            {skills.map((skill, i) => (
                <div key={i}>
                <div className="flex justify-between text-gray-300 text-sm mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.current}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden relative">
                  <div
                    className="bg-purple-500 h-4 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.current}%` }}
                    ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
            </div>
  );
}
