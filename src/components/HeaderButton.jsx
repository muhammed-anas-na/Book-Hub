"use client";
import { useState, useContext } from "react";
import { UserContext } from "../../context/userContext";
import Link from "next/link";

export default function HeaderButton() {
    const { user } = useContext(UserContext);
    console.log("User in header" , user);
    return (
        <div>
            {
                user?.displayName ? (
                    <button>
                        <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition font-sans">
                            Locate me →
                        </span>
                    </button>
                ) : (
                    <Link href={"/signin"}>
                        <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition font-sans">
                            Sign in →
                        </span>
                    </Link>
                )
            }
        </div>
    )
}