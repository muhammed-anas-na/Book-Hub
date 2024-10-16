import { Trash2 } from "lucide-react";
import Link from "next/link";
import { DELTE_BOOK_FN } from "../../Axios/methods/POST";

const Row = ({ title, booksList,isMine }) => {
  async function handleDelete(productId) {
    try{
      console.log("Handle delte")
      const response = await DELTE_BOOK_FN(productId);
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="py-8 mx-2 md:mx-10 scroll font-sans">
      <div className='flex justify-between mx-3 md:mx-0 items-center mb-3'>
        <h2 className="md:text-3xl font-bold">{title}</h2>
        <Link href={title == "Nearest Books" ? "/nearest-book" : "/search?q=&&type=book"} className='text-blue-900 font-bold text-xs'>Show more</Link>
      </div>

      {/* Container for the horizontal scroll */}
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button className="hidden md:block absolute left-0 bg-white p-2 rounded-full shadow-lg">
          ←
        </button>

        {/* Scrollable Row */}
        <div className="flex overflow-x-scroll scrollbar-hide space-x-4 md:py-2">
          {booksList?.length > 0 ? (
            booksList?.map((item, index) => (
              <div
              key={index} className="md:min-w-[250px] md:max-w-[250px] bg-white rounded-lg shadow-lg md:p-4 flex-shrink-0 border-2 p-2">
              <Link href={`/discover-books/${item._id}`}>
                <img
                  src={item?.selectedBookCover}
                  alt={item.title}
                  className="w-60 h-72 object-fill rounded-lg"
                />
                <h3 className="md:mt-4 text-base md:text-lg font-semibold">{item?.title}</h3>
                <p className='text-xs text-gray-500 hover:cursor-pointer' title={item?.locationInText} >📍{item?.locationInText?.slice(0, 20)}</p>
                
              </Link>
              {isMine && <Trash2 
              onClick={()=>{handleDelete(item._id)}}
              className="w-full my-1 bg-red-500 text-white p-1 rounded-md cursor-pointer"/>}
              </div>
            ))
          ) : (
            <></>
          )}
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
