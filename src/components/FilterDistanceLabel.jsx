import React, { useEffect, useState } from 'react';

export default function FilterDistanceLabel({setOpen, open}) {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === 'a') {
        setIsPressed(true);
      }
    };

    const handleKeyUp = (event) => {
      if (event.key.toLowerCase() === 'a') {
        setIsPressed(false);
        setOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50">
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
        <span className="text-white">to Filter distance</span>
      </div>
    </div>
  );
}