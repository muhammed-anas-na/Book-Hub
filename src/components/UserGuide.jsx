import React from 'react';
import { ArrowUpRight, CircleUserRound, HandCoins, LibraryBig, MapPinCheck, PhoneIncoming, Sparkles } from 'lucide-react';
import Link from 'next/link';
const CategoryCard = ({ icon, title, description }) => (
  <div className="bg-dark-green p-6 flex flex-col items-start border hover:scale-110 duration-700 hover:z-10 hover:bg-pink-100">
    <div className="bg-white rounded-full p-2 mb-4">
      {icon}
    </div>
    <h3 className=" text-2xl font-bold mb-2">{title}</h3>
    <p className=" mb-4">{description}</p>
  </div>
);

const ExploreCategories = () => {
  return (
    <div className="bg-[#E7CCCC] text-gray-600 py-20 md:px-24 px-2 mt-20 shadow-inner">
      <div className="flex flex-col gap-2 md:flex-row justify-between items-center mb-8">
        <h2 className="text-lg md:text-4xl font-bold ">How to get started ?</h2>
        <Link href="/discover-books" class="relative inline-flex items-center justify-start inline-block md:px-5 md:py-3 overflow-hidden font-bold rounded-full group">
            <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
            <span class="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">Discover Books</span>
            <span class="absolute inset-0 border-2 border-black rounded-full"></span>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <CategoryCard
          icon= {<CircleUserRound className="w-8 h-8" />}
          title="01. Create an account"
          description="Sign up using Google for quick and easy access."
        />
        <CategoryCard
          icon={<MapPinCheck className="w-8 h-8" />}
          title="02. Add Location"
          description="Enter your address to find services and books near you."
        />
        <CategoryCard
          icon={<LibraryBig className="w-8 h-8" />}
          title="03. Discover books"
          description="Browse our extensive library of titles across various genres."
        />
                <CategoryCard
          icon={<Sparkles className="w-8 h-8" />}
          title="04. Filter books near you"
          description="Find available books in your area for convenient pickup or delivery."
        />
        <CategoryCard
          icon={<PhoneIncoming className="w-8 h-8" />}
          title="05. Request callback"
          description="Let the other person know that you are intrested in the book."
        />
        <CategoryCard
          icon={<HandCoins className="w-8 h-8" />}
          title="06. Earn by selling you books"
          description="Turn your old books into cash by listing them on our platform."
        />
      </div>
    </div>
  );
};

export default ExploreCategories;