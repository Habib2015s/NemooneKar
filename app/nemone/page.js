"use client";
import React from "react";
import Menu from "../Menu";
import { motion } from "framer-motion";

export default function Page() {
  const projects = [
    {
      title: "پروژه اول",
      description: "آنلاین شاپ",
      image: "/minishop.png",
      link: "https://minionlineshop.vercel.app/",
    },
    {
      title: "پروژه دوم",
      description: "فروشگاه زنجیره ای",
      image: "/shop.png",
      link: "https://next-xr8u.vercel.app/",
    },
    {
      title: "پروژه سوم",
      description: "پخش و پلیر موزیک",
      image: "/music.png",
      link: "https://next2-vgag.vercel.app/",
    },
  ];

  return (
    <div>
      <Menu />

      {/* عنوان بخش نمونه کارها */}
      <div className="mt-32 flex items-center justify-center ">
        <div className="flex items-center w-full max-w-4xl px-4 mt-24">
          <div className="flex-grow border-t border-gray-400"></div>
          <span
            className="mx-4 text-2xl font-bold"
            style={{ fontFamily: "Shabnam" }}
          >
            نمونه کارها
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
      </div>

      {/* گرید پروژه‌ها */}
      <div className="mt-12 max-w-screen-xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gradient-to-br from-[#FF8F9B] via-[#21074b] to-[#21074b] rounded-3xl shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transform transition duration-500 hover:scale-110 hover:brightness-110"
            />
            <div className="p-6 text-right">
              <h2
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "Shabnam" }}
              >
                {project.title}
              </h2>
              <p className="text-gray-200 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#FF8F9B] text-white py-2 px-4 rounded-full hover:bg-[#ff7084] transition"
              >
                مشاهده پروژه
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
