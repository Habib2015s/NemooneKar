"use client"
import Link from "next/link";
import Marquee from "./Marquee";
import Medias from "./Medias";
import { motion } from "framer-motion";

export default function MainBox() {
  return (
    <motion.div
      className="max-w-screen-xl mx-auto px-4 md:px-8 py-8 overflow-x-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* سمت چپ */}
        <div className="flex-1 flex flex-col gap-8 min-w-0">
          <Marquee />
          
          {/* کارت‌ها */}
          <motion.div
            className="flex gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {/* Box 1 */}
            <Link href="/nemone">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="max-w-sm w-full cursor-pointer h-fit shadow-3xl flex flex-col p-6 rounded-3xl 
              bg-gradient-to-br from-[#FFDDE1] via-[#FF8F9B] to-[#21074b] transition-transform"
              >
              <img src='./imgg.png' alt="نمونه کار" className='rounded-lg object-cover w-full h-40 sm:h-52' />
              <p style={{ fontFamily: "Shabnam" }} className='font-bold text-xl justify-end flex mt-4'>
                نمونه کارها
              </p>
              <p className='text-gray-500 flex justify-end'>از نمونه کارها بازدید کنید</p>
            </motion.div>
                </Link>

            {/* Box 2 */}
            <Link href="/darbare">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="max-w-sm w-full cursor-pointer h-fit shadow-3xl flex flex-col p-6 rounded-3xl 
              bg-gradient-to-br from-[#FFDDE1] via-[#FF8F9B] to-[#21074b] transition-transform"
              >
              <img src='./person.png' alt="درباره من" className='rounded-lg object-cover w-full h-40 sm:h-52' />
              <p style={{ fontFamily: "Shabnam" }} className='font-bold text-xl justify-end flex mt-4'>
                درباره من
              </p>
              <p className='text-gray-500 flex justify-end'>درباره من بیشتر بدانید</p>
            </motion.div>
                </Link>
          </motion.div>
        </div>

        {/* سمت راست */}
        <motion.div
          className='flex flex-col w-full md:w-auto min-w-0'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <motion.div
            className="w-full md:w-[520px] flex-row-reverse h-auto md:h-72 shadow-3xl rounded-3xl p-6 
              bg-gradient-to-br from-[#FF8F9B] via-[#21074b] to-[#5D54A4] flex md:flex-row"
            style={{ flexDirection: 'row-reverse' }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-full md:w-60 h-48 md:h-full flex justify-center md:justify-end mb-4 md:mb-0">
              <img
                src="./me.jpg"
                alt="me"
                className="rounded-3xl h-full w-auto object-cover max-w-full"
              />
            </div>

            <div className="flex flex-col items-center md:items-end text-center md:text-right justify-center md:mr-6 min-w-0">
              <p className='text-gray-500'>طراح وبسایت</p>
              <p style={{ fontFamily: "Shabnam" }} className="font-bold text-2xl mt-4">
                سید حبیب الله موسوی
              </p>
              <p className="text-gray-500 mt-2 max-w-xs">
                طراح و توسعه دهنده ی وبسایت های خلاقانه با رابط کاربری مدرن و زیبا
              </p>
            </div>
          </motion.div>
          <Medias />
        </motion.div>
      </div>
    </motion.div>
  );
}
