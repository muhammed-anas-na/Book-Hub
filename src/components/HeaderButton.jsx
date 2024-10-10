"use client";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { getLocationFromPointsAndUpdateUser_Fn } from "../../Axios/methods/POST";
import { FaUserAlt } from 'react-icons/fa';
import LocationSearchModal from "./LocationSearchModal";

export default function HeaderButton() {
    const { user, setUser } = useContext(UserContext);
    return (
        <>

       
        <div>
            {
                user?.displayName ? (
                    <>
                    {user?.locationInText ? (<></>) : (<LocationSearchModal/>)}    
                    <Link href={'/profile'}>
                        <FaUserAlt />
                    </Link>
                    </>

                ) : (
                    <Link href={"/signin"} className="hover:cursor-pointer">
                        <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition font-sans">
                            Sign in →
                        </span>
                    </Link>
                )
            }

        </div>
        </>
    )
}