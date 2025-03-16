import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../../Utility/Utility";
import ReadBooksCard from "../ReadBooksCard/ReadBooksCard";


const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
        useEffect(() => {
            const list = getFromLocalStorage('wishlist');
            setWishlist(list);
        } ,[])
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