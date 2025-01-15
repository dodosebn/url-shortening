import React from 'react'
import Image from 'next/image';
import { AdvStatTempProps } from '@/types';
const AdvStatTemp:React.FC<AdvStatTempProps>= ({imgSrc, title, content}) => {
  return (
    <div className='relative'>
  <div className="bg-DarkViolet rounded-full w-24 h-24 flex items-center justify-center mx-auto absolute -top-12 left-0 right-0">
  <Image src={imgSrc} alt={title} className="mx-auto" />
</div>

      <div className='bg-white p-4 py-10 text-center rounded-lg'>
<div>
<h1 className='text-veryDarkViolet text-2xl font-bold pt-4'>{title}</h1>
<p className='text-gray-600 pt-3'>{content}</p>
</div>
      </div>
      </div>
  )
}

export default AdvStatTemp;
