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
    console.log(books)
    return (
        <div>
            <BookContext.Provider value={books}>
                {
                    books.map(book => <Book book={book}></Book>)
                }
            </BookContext.Provider>
        </div>
    );
};

export default Books;