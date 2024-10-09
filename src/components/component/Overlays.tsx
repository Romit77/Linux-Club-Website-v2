"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Overlay() {
  const [showOverlay, setShowOverlay] = useState(true);

  const handleClose = () => {
    setShowOverlay(false);
  };

  function open_form() {
    window.open("https://forms.gle/gT2C3dsoRJV2dbXT8");
  }

  return (
    showOverlay && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <div className="mb-2 absolute -top-2 -right-2">
            <button
              onClick={handleClose}
              className="absolute top-2 -left-11 p-1 bg-slate-300 rounded-3xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-8 bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
          <Image
            src="/club.jpg"
            alt="Event"
            className="w-full h-49 object-cover rounded-md"
            width={450}
            height={200}
          />
          <h2 className="text-xl font-bold mt-2 underline text-center text-bold text-black">
            Recuritment Update{" "}
          </h2>
          <p className="mt-2 text-wrap text-clip text-center text-black text-medium">
            Join the Linux Club and unlock your potential! Apply now to be part
            of our dynamic community
          </p>
          <div className="flex justify-center mt-2">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-1"
              onClick={open_form}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    )
  );
}
