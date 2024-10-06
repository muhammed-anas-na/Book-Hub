const ShimmerBookRow = () => {
    return (
      <div className="py-8 mx-2 md:mx-10 font-sans">
        {/* Header Shimmer */}
        <div className="flex justify-between mx-3 md:mx-0 items-center mb-3">
          <div className="h-8 w-48 bg-gray-200 rounded-md animate-pulse" />
          <div className="h-4 w-20 bg-gray-200 rounded-md animate-pulse" />
        </div>
  
        {/* Container for the horizontal scroll */}
        <div className="relative flex items-center">
          {/* Left Arrow Shimmer */}
          <div className="hidden md:block absolute left-0 z-10">
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
          </div>
  
          {/* Scrollable Row */}
          <div className="flex overflow-x-hidden space-x-4 md:py-2 w-full">
            {/* Static Cards - We'll show 4 shimmer cards */}
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className="md:min-w-[250px] md:max-w-[250px] min-w-[200px] bg-white rounded-lg shadow-lg md:p-4 p-2 flex-shrink-0 border-2"
              >
                {/* Image Shimmer */}
                <div className="w-60 h-72 bg-gray-200 rounded-lg animate-pulse" />
                
                {/* Title Shimmer */}
                <div className="md:mt-4 mt-2 h-6 bg-gray-200 rounded-md animate-pulse" />
                
                {/* Location Shimmer */}
                <div className="mt-2 h-4 w-3/4 bg-gray-200 rounded-md animate-pulse" />
              </div>
            ))}
          </div>
  
          {/* Right Arrow Shimmer */}
          <div className="hidden md:block absolute right-0 z-10">
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
          </div>
        </div>
  
        {/* Shimmer Overlay Effect */}
        <style jsx>{`
          @keyframes shimmer {
            0% {
              background-position: -1000px 0;
            }
            100% {
              background-position: 1000px 0;
            }
          }
  
          .animate-pulse {
            background: linear-gradient(
              90deg,
              #f0f0f0 25%,
              #e0e0e0 50%,
              #f0f0f0 75%
            );
            background-size: 1000px 100%;
            animation: shimmer 2s infinite linear;
          }
        `}</style>
      </div>
    );
  };
  
  export default ShimmerBookRow;