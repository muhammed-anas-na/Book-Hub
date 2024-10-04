import Link from 'next/link';
import React from 'react';

const LandingPage = () => {
    return (
        <div className="mt-16 min-h-screen flex items-center justify-center bg-white">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                {/* Left Section */}
                <div className="space-y-6">
                    <h1 className="text-3xl md:text-6xl font-bold leading-tight font-Tangerine">
                        Your Next Read is Just a <Link href={"/discover-books"} className="text-gray-400 lg:border-2 lg:px-1 cursor-pointer">Tap</Link> away
                    </h1>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <span className="text-blue-500 text-xl mr-2">🌆</span>
                            <p className="md:text-lg text-xs">
                            Discover a treasure trove of books right in your neighborhood. Connect with fellow readers and access thousands of books without buying new ones.
                            </p>
                        </div>
                        <div className="flex items-start">
                            <span className="text-yellow-500 text-xl mr-2">✂️</span>
                            <p className="md:text-lg text-xs">
                            Why buy when you can borrow? Save hundreds of dollars annually while enjoying an endless variety of books from your local community's personal libraries.
                            </p>
                        </div>
                        <div className="flex items-start">
                            <span className="text-yellow-500 text-xl mr-2">⚡️</span>
                            <p className="md:text-lg text-xs">
                            Join a vibrant community of book lovers. Exchange stories and build meaningful connections with readers who share your passion.
                            </p>
                        </div>
                    </div>

                    <div className='md:mt-4'>
                        <button 
                        className="md:mx-3 w-full md:w-auto border border-black border-5 text-black bg-transparent py-2 md:px-6 md:py-3 mb-3 rounded-lg shadow-lg hover:bg-black hover:text-white duration-700">
                            <Link href={"add-books"}>Add Books + </Link>
                        </button>
                        <button className="w-full md:w-auto bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800">
                            <Link href={"discover-books"}>Discover Books Now →</Link>
                        </button>
                    </div>

                </div>

                {/* Right Section (Image and Floating Boxes) */}
                <div className="relative flex justify-center items-center">
                    <img
                        src="image.png" // Placeholder for the image
                        alt="NomadKit Guide"
                        className="w-full h-auto max-w-sm"
                    />

                    {/* Floating Boxes */}
                    <div 
                    className="absolute md:top-6 md:left-0 -top-8 -left-8 -rotate-12 w-48 bg-white shadow-md md:p-3 p-2 rounded-md text-xs md:text-base">
                        <span role="img" aria-label="icon">📚</span> Which neighborhood is the best to live in?
                    </div>
                    <div className="absolute md:top-20 md:right-0 -right-9 top-10 rotate-12 w-48 bg-white shadow-md md:p-3 p-2 rounded-md text-xs md:text-base">
                        <span role="img" aria-label="icon">☕</span> Where do I find that perfect café to work from?
                    </div>
                    <div className="absolute md:-bottom-3 md:left-0 -bottom-8 -left-8 w-48 bg-white shadow-md md:p-3 p-2 rounded-md text-xs md:text-base">
                        <span role="img" aria-label="icon">❤️</span> Where do I go in case of an emergency?
                    </div>
                    <div className="absolute md:top-60 md:right-0 bottom-5 -right-5 w-48 bg-white shadow-md md:p-3 p-2 rounded-md text-xs md:text-base">
                        <span role="img" aria-label="icon">🍹</span> Any recommendation for a rooftop bar to meet friends?
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
