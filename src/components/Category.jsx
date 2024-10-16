import Link from 'next/link';
import React from 'react';
import Footer from './Footer';

const categories = [
  { 
    title: 'Text Book', 
    color: 'bg-red-500', 
    image: 'school-textbook.jpg',
    href: '/search?q=TextBook&&type=books'
  },
  { 
    title: 'Self Improvenment', 
    color: 'bg-blue-600', 
    image: 'self-improvement.jpg',
    href: '/search?q=&&type=books'
  },
  { 
    title: 'Fiction', 
    color: 'bg-emerald-600', 
    image: 'fiction-book.jpg',
    href: '/search?q=fiction&&type=books'
  },
  { 
    title: 'Kids', 
    color: 'bg-orange-500', 
    image: 'kids-book.jpg',
    href: '/search?q=kids&&type=books'
  }
];

export default function CategoryGrid() {
  return (
    <div className="min-h-screen p-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-2xl font-bold text-black">Most Searched Categories</h2>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <a
              key={category.title}
              href={category.href}
              className={`
                ${category.color} 
                group relative overflow-hidden rounded-xl p-4 
                transition-all duration-300 
                hover:scale-105 hover:shadow-xl
              `}
            >
              {/* Content */}
              <div className="relative z-10 h-40">
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                
                {/* Decorative Image */}
                <div className="absolute bottom-0 right-0 h-24 w-24 rotate-12 transform opacity-50 hover:opacity-100 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-110">
                  <img
                    src={category.image}
                    alt=""
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30" />
            </a>
          ))}
        </div>

        {/* Browse All Section */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Link
            href="/all-categories"
            className="group relative overflow-hidden rounded-xl bg-amber-500 p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative z-10 h-24">
              <h3 className="text-xl font-semibold text-white">Browse All</h3>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30" />
          </Link>
          
          <Link
            href="/featured"
            className="group relative overflow-hidden rounded-xl bg-yellow-500 p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative z-10 h-24">
              <h3 className="text-xl font-semibold text-white">Featured Content</h3>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30" />
          </Link>
        </div>
      </div>
    </div>
  );
}