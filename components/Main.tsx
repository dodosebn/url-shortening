'use client';

import React, { useState } from 'react';

const Main: React.FC = () => {
  const [txtValue, setTxtValue] = useState<string>(''); // For input val
  const [shortenedUrls, setShortenedUrls] = useState<string[]>([]); // For storing multiple shortened URLs

  const handleText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTxtValue(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!txtValue.trim()) {
      alert('Please enter a valid URL.');
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
          setShortenedUrls((prev) => [...prev, data.result_url]); // Append new URL to the list
          setTxtValue(''); // Clear the input field
        } else {
          alert('Failed to shorten the URL. Please try again.');
        }
      } else {
        alert('Error: Unable to reach the shortening service.');
      }
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <main className="p-4">
      {/* URL Shortener Form */}
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <input
          type="text"
          value={txtValue}
          onChange={handleText}
          placeholder="Enter URL"
          className="w-full max-w-md border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg px-6 py-2 hover:bg-blue-600 transition"
        >
          Shorten
        </button>
      </form>

      {/* Display Shortened URLs */}
      {shortenedUrls.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Shortened URLs:</h3>
          <ul className="space-y-2">
            {shortenedUrls.map((url, index) => (
              <li key={index}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700 transition"
                >
                  {url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
};

export default Main;
