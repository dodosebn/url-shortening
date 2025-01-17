'use client'
import React from 'react';
import Image from 'next/image';
import { AdvStatTempProps } from '@/types';

export const AdvStatTemp: React.FC<AdvStatTempProps> = ({ imgSrc, title, content }) => {
  return (
    <div className="relative">
      <div className="bg-DarkViolet rounded-full w-24 h-24 flex items-center justify-center mx-auto absolute -top-12 left-0 right-0 lg:right-48">
        <Image src={imgSrc} alt={title} width={50} height={50} className="mx-auto" />
      </div>

      <div className="bg-white p-4 py-10 text-center  lg:w-[20rem] lg:text-start rounded-lg">
        <h1 className="text-veryDarkViolet text-2xl font-bold pt-4">{title}</h1>
        <p className="text-gray-600 pt-3">{content}</p>
      </div>
    </div>
  );
};

export const AdStatColorBtw: React.FC= () => (
  <div className="flex justify-center items-center">
    
      <div className="border-l-[0.125rem] mx-auto border-solid border-cyan h-[7rem] lg:h-[0.4rem] lg:px-3 w-[0.7rem] bg-cyan"></div>
    
  </div>
);
