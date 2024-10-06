"use client";
import { useEffect, useState } from "react";
import { getBooksNear_FN, getSuggestionBooks_FN } from "../../../Axios/methods/POST";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import ShimmerBookRow from "@/components/RowShimmer";

const { default: Header } = require("@/components/Header")
const { default: Row } = require("@/components/Row")

const DiscoverBook = () => {
    const [nearestBook, setNearestBook] = useState([]);
    const [suggestedBooks, setSuggestedBooks] = useState([]);
    const { user } = useContext(UserContext);
    async function getNearestBook() {
        console.log("HERE")
        const response = await getBooksNear_FN();
        console.log(response.data);
        setNearestBook(response.data);
    }

    useEffect(()=>{
        if (user?.locationInText) {
            console.log("Getting nearst books");
            getNearestBook()
        }
    },[user])
    useEffect(()=>{
        async function getBooks(){
            const response = await getSuggestionBooks_FN();
            console.log(response.data);
            setSuggestedBooks(response.data);
        }
        getBooks();
    },[])

    return (
        <>
            <Header />
            <div className="mt-20">
                {
                    nearestBook.length > 0 && <Row title={"Nearest Books"} booksList={nearestBook} />
                }
                {
                    suggestedBooks.length > 0 ? (
                        <Row title={"Suggested Books"} booksList={suggestedBooks} />
                    ) : (
                        <ShimmerBookRow/>
                    )
                }

                
            </div>
        </>
    )
}

export default DiscoverBook;