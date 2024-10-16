import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export default function KeyboardPrompt({ setOpenSearchBar }) {
  const [isPressed, setIsPressed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect screen size for mobile responsiveness
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize(); // Initial check
    window.addEventListener('resize', checkScreenSize);

    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === 'a') {
        setIsPressed(true);
      }
    };

    const handleKeyUp = (event) => {
      if (event.key.toLowerCase() === 'a') {
        setIsPressed(false);
        setOpenSearchBar(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className={`fixed ${isMobile ? "top-16 right-4" : "top-16 right-4"} z-50`}>
      {
        isMobile ? (
          <div className={`
      group
      flex items-center
      rounded-lg
      bg-zinc-950
      p-1
      transition-all duration-200
      ${isPressed ? 'scale-95' : 'hover:scale-105'}
    `}>
            <span className="text-white" onClick={()=>{
                      setIsPressed(true);
                      setOpenSearchBar(true);
            }}>
              <Search />
            </span>
          </div>
        ) : (
          <div className={`
      group
      flex items-center
      rounded-lg
      bg-zinc-950
      px-4 py-2
      transition-all duration-200
      ${isPressed ? 'scale-95' : 'hover:scale-105'}
    `}>
            <span className="text-white">Press</span>
            <span className={`
        mx-2
        flex h-7 w-7
        items-center justify-center
        rounded
        border border-zinc-800
        bg-zinc-900
        text-sm font-medium
        text-zinc-400
        transition-colors
        group-hover:border-zinc-700
        group-hover:text-zinc-300
        ${isPressed ? 'bg-zinc-800 text-white' : ''}
      `}>
              A
            </span>
            <span className="text-white">to open search bar</span>
          </div>
        )
      }
    </div>
  );
}