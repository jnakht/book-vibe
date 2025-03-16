import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../../Utility/Utility";
import ReadBooksCard from "../ReadBooksCard/ReadBooksCard";


const RecentlyViewed = () => {
    
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const recents = getFromLocalStorage('recents');
        recents.reverse();
        setBooks(recents);
    } ,[])
    return (
        <div className="w-10/12 mx-auto mt-8 mb-8 flex flex-col gap-4">
            
            {
                books.map(book => <ReadBooksCard book={book}></ReadBooksCard>)
            }
        </div>
    );
};

export default RecentlyViewed;