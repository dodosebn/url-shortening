// import Image from "next/image";
'use client';
import { Header, Main } from "@/components";
import { useState } from "react";
export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="p-5 pt-[3rem] font-Poppins" style={{background: '#f0f1f6'}}>
    <Header isMobile={isMobile}  setIsMobile={setIsMobile}/>
<div className="p-[4rem]">
<Main isMobile={isMobile}  setIsMobile={setIsMobile}/>
</div>
</div>
  );
}
