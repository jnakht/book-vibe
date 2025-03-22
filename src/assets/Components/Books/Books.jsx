import { createContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

export const BookContext = createContext();

const Books = () => {
    const loadedBooks = useLoaderData();
    const [books, setBooks] = useState([]);
    useEffect( () => {
        setBooks(loadedBooks);
    },[])
    //console.log(books)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 md:mb-14 lg:mb-[130px] space-x-3 space-y-8">
            <BookContext.Provider value={books}>
                {
                    books.map(book => <Book book={book}></Book>)
                }
            </BookContext.Provider>
        </div>
    );
};

export default Books;