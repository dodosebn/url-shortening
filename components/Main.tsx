'use client';

import React, { useState } from 'react';
import mobShortImg from '../public/bg-shorten-mobile.svg';
import desShortImg from '../public/bg-shorten-desktop.svg';
import { HeaderProps } from '@/types';

const Main: React.FC<HeaderProps> = ({ isMobile, setIsMobile }) => {
  const [txtValue, setTxtValue] = useState<string>('');
  const [shortenedUrls, setShortenedUrls] = useState<{ original: string, shortened: string }[]>([]);
  const [errs, setErrs] = useState<string>('');

  const handleText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTxtValue(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    
    if (!txtValue.trim()) {
      setErrs('Please add a link');
      return;
    }

    try {
      const response = await fetch('/api/shorten-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: txtValue }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.result_url) {
    
          setShortenedUrls((prev) => [...prev, { original: txtValue, shortened: data.result_url }]);
          setTxtValue('');
          setErrs(''); 
        } else {
          setErrs('Failed to shorten the URL. Please try again.');
        }
      } else {
        setErrs('Error: Unable to reach the shortening service.');
      }
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      setErrs('An unexpected error occurred. Please try again later.');
    }
  };

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      alert('Shortened URL copied to clipboard!');
    }).catch((err) => {
      alert('Failed to copy. Try again!');
    });
  };

  return (
    <main className="p-3">
    
      <div
      className='w-full'
        // className="relative flex justify-center items-center"
        style={{
          backgroundImage: `url(${isMobile ? mobShortImg.src : desShortImg.src})`,
          backgroundSize: 'cover',
          height: 'auto',
          width: '100%',
          backgroundColor: 'hsl(257, 27%, 26%)',
          borderRadius: '8px',
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col lg:flex-row items-center gap-3 p-3 rounded-lg shadow-md w-full"
        >
          <div>
            <input
              type="text"
              value={txtValue}
              onChange={handleText}
              placeholder="Shorten link here..."
              className="w-full lg:w-[100rem] max-w-md border mx-auto text-GrayishViolet border-gray-400 rounded-md px-11 py-2 focus:outline-none"
            />
            {errs && <span className="text-Red pr-[7.5rem]"><em>{errs}</em></span>}
          </div>
          <button
            type="submit"
            className="bg-cyan w-full max-w-md hover:hover:opacity-75 text-white rounded-lg px-8 py-2 transition"
          >
            Shorten it!
          </button>
        </form>
      </div>

      {/* Display Shortened URLs along with the original input */}
      {!errs && shortenedUrls.length > 0 && (
        <div className="mt-6">
          <ul className="space-y-4">
            {shortenedUrls.map((urlData, index) => (
              <li key={index}>
                <section className="bg-white p-6 flex flex-col justify-center items-center rounded-md overflow-hidden">
                  <a
                    href={urlData.original}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-700 transition px-8 "
                  >
                    {urlData.original}
                  </a>

                  <hr className="border-t border-black w-full my-4" />
                  
                  <a
                    href={urlData.shortened}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-700 transition px-8"
                  >
                    {urlData.shortened}
                  </a>

                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopy(urlData.shortened)}
                    className="bg-cyan w-full max-w-md hover:hover:opacity-75 text-white rounded-lg px-8 py-2 transition"
                  >
                    Copy
                  </button>
                </section>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
};

export default Main;
