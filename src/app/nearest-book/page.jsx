"use client"
import Header from "@/components/Header";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { GET_SEARCH_RESULT_FN, getBooksNear_FN } from "../../../Axios/methods/POST";
import KeyboardPrompt from "@/components/SearchLabel";
import CommandDialogDemo from "@/components/SearchBar";
import { UserContext } from "../../../context/userContext";
import FilterDistance from "@/components/FilterDistance";
import FilterDistanceLabel from "@/components/FilterDistanceLabel";

export default function SearchResult(){
    const {user} = useContext(UserContext);
    const [data,setNearestBook] = useState([])
    const [open, setOpen] = useState(false);
    const [distance, setDistance] = useState(5)

    async function getNearestBook() {
        console.log("HERE")
        const response = await getBooksNear_FN(distance);
        console.log(response.data);
        setNearestBook(response.data);
    }

    useEffect(()=>{
        if (user?.locationInText) {
            console.log("Getting nearst books");
            getNearestBook()
        }
    },[user,distance])
    console.log("Books==>",data)
    return(
       <>
        <Header/>
        <FilterDistanceLabel setOpen={setOpen}/>
        {
            open && <FilterDistance setOpen={setOpen} distance={distance} setDistance={setDistance}/>
        }
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