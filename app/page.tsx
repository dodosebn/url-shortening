'use client';
import { Header, Main } from "@/components";
import { useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="font-Poppins" style={{ background: '#f0f1f6' }}>
      {/* Common container for Header and Main with p-4 */}
      <div className="p-4 max-w-screen-lg mx-auto">
        <Header isMobile={isMobile} setIsMobile={setIsMobile} />
        <Main isMobile={isMobile} setIsMobile={setIsMobile} />
      </div>
    </div>
  );
}
