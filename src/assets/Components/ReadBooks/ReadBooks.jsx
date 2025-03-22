import { useContext, useEffect, useState } from "react";
import { getFromLocalStorage } from "../../../Utility/Utility";
import ReadBooksCard from "../ReadBooksCard/ReadBooksCard";
import { SortByTxtContext } from "../ListedBooks/ListedBooks";


const ReadBooks = () => {
    const [readBooks, setReadBooks] = useState([]);
    // const sortBy = getFromLocalStorage('sortBy');
    
    
    const [sortBy, setSortBy] = useContext(SortByTxtContext);
    useEffect(() => {
        // const list = getFromLocalStorage('read');
        const list = JSON.parse(localStorage.getItem('read')) || [];
       // console.log('this is the list: ', list)
        const newList = [...list];
        if (sortBy === 'default') {
            setReadBooks(newList);
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
        setReadBooks(newList);
        //console.log('this is the sorted List: ', newList)
    } ,[sortBy])
    return (
        <div className="flex flex-col gap-6 mt-8 mb-[100px]">
            {
                readBooks.map(book => <ReadBooksCard book={book}></ReadBooksCard>)
            }
        </div>
    );
};

export default ReadBooks;