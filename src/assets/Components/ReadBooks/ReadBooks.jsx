import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../../Utility/Utility";
import ReadBooksCard from "../ReadBooksCard/ReadBooksCard";


const ReadBooks = () => {
    const [readBooks, setReadBooks] = useState([]);
    useEffect(() => {
        const list = getFromLocalStorage('read');
        setReadBooks(list);
    } ,[])
    return (
        <div className="flex flex-col gap-6 mt-8 mb-[100px]">
            {
                readBooks.map(book => <ReadBooksCard book={book}></ReadBooksCard>)
            }
        </div>
    );
};

export default ReadBooks;