import { useContext, useEffect, useState } from "react";
import { BookContext } from "../Books/Books";
import { redirect, useLoaderData, useParams } from "react-router-dom";
import '../../../App.css'
import toast, { Toaster } from 'react-hot-toast';
import { getFromLocalStorage, setToLocalStorage } from "../../../Utility/Utility";

const BookDetails = () => {
    const books = useLoaderData();
    const id = parseInt(useParams().id);
    const [book, setBook] = useState(null)
    // console.log("these are the books: ", books)
    useEffect(() => {
        const bookObj = books.find(book => book.bookId === id);
        setBook(bookObj);
        // console.log('book id using use Params: ', id);
        // console.log(" this is filtered book object: ",bookObj)
       // console.log('this is the book object: ', bookObj)
       // console.log("this is the book: ", book)
    }, [books, id])
    const handleReadButton = () => {
        setToLocalStorage('read', book);
        // toast.success('Marked As Read')
    }
    const handleWishlistButton = () => {
        const readList = getFromLocalStorage('read');
        let alreadyRead = false;
        readList.map(individualBook => {
            if (individualBook.bookId === book.bookId) {
                alreadyRead = true;
            }
        })
        if (alreadyRead) {
            toast.error("Can't add to Wishlist");
        }
        else {
            setToLocalStorage('wishlist', book);
        }
        
        // toast.success('Added to Wishlist')
    }
    // console.log("this is id go: ", id)
    // const {bookId, bookName, author, image, category, publisher, rating, tags, review, totalPages, yearOfPublishing} = book;
    return (
        <div className="flex flex-col md:flex-row w-10/12 mx-auto mt-[24px]  mb-[100px]">
            <div className="w-[50%]  ">
                <img className="h-[600px] " src={book?.image} alt="" />
            </div>
            <div className="w-[50%]  pl-8">
                <h3 className="text-black playfair-display text-[40px] font-extrabold mb-4">{book?.bookName}</h3>
                <p className="text-[#131313CC] work-sans text-xl font-medium mb-6">By: {book?.author}</p>
                <hr />
                <p className="text-[#131313CC] work-sans text-xl font-medium my-4">{book?.category}</p>
                <hr />
                <p className="text-[#131313CC] work-sans text-base font-normal my-6"><span className="text-black font-bold">Review:</span> {book?.review}</p>
                <div className="flex items-center gap-4 mb-6">
                     <p className="text-black work-sans text-base font-bold">Tags</p>
                    {   
                    book?.tags?.map(tag => <button className="bg-[#23BE0A0D] px-4 py-2 rounded-[30px] text-[#23BE0A] work-sans text-base font-medium ">{tag}</button>)
                   }
                </div>
                <hr />
                <p className="text-[#131313CC] work-sans text-base font-normal mt-6">Number of Pages: <span className="text-[#131313] work-sans text-base font-semibold">{book?.totalPages}</span></p>
                <p className="text-[#131313CC] work-sans text-base font-normal mt-3">Publisher: <span className="text-[#131313] work-sans text-base font-semibold">{book?.publisher}</span></p>
                <p className="text-[#131313CC] work-sans text-base font-normal mt-3">Year of Publishing: <span className="text-[#131313] work-sans text-base font-semibold">{book?.yearOfPublishing}</span></p>
                <p className="text-[#131313CC] work-sans text-base font-normal mt-3">Rating: <span className="text-[#131313] work-sans text-base font-semibold">{book?.rating}</span></p>
                <div className="mt-8">
                    <button onClick={handleReadButton} className="btn text-black mr-2">Read</button>
                    <button onClick={handleWishlistButton} className="btn bg-[#50B1C9] text-white">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;