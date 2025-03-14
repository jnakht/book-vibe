import { useContext, useEffect, useState } from "react";
import { BookContext } from "../Books/Books";
import { useLoaderData, useParams } from "react-router-dom";


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
        console.log('this is the book object: ', bookObj)
        console.log("this is the book: ", book)
    }, [books, id])
    // console.log("this is id go: ", id)
    // const {bookId, bookName, author, image, category, publisher, rating, tags, review, totalPages, yearOfPublishing} = book;
    return (
        <div className="flex w-10/12 mx-auto">
            <div className="w-[50%] h-[600px] ">
                <img className="h-[600px] flex justify-center items-center" src={book?.image} alt="" />
            </div>
            <div className="w-[50%] h-[600px]">
                <h3>{book?.title}</h3>
                <p>By: {book?.author}</p>
                <p>{book?.category}</p>
                <p>Review: {book?.review}</p>
                <p>Tags</p>
                {   
                    book?.tags?.map(tag => <button className="bg-[#23BE0A0D] px-4 py-2 rounded-[30px] text-[#23BE0A] work-sans text-base font-medium ">{tag}</button>)
                }
                <p>Number of Pages: {book?.totalPages}</p>
                <p>Publisher: {book?.publisher}</p>
                <p>Year of Publishing: {book?.yearOfPublishing}</p>
                <p>Rating: {book?.rating}</p>
                <div>
                    <button>Read</button>
                    <button>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;