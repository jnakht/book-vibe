import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar  w-10/12 mx-auto mt-4 work-sans">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='listedBooks'>Listed Books</NavLink>
                        <NavLink to='pagesToRead'>Pages to Read</NavLink>
                        <NavLink to='blogs'>Blogs</NavLink>
                        <NavLink to='aboutUs'>About Us</NavLink>
                        <NavLink to='signIn'>Sign In</NavLink>
                        <NavLink to='signUp'>Sign Up</NavLink>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-2xl font-bold text-[#23BE0A]">BookVibe</Link>
            </div>



            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-6 text-[131313CC] text-lg font-normal ">
                        <NavLink to='/' className='btn bg-white border-none rounded-lg'>Home</NavLink>
                        <NavLink to='listedBooks' className='btn bg-white border-none rounded-lg'>Listed Books</NavLink>
                        <NavLink to='pagesToRead' className='btn bg-white border-none rounded-lg'>Pages to Read</NavLink>
                        <NavLink to='blogs' className='btn bg-white border-none rounded-lg'>Blogs</NavLink>
                        <NavLink to='aboutUs' className='btn bg-white border-none rounded-lg'>About Us</NavLink>
                </ul>
            </div>
            <div className="navbar-end  gap-6 hidden md:flex">
                <button className="btn bg-[#2DBD0C] text-[#FFF] text-base font-semibold px-6 py-4">Sign In</button>
                <button className="btn bg-[#4EB2C8] text-[#FFF] text-base font-semibold px-6 py-4">Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;