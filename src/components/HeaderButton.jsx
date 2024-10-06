"use client";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { getLocationFromPointsAndUpdateUser_Fn } from "../../Axios/methods/POST";
import { FaUserAlt } from 'react-icons/fa';

export default function HeaderButton() {
    const { user, setUser } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    async function getLocation() {
        setIsLoading(true);
        console.log("HI")
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                console.log("Latitude: " + latitude);
                console.log("Longitude: " + longitude);
                try{
                    const response = await getLocationFromPointsAndUpdateUser_Fn(latitude, longitude);
                    const location = response.data.locationName;
                    console.log(location)
                    setUser({ ...user, locationInText:location, latitude, longitude})
                    setIsLoading(false);
                }catch(err){
                    setIsLoading(false)
                    console.log(err);
                }
            }, (err) => {
                console.log(err);
                setIsLoading(false);
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
            setIsLoading(false);
        }
    }

    return (
        <div>
            {
                user?.displayName ? (
                    user?.locationInText ? (
                        <div className="flex items-center gap-2">
                        <button>
                            <span title={user.locationInText} className="items-center bg-black text-white px-2 py-1 rounded-full text-sm font-semibold hover:bg-gray-800 transition font-sans flex gap-2">
                                {user.locationInText.slice(0,10)}
                            </span>
                        </button>
                            <Link href={'/profile'}>
                            <FaUserAlt/>
                            </Link>
                        </div>
                        
                    ) : (
                        <button onClick={getLocation}>
                            <span className="items-center bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition font-sans flex gap-2">
                                Locate me {isLoading ? (<Loader2 className="animate-spin w-3" />) : (<>→</>)}
                            </span>
                        </button>
                    )
                ) : (
                    <Link href={"/signin"} className="hover:cursor-pointer">
                        <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition font-sans">
                            Sign in →
                        </span>
                    </Link>
                )
            }

        </div>
    )
}