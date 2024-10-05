import { useState, useContext } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { LOGIN_WITH_GOOGLE_FN, Request_CallBack_FN } from "../../Axios/methods/POST";
import { UserContext } from "../../context/userContext";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function CallbackModal({ setShowModal, bookId }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { user, setUser } = useContext(UserContext)
    async function handleSubmit() {
        setIsLoading(true)
        if (!user) {
            try {
                const result = await signInWithPopup(auth, provider);
                const response = await LOGIN_WITH_GOOGLE_FN({
                    token: result.user.accessToken,
                    displayName: result.user.displayName,
                    email: result.user.email,
                    photURL: result.user.photoURL,
                })
                if (response.data.success) {
                    setUser({
                        token: result.user.accessToken,
                        displayName: result.user.displayName,
                        email: result.user.email,
                        photURL: result.user.photoURL,
                    })
                    toast("✅ Login Success")
                } else {
                    setIsLoading(false)
                    throw new Error('Failed to set authentication cookie');
                    return;
                }
            } catch (error) {
                console.error("Error during sign-in:", error);
                setIsLoading(false)
                return;
            }
        }

        try {
            await Request_CallBack_FN({
                bookId,
                number,
                name,
            })
            toast("📚 Request send successfully")
            setIsLoading(false)
        } catch (err) {
            console.log(err);
            setIsLoading(false)
        }
    }

    return (
        <div className="fixed inset-0 bg-gray-700 sha bg-opacity-50 flex justify-center items-center z-50">
<Toaster/>
            <div className="bg-white rounded-lg shadow-lg p-6 w-80 relative">
                <IoCloseSharp className="absolute right-3 top-3 hover:cursor-pointer" onClick={() => { setShowModal(false) }} />
                <h2 className="text-lg font-semibold mb-4 text-center">Requeset for callback</h2>

                <div className="mb-4">
                    <label htmlFor="name" className="mt-8 text-sm font-semibold">Name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        name="name"
                        className="border rounded-lg focus:outline-0 focus:border-green-800 w-72 p-1" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="mt-8 text-sm font-semibold">Number</label>
                    <input
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        type="number"
                        name="number"
                        className="border rounded-lg focus:outline-0 focus:border-green-800 w-72 p-1" />
                    <small className="text-xs">This number will be visible to the book owner.</small>
                </div>
                <button className="w-full bg-green-800 text-white py-2 rounded-lg flex gap-3 justify-center" onClick={handleSubmit}>
                    Submit {
                        isLoading ? (<Loader2 className="animate-spin"/>) : (<>→</>)
                    }
                </button>
            </div>
        </div>
    )
}