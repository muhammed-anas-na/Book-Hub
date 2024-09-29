import React from 'react';

const Row = ( {title}) => {
  const items = [
    {
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
      title: "Electric Catamarans",
    },
    {
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
      title: "Open Day Cruisers",
    },
    {
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
      title: "Electric RIBs",
    },
    {
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
      title: "Console Boats",
    },
    {
        image: "https://via.placeholder.com/300x200", // Replace with actual image URL
        title: "Console Boats",
      },
      {
        image: "https://via.placeholder.com/300x200", // Replace with actual image URL
        title: "Console Boats",
      },
      {
        image: "https://via.placeholder.com/300x200", // Replace with actual image URL
        title: "Console Boats",
      },
  ];

  return (
    <div className="py-8 mx-2 md:mx-10 scroll font-sans">

    <div className='flex justify-between mx-3 md:mx-0'>
        <h2 className="md:text-3xl font-bold mb-4">{title}</h2>
        <button className='text-blue-900 font-bold'>Show more</button>
    </div>

      {/* Container for the horizontal scroll */}
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button className="hidden md:block absolute left-0 bg-white p-2 rounded-full shadow-lg">
          ←
        </button>

        {/* Scrollable Row */}
        <div className="flex overflow-x-scroll scrollbar-hide space-x-4 md:py-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="md:min-w-[250px] bg-white rounded-lg shadow-md md:p-4 flex-shrink-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-60 h-72 object-cover rounded-lg"
              />
              <h3 className="md:mt-4 text-base md:text-xl font-semibold">{item.title}</h3>
              <p className='text-xs text-gray-500'>📍Ernakulam</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="hidden md:block absolute right-0 bg-white p-2 rounded-full shadow-lg">
          →
        </button>
      </div>
    </div>
  );
};

export default Row;
