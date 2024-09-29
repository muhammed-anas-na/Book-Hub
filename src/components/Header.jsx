// components/Header.js

import Link from 'next/link';
import HeaderButton from './HeaderButton';

const Header = () => {
  return (
    <header className=" fixed top-0 left-0 right-0 bg-transparent z-50 border xl:mx-96 mx-5 my-5 font-Tangerine rounded-full">
      <div className="flex justify-between items-center max-w-7xl mx-auto md:p-2 p-1">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/">
            <span className="flex items-center space-x-2">
              {/* <img src="/nomadkit-logo.png" alt="NomadKit" className="w-6 h-6" /> */}
              <span className="text-lg font-bold text-gray-900 font-sans">Book <span className='bg-orange-400 text-white px-1'>Hub</span></span>
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/cities"><span className="text-gray-700 hover:text-gray-900">Cities</span></Link>
          <Link href="/about"><span className="text-gray-700 hover:text-gray-900">About</span></Link>
          <Link href="/chapters"><span className="text-gray-700 hover:text-gray-900">Chapters</span></Link>
          <Link href="/faq"><span className="text-gray-700 hover:text-gray-900">FAQ</span></Link>
        </nav>

        {/* Call to Action Button */}
          <HeaderButton/>
      </div>
    </header>
  );
};

export default Header;
