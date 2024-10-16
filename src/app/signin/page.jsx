'use client';
import { auth, provider,signInWithPopup } from "../../../firebase";
import { useState,useContext } from "react";
import { UserContext } from "../../../context/userContext";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { LOGIN_WITH_GOOGLE_FN } from "../../../Axios/methods/POST";

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const {setUser} = useContext(UserContext);
    const router = useRouter();
    async function handleSignIn(){
        setIsLoading(true);
        try {
            const result = await signInWithPopup(auth, provider);
            const response = await LOGIN_WITH_GOOGLE_FN({
                token:result.user.accessToken,
                displayName:result.user.displayName,
                email: result.user.email,
                photURL: result.user.photoURL,
            })
            if (response.data.success) {
                setUser({
                    token:result.user.accessToken,
                    displayName:result.user.displayName,
                    email: result.user.email,
                    photURL: result.user.photoURL,
                })
                setIsLoading(false);
                router.push('/');
              } else {
                setIsLoading(false);
                throw new Error('Failed to set authentication cookie');
              }
            setIsLoading(false)
            router.push('/')
          } catch (error) {
            // Handle Errors here.
            console.error("Error during sign-in:", error);
            setIsLoading(false);
          }
    }
    return (
        <div className="flex h-screen items-center justify-center p-10 overflow-hidden">
            <div className="flex flex-col justify-center items-start md:items-start md:w-1/2 md:ms-32">
                <h1 className="flex-start font-bold md:text-3xl text-2xl">
                    Read <span className='bg-[#F76B19] text-white px-1'>In</span></h1>
                <p className="text-xs text-gray-500">Connect with the community of Book lovers</p>
                <button 
                onClick={handleSignIn}
                className="md:w-72 my-5 bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 flex gap-3">
                    Signin with Google {
                        isLoading ? (<Loader2 className="animate-spin"/>) : (<>→</>)
                    }
                </button>

            </div>
            <div className="w-1/2 hidden h-screen py-10 lg:block">
                <img src="/image.png" alt="image" className="object-cover h-full w-full rounded-2xl" />
            </div>
        </div>
    )
}