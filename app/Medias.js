import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons'

export default function Medias() {
  return (
    <div className='w-52 cursor-pointer h-fit shadow-3xl flex flex-col p-6 rounded-3xl 
              bg-gradient-to-br from-[#FFDDE1] via-[#FF8F9B] to-[#21074b] 
              transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-4xl'>
      <div className='flex justify-center gap-4 text-white text-2xl'>
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTelegram} />
      </div>
    </div>
  )
}
