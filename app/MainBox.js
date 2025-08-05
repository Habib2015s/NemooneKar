import React from 'react'
import Marquee from './Marquee'

export default function MainBox() {
  return (
    <div className="p-8">
      {/* تقسیم صفحه به دو ستون: چپ و راست */}
      <div className="flex gap-8 items-start">
        
        {/* سمت چپ */}
        <div className="flex-1 flex flex-col gap-8">
          <Marquee />

          {/* دو کارت کنار هم زیر marquee */}
          <div className="flex gap-6 justify-evenly">
            {/* Box 1 */}
            <div className='w-52 cursor-pointer h-fit shadow-3xl flex flex-col p-6 rounded-3xl 
              bg-gradient-to-br from-[#FFDDE1] via-[#FF8F9B] to-[#21074b] 
              transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-4xl'>
              <img src='./imgg.png' alt="نمونه کار" className='rounded-lg' />
              <p style={{ fontFamily: "Shabnam" }} className='font-bold text-xl justify-end flex mt-4'>
                نمونه کارها
              </p>
              <p className='text-gray-500 flex justify-end'>از نمونه کارها بازدید کنید</p>
            </div>

            {/* Box 2 */}
            <div className='w-52 cursor-pointer shadow-3xl flex flex-col p-6 rounded-3xl 
              bg-gradient-to-br from-[#FFDDE1] via-[#FF8F9B] to-[#21074b] 
              transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-4xl'>
              <img src='./person.png' alt="درباره من" className='rounded-lg' />
              <p style={{ fontFamily: "Shabnam" }} className='font-bold text-xl justify-end flex mt-4'>
                درباره من
              </p>
              <p className='text-gray-500 flex justify-end'>درباره من بیشتر بدانید</p>
            </div>
          </div>
        </div>

        {/* سمت راست: Box 3 (بزرگ با تصویر و متن) */}
        <div className="w-2xl h-72 shadow-3xl rounded-3xl p-6 
          bg-gradient-to-br from-[#21074b] via-[#21074b] to-[#5D54A4]
          transform transition-transform duration-500 ease-in-out
          hover:scale-105 hover:shadow-4xl flex">

          {/* محتوای داخلی: تصویر سمت راست، متن سمت چپ */}
          <div className="flex flex-row-reverse w-full items-start ">
            
            {/* تصویر سمت راست */}
            <div className="w-60 h-full flex justify-end">
              <img
                src="./me.jpg"
                alt="me"
                className="rounded-3xl h-full w-fit "
              />
            </div>

            {/* متن سمت چپ */}
            <div className=" flex flex-col m-6 items-end text-right justify-end">
                <p className='text-gray-500'>طراح وبسایت</p>
              <p
                style={{ fontFamily: "Shabnam" }}
                className="font-bold text-2xl justify-end items-end flex mt-4"
              >
                سید حبیب الله موسوی
              </p><br/>
              <p className="text-gray-500 ">
                طراح و توسعه دهنده ی وبسایت های 
                خلاقانه با رابط کاربری مدرن و زیبا
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
