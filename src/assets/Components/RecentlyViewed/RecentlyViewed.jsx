import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../../Utility/Utility";
import ReadBooksCard from "../ReadBooksCard/ReadBooksCard";
import { Helmet } from "react-helmet-async";


const RecentlyViewed = () => {
    
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const recents = getFromLocalStorage('recents');
        recents.reverse();
        setBooks(recents);
    } ,[])
    return (
        <div className="w-10/12 mx-auto mt-8 mb-8 flex flex-col gap-4">
            <Helmet>
                <title>BookVibe - Recently Viewed</title>
            </Helmet>
            {
                books.map(book => <ReadBooksCard book={book}></ReadBooksCard>)
            }
        </div>
    );
};

export default RecentlyViewed;