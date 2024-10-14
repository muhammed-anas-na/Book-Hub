"use client"
import Header from "@/components/Header";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GET_SEARCH_RESULT_FN } from "../../../Axios/methods/POST";

export default function SearchResult({ searchParams }){
    const query = searchParams.q;
    const type = searchParams.type;
    const count = searchParams.count;
    const [data,setData] = useState([])
    useEffect(()=>{
        (async function(){
            const response = await GET_SEARCH_RESULT_FN({
                query,
                type
            })
            console.log("Data =>",response.data);
            setData(response.data);
        })()
    },[])
    console.log("Books==>",data)
    return(
       <>
        <Header/>


        <div className="mt-28 flex justify-center mx-44 flex-wrap gap-5">
            {
                data?.map((val)=>{
                    return(
                        <Link href={`/discover-books/${val._id}`}
                        className="md:min-w-[250px] md:max-w-[250px] bg-white rounded-lg shadow-lg md:p-4 flex-shrink-0 border-2 p-2"
                      >
                        <img
                          src={val.selectedBookCover}
                          className="w-60 h-72 object-fill rounded-lg"
                        />
                        <h3 className="md:mt-4 text-base md:text-lg font-semibold">{val.title}</h3>
                        <p className='text-xs text-gray-500 hover:cursor-pointer max-w-[250px]' title={val.locationInText}>📍 {val.locationInText.slice(0,20)}</p>
                      </Link>
                    )
                })
            }
        </div>
       </>
    )
}