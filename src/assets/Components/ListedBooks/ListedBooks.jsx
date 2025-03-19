import ListedBooksTitle from "../ListedBooksTitle/ListedBooksTitle";
import { FaAngleDown } from "react-icons/fa";
import '../../../App.css'
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
const ListedBooks = () => {
    const [activeCard, setActiveCard] = useState(0);
    const [sortBy, setSortBy] = useState('default');
    useEffect(() => {
        localStorage.setItem('sortBy', JSON.stringify(sortBy));
    }, [sortBy])
    return (
        <div className="w-10/12 mx-auto">
            <ListedBooksTitle></ListedBooksTitle>
            {/* select menu start */}
            <div className=" mt-8 mb-[56px]   flex  justify-center items-center border-none focus:outline-none focus:border-none text-center">
            <select defaultValue="Sort By" className="select  outline-none   bg-[#23BE0A] text-white work-sans text-lg font-semibold focus:outline-none focus:border-none text-center">
               <div className="">
               <option className="bg-gray-200 text-[#131313CC] work-sans text-base font-normal"><button>Sort By<FaAngleDown /></button></option>
                <option className="bg-gray-200 text-[#131313CC] work-sans text-base font-normal"><button className="bg-gray-200 text-[#131313CC] work-sans text-base font-normal" onClick={() => setSortBy('rating')}>Rating</button></option>
                <option className="bg-gray-200 text-[#131313CC] work-sans text-base font-normal"><button onClick={() => setSortBy('noOfPages')}>Number Of Pages</button></option>
                <option className="bg-gray-200 text-[#131313CC] work-sans text-base font-normal"><button onClick={() => setSortBy('publisherYear')}>Publisher Year</button></option>
               </div>
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
            {/* card end */}
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;