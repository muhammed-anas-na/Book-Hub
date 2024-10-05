"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { GET_BOOK_DEATILS_BY_ID_FN } from '../../../../Axios/methods/POST';
import Header from '@/components/Header';
import { BiSolidUserCircle } from "react-icons/bi";
import CallbackModal from '@/components/CallBackModal';
const Post = () => {
  const {bookId} = useParams();
  const [book, setBooks]= useState();
  const [showModal, setShowModal] = useState(false)
  useEffect(()=>{
    (async function(){
       try{
        const response = await GET_BOOK_DEATILS_BY_ID_FN(bookId);
        setBooks(response.data);
        
       }catch(err){
        console.log(err);
       }
    })()
  },[])
  console.log("Book == > ",book)
  return (
    <>
    <Header/>
    {
      showModal && <CallbackModal setShowModal={setShowModal} bookId={bookId}/>
    }
    <div className='mt-20 mx-36 py-8 px-20 flex justify-start font-sans'>
        <div className='w-[50%]'>
          <img src={book?.selectedBookCover} alt="cover-image" className='w-3/4' />
        </div>
        <div className='flex flex-col'>
          <h1 className='text-3xl text-gray-500'>{book?.title}</h1>
          <div className='flex items-center gap-3'>
            <BiSolidUserCircle className='w-12 h-20'/>
            <h1>Anas</h1>
          </div>
          <p>{book?.description}</p>
          <div className='my-3 bg-rose-400 p-2 w-20 text-white rounded-lg'>
            <p>{book?.willingTo}</p>
          </div>
          <button className='w-full bg-black text-white my-10 py-3 rounded-md' onClick={()=>setShowModal(true)}>
            Request a callback
          </button>
        </div>
    </div>
    </>
  );
};
export default Post;
