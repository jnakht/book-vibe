import { useContext, useEffect, useState } from "react";
import { getFromLocalStorage } from "../../../Utility/Utility";
import ReadBooksCard from "../ReadBooksCard/ReadBooksCard";
import { SortByTxtContext } from "../ListedBooks/ListedBooks";


const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);

    const [sortBy, setSortBy] = useContext(SortByTxtContext);
    // useEffect(() => {
    //     const list = getFromLocalStorage('wishlist');
    //     setWishlist(list);
    // }, [])
    useEffect(() => {
        // console.log('sort by text using context api and in wishlist: ', sortBy);
        
        const list = JSON.parse(localStorage.getItem('wishlist')) || [];
        
        const newList = [...list];
        if (sortBy === 'default') {
            setWishlist(newList);
        }
        else if (sortBy === 'rating') {
            newList.sort((a, b) => b.rating - a.rating);
        }
        else if (sortBy === 'noOfPages') {
            newList.sort((a, b) => b.totalPages - a.totalPages);
        }
        else if (sortBy === 'publisherYear') {
            newList.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }
        setWishlist(newList);
    }, [sortBy])
    return (
        <div className="flex flex-col gap-6 mt-8 mb-[100px]">
            {
                // the read books card can be reused in wishlist card
                wishlist.map(book => <ReadBooksCard book={book}></ReadBooksCard>)
            }
        </div>
    );
};

export default Wishlist;