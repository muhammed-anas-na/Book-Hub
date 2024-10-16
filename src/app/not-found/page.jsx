import React from 'react';

const ErrorPage404 = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white p-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-2xl mb-4 text-gray-400">
          Whoops, this is a little embarrassing.
          <br />
          This page doesn't seem to exist.
        </h1>
        
        <button className="bg-transparent border border-white text-white py-2 px-4 rounded-full hover:bg-white hover:text-black transition duration-300 mb-8">
          Take Me Back Home
        </button>
        
        <div className="relative">
          <svg viewBox="0 0 200 200" className="w-64 h-64 mx-auto">
            <g className="animate-wobble">
              <path d="M100,180 Q130,160 160,180 L140,120 Q120,140 100,120 Q80,140 60,120 L40,180 Q70,160 100,180" fill="#FFA500" /> {/* Body */}
              <circle cx="70" cy="90" r="10" fill="white" /> {/* Left eye */}
              <circle cx="130" cy="90" r="10" fill="white" /> {/* Right eye */}
              <path d="M90,110 Q100,120 110,110" stroke="black" strokeWidth="2" fill="none" /> {/* Mouth */}
              <path d="M50,50 Q70,70 90,50" stroke="#FFA500" strokeWidth="8" fill="none" /> {/* Left ear */}
              <path d="M110,50 Q130,70 150,50" stroke="#FFA500" strokeWidth="8" fill="none" /> {/* Right ear */}
              <circle cx="100" cy="130" r="10" fill="#FFD700" /> {/* Collar */}
            </g>
          </svg>
          <div className="absolute -top-4 right-0 bg-black text-white p-2 rounded-full">
            Houston,
            <br />
            we have
            <br />
            a problem
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage404;