"use client" ;
import { useState } from 'react';
import Link from 'next/link';

export default function Overlay() {
  const [showOverlay, setShowOverlay] = useState(true);

  const handleClose = () => {
    setShowOverlay(false);
  };

  return (
    showOverlay && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <div className="mb-2 absolute -top-2 -right-2">
            <button
              onClick={handleClose}
              className="absolute top-0 right-0 p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-8 bold">
             <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            </button>
          </div>
          <img
            src="/upevent.png"
            alt="Event"
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="text-xl font-bold mt-4">Special Event</h2>
          <p className="mt-2">Join us for an exclusive event. Register now!</p>
          <Link href={'/regis'}>
             <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Register Now
             </button>
           </Link>
        </div>
      </div>
    )
  );
};
