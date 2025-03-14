import { useContext } from "react";
import { BookContext } from "../Books/Books";


const Book = () => {
    const books = useContext(BookContext);
    return (
        <div>
            <h3>Books: {books.length}</h3>
        </div>
    );
};

export default Book;