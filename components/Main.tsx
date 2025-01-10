'use client';

import React, { useState } from 'react';
import shortenUrl from '@/utils';

const Main: React.FC = () => {
  const [txtValue, setTxtValue] = useState<string>(''); 
  const [shortenedUrl, setShortenedUrl] = useState<string | null>(null); 

  
  const handleText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTxtValue(event.target.value);
  };


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!txtValue.trim()) {
      alert('Please enter a valid URL');
      return;
    }

    try {
      const response = await shortenUrl(txtValue); 
      if (response) {
        setShortenedUrl(response); 
        setTxtValue(''); 
      } else {
        alert('Failed to shorten the URL. Please try again.');
      }
    } catch (error) {
      console.error('Error in handleSubmit:', error); 
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <main>
   <form onSubmit={handleSubmit} className="flex gap-5 justify-center">
  <input
    type="text"
    onChange={handleText}
    value={txtValue}
    placeholder="Enter URL"
    className="border border-gray-600 outline-gray-600 rounded-sm w-full"
    style={{textIndent: '1rem'}}
  />
  <button type="submit" className="bg-blue-500 text-white rounded-md px-5 py-2">
    Shorten
  </button>
</form>


      {shortenedUrl && (
        <div>
          <h3>Shortened URL:</h3>
          <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
            {shortenedUrl}
          </a>
        </div>
      )}
    </main>
  );
};

export default Main;
