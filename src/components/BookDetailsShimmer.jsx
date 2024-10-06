const BookDetailShimmer = () => {
    return (
      <div className="container mx-auto px-4 py-8 max-w-7xl mt-20">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Book Cover Image Shimmer */}
              <div className="lg:w-1/3">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                  <div className="w-full h-full bg-gray-200 animate-pulse" />
                </div>
              </div>
  
              {/* Book Details Shimmer */}
              <div className="lg:w-2/3 space-y-6">
                {/* Title Shimmer */}
                <div className="space-y-3">
                  <div className="h-8 md:h-10 bg-gray-200 rounded-md animate-pulse w-3/4" />
                </div>
  
                {/* Author Info Shimmer */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
                  <div className="h-6 bg-gray-200 rounded-md animate-pulse w-24" />
                </div>
  
                {/* Description Shimmer */}
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
                </div>
  
                {/* Willing To Badge Shimmer */}
                <div className="inline-block">
                  <div className="h-8 w-24 bg-gray-200 rounded-lg animate-pulse" />
                </div>
  
                {/* Button Shimmer */}
                <div className="w-full h-14 bg-gray-200 rounded-lg animate-pulse mt-6" />
              </div>
            </div>
          </div>
        </div>
  
        {/* Shimmer Animation Styles */}
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
  
  export default BookDetailShimmer;