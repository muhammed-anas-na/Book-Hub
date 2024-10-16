import CategoryCard from "@/components/CategoryCard";
import Header from "@/components/Header";


export default function AllCategories(){
  const categories = [
    { name: 'TextBooks', color: '#8d6e6333', image: "", url: `/search?q=text-Books&type=category` },
    { name: 'fiction', color: '#57c4ff31', image: "", url: `/search?q=fiction&type=category` },
    { name: 'non-fiction', color: '#da85c731', image: "", url: `/search?q=non-fiction&type=category` },
    { name: 'mystery', color: '#7fb88133', image: "", url: `/search?q=mystery&type=category` },
    { name: 'fantasy', color: '#ff795736', image: "", url: `/search?q=fantasy&type=category` },
    { name: 'biography', color: '#ffb04f45', image: "", url: `/search?q=biography&type=category` },
    { name: 'science-fiction', color: '#5e4fff31', image: "", url: `/search?q=science-fiction&type=category` },
    { name: 'romance', color: '#f27ba533', image: "", url: `/search?q=romance&type=category` },
    { name: 'thriller', color: '#ff4e5133', image: "", url: `/search?q=thriller&type=category` },
    { name: 'historical', color: '#7e57c233', image: "", url: `/search?q=historical&type=category` },
    { name: 'horror', color: '#ba68c833', image: "", url: `/search?q=horror&type=category` },
    { name: 'self-help', color: '#00bfa533', image: "", url: `/search?q=self-help&type=category` },
    { name: 'psychology', color: '#ffa72633', image: "", url: `/search?q=psychology&type=category` },
    { name: 'poetry', color: '#8d6e6333', image: "", url: `/search?q=poetry&type=category` },
    { name: 'travel', color: '#81d4fa33', image: "", url: `/search?q=travel&type=category` },
    { name: 'philosophy', color: '#ffb30033', image: "", url: `/search?q=philosophy&type=category` },
    { name: 'children', color: '#29b6f633', image: "", url: `/search?q=children&type=category` },
    { name: 'young-adult', color: '#ff704333', image: "", url: `/search?q=young-adult&type=category` },
    { name: 'graphic-novels', color: '#ef535033', image: "", url: `/search?q=graphic-novels&type=category` },
    { name: 'comics', color: '#42a5f533', image: "", url: `/search?q=comics&type=category` },
    { name: 'spirituality', color: '#ab47bc33', image: "", url: `/search?q=spirituality&type=category` },
    { name: 'health', color: '#66bb6a33', image: "", url: `/search?q=health&type=category` },
    { name: 'cookbooks', color: '#ef6c0033', image: "", url: `/search?q=cookbooks&type=category` },
    { name: 'art', color: '#ba68c833', image: "", url: `/search?q=art&type=category` },
    { name: 'music', color: '#9575cd33', image: "", url: `/search?q=music&type=category` },
    { name: 'business', color: '#d4e15733', image: "", url: `/search?q=business&type=category` },
    { name: 'technology', color: '#29b6f633', image: "", url: `/search?q=technology&type=category` },
    { name: 'politics', color: '#ff704333', image: "", url: `/search?q=politics&type=category` },
    { name: 'education', color: '#7e57c233', image: "", url: `/search?q=education&type=category` },
    { name: 'law', color: '#ffca2833', image: "", url: `/search?q=law&type=category` },
    { name: 'science', color: '#42a5f533', image: "", url: `/search?q=science&type=category` },
    { name: 'religion', color: '#ff704333', image: "", url: `/search?q=religion&type=category` },
    { name: 'sports', color: '#ff525233', image: "", url: `/search?q=sports&type=category` },
    { name: 'adventure', color: '#26a69a33', image: "", url: `/search?q=adventure&type=category` },
    { name: 'memoir', color: '#7986cb33', image: "", url: `/search?q=memoir&type=category` },
    { name: 'history', color: '#ffcc8033', image: "", url: `/search?q=history&type=category` },
    { name: 'essays', color: '#7986cb33', image: "", url: `/search?q=essays&type=category` },
    { name: 'nature', color: '#66bb6a33', image: "", url: `/search?q=nature&type=category` },
    { name: 'true-crime', color: '#ff704333', image: "", url: `/search?q=true-crime&type=category` },
    { name: 'classics', color: '#5e35b133', image: "", url: `/search?q=classics&type=category` },
    { name: 'short-stories', color: '#42a5f533', image: "", url: `/search?q=short-stories&type=category` },
    { name: 'anthology', color: '#ffca2833', image: "", url: `/search?q=anthology&type=category` },
    { name: 'dystopian', color: '#c6282833', image: "", url: `/search?q=dystopian&type=category` }
  ];

    return(
        <>
        <Header/>
        {/* <KeyboardPrompt setOpenSearchBar={setOpenSearchBar}/>
               {
                 openSearchBar &&  <CommandDialogDemo openSearchBar={openSearchBar} setOpenSearchBar={setOpenSearchBar}/>
               } */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-16 lg:mt-28">
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
        {categories.map((cat) => (
          <CategoryCard 
            name={cat.name}
            image={cat.image}
            bgColor={cat.color}
            url={cat.url}
          />
        ))}
      </div>
    </div>
        

        </>
    )
}