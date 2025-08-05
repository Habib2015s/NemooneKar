import React from 'react'

export default function Text  ()  {
  return (
    <div className='flex justify-center'>
         <div
        className='w-1/2 h-28 m-10 flex cursor-pointer items-center justify-center shadow-3xl  p-6 rounded-3xl 
        bg-gradient-to-br from-[#FF8F9B] via-[#21074b] to-[#21074b] 
        transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-4xl'>
            <div className='flex gap-2'>
                <p className='font-bold text-4xl'> با شما</p>
                
                <p className='text-[#FF8F9B] font-bold text-4xl'> همکاری</p>
                <p className='font-bold text-4xl'> آماده</p>
            </div>
        </div>
    </div>
  )
}
