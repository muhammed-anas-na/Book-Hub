// components/Header.js

import Link from 'next/link';
import HeaderButton from './HeaderButton';

const Header = () => {
  return (
    <>
      {/* Backdrop blur container */}
      <header className="fixed top-0 left-0 right-0 z-40 xl:mx-96 mx-5 my-5 border-2 rounded-full">
        {/* Glass effect background */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />
        
        {/* Content container */}
        <div className="relative z-50 flex justify-between items-center max-w-7xl mx-auto md:p-2 p-1">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/">
              <span className="flex items-center space-x-2">
                <span className="text-lg font-bold text-gray-900 font-sans">Book <span className='bg-orange-400 text-white px-1'>Hub</span></span>
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/all-categories"><span className="text-gray-700 hover:text-gray-900">Categories</span></Link>
            <Link href="/about"><span className="text-gray-700 hover:text-gray-900">About</span></Link>
            <Link href="/chapters"><span className="text-gray-700 hover:text-gray-900">Company</span></Link>
            <Link href="/faq"><span className="text-gray-700 hover:text-gray-900">FAQ</span></Link>
          </nav>

          {/* Call to Action Button */}
          <HeaderButton/>
        </div>
      </header>
      
      {/* Gradient overlay for smooth transition */}
      <div className="fixed top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/5 to-transparent z-30 pointer-events-none" />
    </>
  );
};

export default Header;