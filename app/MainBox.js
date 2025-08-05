"use client"
import Marquee from "./Marquee";
import Medias from "./Medias";

export default function MainBox() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8 overflow-x-hidden">
      <div className="flex flex-col md:flex-row gap-8 items-start">

        {/* سمت چپ */}
        <div className="flex-1 flex flex-col gap-8 min-w-0">
          <Marquee />

          {/* کارت‌ها */}
          <div className="flex gap-6 justify-center">
  {/* Box 1 */}
  <div className='max-w-sm w-full cursor-pointer h-fit shadow-3xl flex flex-col p-6 rounded-3xl 
    bg-gradient-to-br from-[#FFDDE1] via-[#FF8F9B] to-[#21074b] 
    transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-4xl'>
    <img src='./imgg.png' alt="نمونه کار" className='rounded-lg object-cover w-full h-40 sm:h-52' />
    <p style={{ fontFamily: "Shabnam" }} className='font-bold text-xl justify-end flex mt-4'>
      نمونه کارها
    </p>
    <p className='text-gray-500 flex justify-end'>از نمونه کارها بازدید کنید</p>
  </div>

  {/* Box 2 */}
  <div className='max-w-sm w-full cursor-pointer shadow-3xl flex flex-col p-6 rounded-3xl 
    bg-gradient-to-br from-[#FFDDE1] via-[#FF8F9B] to-[#21074b] 
    transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-4xl'>
    <img src='./person.png' alt="درباره من" className='rounded-lg object-cover w-full h-40 sm:h-52' />
    <p style={{ fontFamily: "Shabnam" }} className='font-bold text-xl justify-end flex mt-4'>
      درباره من
    </p>
    <p className='text-gray-500 flex justify-end'>درباره من بیشتر بدانید</p>
  </div>
</div>

        </div>

        {/* سمت راست */}
        <div className='flex  flex-col w-full md:w-auto min-w-0'>
          <div className="w-full md:w-[520px] flex-row-reverse h-auto md:h-72 shadow-3xl rounded-3xl p-6 
            bg-gradient-to-br from-[#FF8F9B] via-[#21074b] to-[#5D54A4]
            transform transition-transform duration-500 ease-in-out
            hover:scale-105 hover:shadow-4xl flex  md:flex-row min-w-0"
            style={{ flexDirection: 'row-reverse' }}
            >

            {/* تصویر */}       
            <div className="w-full  md:w-60 h-48 md:h-full flex justify-center md:justify-end mb-4 md:mb-0"

            >
              <img
                src="./me.jpg"
                alt="me"
                className="rounded-3xl h-full w-auto object-cover max-w-full"
              />
            </div>

            {/* متن */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right justify-center md:mr-6 min-w-0">
              <p className='text-gray-500'>طراح وبسایت</p>
              <p
                style={{ fontFamily: "Shabnam" }}
                className="font-bold text-2xl mt-4"
              >
                سید حبیب الله موسوی
              </p>
              <p className="text-gray-500 mt-2 max-w-xs">
                طراح و توسعه دهنده ی وبسایت های 
                خلاقانه با رابط کاربری مدرن و زیبا
              </p>
            </div>
          </div>
          <Medias />
        </div>
      </div>
    </div>
  )
}
