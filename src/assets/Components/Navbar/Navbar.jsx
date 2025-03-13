import { NavLink } from "react-router-dom";


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
                        <NavLink>Home</NavLink>
                        <NavLink>Listed Books</NavLink>
                        <NavLink>Pages to Read</NavLink>
                        <NavLink>Blogs</NavLink>
                        <NavLink>About Us</NavLink>
                        <NavLink>Sign In</NavLink>
                        <NavLink>Sign Up</NavLink>
                    </ul>
                </div>
                <a className="btn btn-ghost text-[#131313] text-2xl font-bold">BookVibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-6 text-[131313CC] text-lg font-normal ">
                        <NavLink className='btn bg-white border-none'>Home</NavLink>
                        <NavLink className='btn bg-white border-none'>Listed Books</NavLink>
                        <NavLink className='btn bg-white border-none'>Pages to Read</NavLink>
                        <NavLink className='btn bg-white border-none'>Blogs</NavLink>
                        <NavLink className='btn bg-white border-none'>About Us</NavLink>
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