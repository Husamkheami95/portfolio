import Image from 'next/image';
import React from 'react'


export default function Card({urlImage,title,href}) {

  return (
    
        <div className=" items-center max-w-sm h-auto bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href={`${href}`} className=' w-full  p-6 flex justify-center  hover:bg-opacity-20 hover:bg-black duration-300'>
            
            <Image
             
              src={`/../public/assets/${urlImage}`}
              alt="product image"
              height='94'
              width='94'
              placeholder='ss'
            />
          </a>
          <div class="px-5 pb-5">
            <a href={`${href}`}>
              <h5 class="flex justify-center  text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
              </h5>
            </a>
           
           
          </div>
        </div>
      );
  
}
