"use client";
import BookLocationInput from "@/components/BookLocationInput";
import Header from "@/components/Header";
import Row from "@/components/Row";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/userContext";
import { GET_USER_BOOKS_FN } from "../../../Axios/methods/POST";


export default function Profile() {
    const {user, setUser} = useContext(UserContext);
    console.log(user)

    useEffect(()=>{
        (async function(){
            console.log("Getting user books")
            const response = await GET_USER_BOOKS_FN(user?._id)
            console.log(response);
        })()
    },[])
    
    return (
        <>
            <Header />

            <div className="flex h-screen max-h-screen items-center p-10 overflow-hidden">
                <div className="flex flex-col justify-center items-center md:items-start md:w-1/2 md:ms-32">
                    <h1 className="flex-start font-bold md:text-3xl text-2xl">
                        Profile</h1>
                    <p className="text-xs text-gray-500">Increase your collabration and engagment</p>
                    <label htmlFor="name" className="mt-8 text-sm font-semibold">Name</label>
                    <input
                        value={user?.displayName}
                        type="text"
                        name="name"
                        className="border rounded-lg focus:outline-0 focus:border-green-800 w-72 p-1" />

                    <label htmlFor="name" className="mt-8 text-sm font-semibold">Email</label>
                    <input
                    value={user?.email}
                        type="email"
                        name="email"
                        className="border rounded-lg focus:outline-0 focus:border-green-800 w-72 p-1" />

                    <BookLocationInput />
                    <button
                        className="md:w-72 my-5 bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 flex gap-3">
                        Update profile →
                    </button>


                </div>
                <div className="w-1/2 hidden h-screen py-10 lg:block">
                    <img src="/image.png" alt="image" className="object-cover h-full w-full rounded-2xl" />
                </div>
            </div>

            <div>
                <Row title={"Your Books"}/>
            </div>
        </>
    )
}