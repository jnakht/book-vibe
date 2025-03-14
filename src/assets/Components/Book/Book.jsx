import { useContext } from "react";
import { BookContext } from "../Books/Books";
import '../../../App.css'
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Book = ({book}) => {
    const {bookId, bookName, author, image, category, publisher, rating, tags} = book;

    return (
        <Link to={`/book/${bookId}`}>
            <div className="card bg-base-100 md:w-96 h-[500px] shadow-sm hover:border-2 hover:border-[#23BE0A] transition hover:scale-105 grow">
                <figure className="px-10 pt-10 rounded-2xl">
                    <img
                        src={image}
                        className="rounded-xl h-[182px] w-[303px]" />
                </figure>
                <div className="card-body  ">
                    <div className="flex flex-wrap gap-2">
                        {
                            tags.map(tag => <button className="bg-[#23BE0A0D] px-4 py-2 rounded-[30px] text-[#23BE0A] work-sans text-base font-medium ">{tag}</button>)
                        }
                    </div>
                    <h2 className="text-[#131313] playfair-display text-2xl font-bold">{bookName}</h2>
                    <p className="text-[#131313CC] work-sans text-base font-medium">By: {author}</p>
                    <hr className="border-dashed" />
                    <div className="card-actions text-[#131313] work-sans text-base font-medium">
                        <p>{category}</p>
                        <div className="flex gap-1 justify-center items-center">
                            <p>{rating}</p>
                            <FaRegStar />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;