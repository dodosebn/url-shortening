import React from 'react';
import { DbBtnProps } from '@/types'; 

const DbBtn: React.FC<DbBtnProps> = ({ btnTxt }) => {
  return (
    <button className="bg-cyan rounded-3xl px-8 py-2 text-white font-semibold hover:bg-btnHover">{btnTxt}</button>
  );
};

export default DbBtn;
