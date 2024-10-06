"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { GET_BOOK_DEATILS_BY_ID_FN } from '../../../../Axios/methods/POST';
import Header from '@/components/Header';
import CallbackModal from '@/components/CallBackModal';
import { User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Post = () => {
  const { bookId } = useParams();
  const [book, setBooks] = useState();
  const [showModal, setShowModal] = useState(false)
  useEffect(() => {
    (async function () {
      try {
        const response = await GET_BOOK_DEATILS_BY_ID_FN(bookId);
        setBooks(response.data);

      } catch (err) {
        console.log(err);
      }
    })()
  }, [])
  console.log("Book == > ", book)
  return (
    <>
      <Header />
      {
        showModal && <CallbackModal setShowModal={setShowModal} bookId={bookId} />
      }
      <div className="container mx-auto px-4 py-8 max-w-7xl mt-20">
        <Card className="overflow-hidden">
          <CardContent className="p-6 border-none">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Book Cover Image */}
              <div className="lg:w-1/3">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={book?.selectedBookCover || '/api/placeholder/300/400'}
                    alt={`Cover of ${book?.title}`}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Book Details */}
              <div className="lg:w-2/3 space-y-6">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
                  {book?.title || 'Book Title'}
                </h1>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <User className="w-6 h-6 text-gray-600" />
                  </div>
                  <span className="text-lg text-gray-700 font-medium">Anass</span>
                </div>

                {/* Description */}
                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed">
                    {book?.description || 'No description available'}
                  </p>
                </div>

                {/* Willing To Badge */}
                <div className="inline-block">
                  <span className="px-4 py-2 bg-rose-500 text-white rounded-lg text-sm font-medium hover:bg-rose-600 transition-colors">
                    {book?.willingTo || 'Status'}
                  </span>
                </div>

                {/* Call to Action Button */}
                <button
                  onClick={() => setShowModal(true)}
                  className="w-full bg-black text-white py-4 rounded-lg font-medium 
                         hover:bg-gray-800 transition-colors duration-300
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  Request a callback
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
export default Post;
