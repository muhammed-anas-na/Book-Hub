'use client';
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { UserContext } from "../../../context/userContext";
import BookTitleInput from "@/components/BookTitleInput";
import BookCategoryDropdown from "@/components/BookCategoryInput";
import Header from "@/components/Header";
import BookLocationInput from "@/components/BookLocationInput";
import { AddBook_FN, LOGIN_WITH_GOOGLE_FN } from "../../../Axios/methods/POST";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../firebase";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import Link from "next/link";

export default function AddBooks() {
    const { user, setUser } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [willingTo, setWillingTo] = useState("");
    const [location, setLocation] = useState({
        locationInText: user?.locationInText,
        latitude:"",
        longitude:""
    });
    const [category, setCategory] = useState('');
    const [books, setBooks] = useState([]);
    const [showList, setShowList] = useState(false);
    const [selectedBookCover, setSelectedBookCover] = useState("")

    const router = useRouter();

    async function fetchTitle(e) {
        try {
            setTitle(e.target.value);
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${e.target.value}&key=AIzaSyBax2zIxT8Jy0AwLjPafXkGMQhklARMVoM`);
            const data = await response.json();
            setShowList(true);
            setBooks(data.items || []);
        } catch (err) {
            console.log("Error fetching books : ", err);
        }
    }

    async function handleSignIn(){
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
              } else {
                throw new Error('Failed to set authentication cookie');
              }
          } catch (error) {
            // Handle Errors here.
            console.error("Error during sign-in:", error);
          }
    }

    async function handleAddBooks() {
        setIsLoading(true)
        if(!user){
            console.log("Google login")
            await handleSignIn()
        }
        if(!title){
            toast("Please select a title");
            setIsLoading(false)
            return;
        }else if(!category){
            toast("Select a cateogry");
            setIsLoading(false)
            return;
        }else if(!willingTo){
            toast("Select willing to");
            setIsLoading(false)
            return;
        }else if(!location.locationInText){
            toast("Select a location");
            setIsLoading(false)
            return;
        }
        try{
            const response = await AddBook_FN({
                title,
                description,
                willingTo,
                location,
                selectedBookCover,
                category
            })
            setIsLoading(false)
            setTitle("");
            setDescription("");
            toast(
                <div className="flex gap-3">
                    <h1>📚 Book added </h1>
                    <Link href={'/discover-books'} className="bg-green-600 text-white px-2 rounded-md">View</Link>
                </div>
            );
        }catch(err){
            toast("😭 Something went wrong")
            console.log(err);
            setIsLoading(false);
        }
    }
    
    return (
       <>
       <Header/>
       <Toaster/>
        <div className="flex h-screen max-h-screen items-center px-5 md:p-10 overflow-hidden">
            <div className="flex flex-col md:items-start md:w-1/2 md:ms-32 relative">
                <h1 className="font-bold md:text-3xl text-2xl">
                    Add <span className='bg-orange-400 text-white px-1'>Books</span>
                </h1>
                <p className="text-xs text-gray-500">Increase your collaboration and engagement</p>
                
                <div className="relative w-72">
                        <BookTitleInput 
                        title={title} 
                        setTitle={setTitle} 
                        fetchTitle={fetchTitle}
                        showList={showList}
                        books={books}
                        setShowList={setShowList}
                        setSelectedBookCover={setSelectedBookCover}
                        />
                </div>

                <label htmlFor="category" className="mt-4 text-sm font-semibold">Category</label>
                <BookCategoryDropdown setCategory={setCategory} category={category}/>

                <label htmlFor="description" className="mt-4 text-sm font-semibold">Description</label>
                <textarea 
                    placeholder="(Optional)"
                   value={description}
                   onChange={(e)=>setDescription(e.target.value)}
                    name="description"
                    className="border rounded-lg focus:outline-0 focus:border-green-800 w-72 p-1"
                ></textarea>

                <label htmlFor="willingTo" className="mt-4 text-sm font-semibold">Willing to</label>
                <select 
                name="willingTo"
                onChange={(e)=>setWillingTo(e.target.value)}
                className="border rounded-lg focus:outline-0 focus:border-green-800 w-72 p-1"
                >
                <option value="">Select a category</option>
                    <option  value="Trade">Trade</option>
                    <option value="Sell">Sell</option>
                    <option  value="Rent">Rent</option>
                </select>
                <div className="relative w-72">
                <BookLocationInput location={location.locationInText} setLocation={setLocation}/>
                
                </div>

                <button
                    onClick={handleAddBooks}
                    className="text-center md:w-72 my-5 px-6 bg-black text-white py-3 rounded-lg shadow-lg hover:bg-gray-800 flex gap-3"
                >
                    Add Your Book {isLoading ? (<Loader2 className="animate-spin"/>) : (<>→</>)}
                </button>
            </div>
            <div className="w-1/2 hidden h-screen py-10 lg:block">
                <img src={'image.png'} alt="image" 
                className="object-contain h-full w-full rounded-2xl transition-opacity duration-500 ease-in-out"
                />
            </div>

        </div></>
    );
}