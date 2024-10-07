"use client";
import CategoryCard from "@/components/CategoryCard";
import Header from "@/components/Header";
import CommandDialogDemo from "@/components/SearchBar";
import KeyboardPrompt from "@/components/SearchLabel";
import { useState } from "react";


export default function AllCategories(){
  const [openSearchBar, setOpenSearchBar] = useState(false);
    const categories = [
        { name: 'fiction', color: '#57c4ff31', image: "https://picsum.photos/200/300?random=1" },
        { name: 'non-fiction', color: '#da85c731', image: "https://picsum.photos/200/300?random=1" },
        { name: 'mystery', color: '#7fb88133', image: "https://picsum.photos/200/300?random=1" },
        { name: 'fantasy', color: '#ff795736', image: "https://picsum.photos/200/300?random=1" },
        { name: 'biography', color: '#ffb04f45', image: "https://picsum.photos/200/300?random=1" },
        { name: 'science-fiction', color: '#5e4fff31', image: "https://picsum.photos/200/300?random=1" },
        { name: 'romance', color: '#f27ba533', image: "" },
        { name: 'thriller', color: '#ff4e5133', image: "" },
        { name: 'historical', color: '#7e57c233', image: "" },
        { name: 'horror', color: '#ba68c833', image: "" },
        { name: 'self-help', color: '#00bfa533', image: "" },
        { name: 'psychology', color: '#ffa72633', image: "" },
        { name: 'poetry', color: '#8d6e6333', image: "" },
        { name: 'travel', color: '#81d4fa33', image: "" },
        { name: 'philosophy', color: '#ffb30033', image: "" },
        { name: 'children', color: '#29b6f633', image: "" },
        { name: 'young-adult', color: '#ff704333', image: "" },
        { name: 'graphic-novels', color: '#ef535033', image: "" },
        { name: 'comics', color: '#42a5f533', image: "" },
        { name: 'spirituality', color: '#ab47bc33', image: "" },
        { name: 'health', color: '#66bb6a33', image: "" },
        { name: 'cookbooks', color: '#ef6c0033', image: "" },
        { name: 'art', color: '#ba68c833', image: "" },
        { name: 'music', color: '#9575cd33', image: "" },
        { name: 'business', color: '#d4e15733', image: "" },
        { name: 'technology', color: '#29b6f633', image: "" },
        { name: 'politics', color: '#ff704333', image: "" },
        { name: 'education', color: '#7e57c233', image: "" },
        { name: 'law', color: '#ffca2833', image: "" },
        { name: 'science', color: '#42a5f533', image: "" },
        { name: 'religion', color: '#ff704333', image: "" },
        { name: 'sports', color: '#ff525233', image: "" },
        { name: 'adventure', color: '#26a69a33', image: "" },
        { name: 'memoir', color: '#7986cb33', image: "" },
        { name: 'history', color: '#ffcc8033', image: "" },
        { name: 'essays', color: '#7986cb33', image: "" },
        { name: 'nature', color: '#66bb6a33', image: "" },
        { name: 'true-crime', color: '#ff704333', image: "" },
        { name: 'classics', color: '#5e35b133', image: "" },
        { name: 'short-stories', color: '#42a5f533', image: "" },
        { name: 'anthology', color: '#ffca2833', image: "" },
        { name: 'dystopian', color: '#c6282833', image: "" }
      ];
      


    return(
        <>
        <Header/>
        <KeyboardPrompt setOpenSearchBar={setOpenSearchBar}/>
               {
                 openSearchBar &&  <CommandDialogDemo openSearchBar={openSearchBar} setOpenSearchBar={setOpenSearchBar}/>
               }
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-16 lg:mt-28">
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
        {categories.map((cat) => (
          <CategoryCard 
            name={cat.name}
            image={cat.image}
            bgColor={cat.color}
          />
        ))}
      </div>
    </div>
        

        </>
    )
}