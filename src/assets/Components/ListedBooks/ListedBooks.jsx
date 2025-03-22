import ListedBooksTitle from "../ListedBooksTitle/ListedBooksTitle";
import { FaAngleDown } from "react-icons/fa";
import '../../../App.css'
import { Link, Outlet } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

export const SortByTxtContext = createContext('default');
const ListedBooks = () => {
    const [activeCard, setActiveCard] = useState(0);
    const [sortBy, setSortBy] = useState('default');
    useEffect(() => {
        localStorage.setItem('sortBy', JSON.stringify(sortBy));
    }, [sortBy])

    const handleSortBy = (e) => {
        setSortBy(e.target.value);
    }
    return (
        <div className="w-10/12 mx-auto">
            <ListedBooksTitle></ListedBooksTitle>
            {/* select menu start */}
            <div className=" mt-8 mb-[56px]   flex  justify-center items-center border-none focus:outline-none focus:border-none text-center">
            <select onChange={handleSortBy} defaultValue="Sort By" className="select  outline-none   bg-[#23BE0A] text-white work-sans text-lg font-semibold focus:outline-none focus:border-none text-center">
               
               <option value='default'  className="bg-gray-200 text-[#131313CC] work-sans text-base font-normal">Sort By</option>
                <option value='rating'   className="bg-gray-200 text-[#131313CC] work-sans text-base font-normal">Rating</option>
                <option value='noOfPages' className="bg-gray-200 text-[#131313CC] work-sans text-base font-normal">Number Of Pages</option>
                <option value='publisherYear' className="bg-gray-200 text-[#131313CC] work-sans text-base font-normal">Publisher Year</option>
               
            </select>
            </div>
            {/* select menu end */}
            

            {/* card start */}
            <div className="flex items-center  overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  dark:bg-gray-100 dark:text-gray-800 ">
                <Link onClick={() => setActiveCard(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  dark:border-gray-600 dark:text-gray-600 ${activeCard === 0 ? 'border border-b-0 rounded-t-lg ' : 'border-b'}`}>

                    <span>Read Books</span>
                </Link>
                <Link to='/listedBooks/wishlist' onClick={() => setActiveCard(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  dark:border-gray-600 dark:text-gray-600 ${activeCard === 1 ? 'border border-b-0 rounded-t-lg' : 'border-b'}`}>

                    <span>Wishlist</span>
                </Link>

            </div>
            <SortByTxtContext.Provider value={[sortBy, setSortBy]}>
                {/* card end */}
                <Outlet></Outlet>
            </SortByTxtContext.Provider>
        </div>
    );
};

export default ListedBooks;