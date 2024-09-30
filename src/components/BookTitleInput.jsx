export default function BookTitleInput({title, setTitle, fetchTitle, showList, books, setShowList, setSelectedBookCover}) {
    return (
        <>
            <label htmlFor="title" className="mt-8 text-sm font-semibold">Title</label>
            <input
                value={title}
                onChange={(e) => fetchTitle(e)}
                type="text"
                name="title"
                className="border rounded-lg focus:outline-0 focus:border-green-800 w-full p-1"

            />
            {showList && books.length > 0 && (
                <div className="absolute w-full mt-1 border bg-white rounded-lg shadow-lg max-h-40 overflow-y-auto z-10">
                    {books.map((book) => (
                        <div
                            key={book.id}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                                setTitle(book.volumeInfo.title);
                                setShowList(false);
                                const thumbnail = book.volumeInfo.imageLinks?.thumbnail || '/image.png'
                                setSelectedBookCover(thumbnail);

                            }}
                        >
                            {book.volumeInfo.title}
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}