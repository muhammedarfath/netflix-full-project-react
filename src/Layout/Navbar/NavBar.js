import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { PiGiftBold } from "react-icons/pi";
import { MdOutlineArrowDropDown } from "react-icons/md";


function NavBar() {
    const hover = "hover:text-subMain transition text-white";
    const Hover = ({isActive}) => (isActive ? 'text-subMain ' : hover )

    return (
        <div className="bg-main shadow-md sticky top-0 z-20" style={{ height: '59px' }}>
            <div className="container mx-auto py-2 px-4 lg:px-2 lg:grid gap-6 grid-cols-7 justify-between items-center">
                {/* logo  */}
                <div className="col-span-1 lg:block hidden">
                    <Link to='/'>
                        <img src="/images/favicon.png" alt="logo" className="w-full h-8 m-2 object-contain " />
                    </Link>
                </div>
                {/* menus */}
                <div className="col-span-3 font-medium text-sm hidden xl:flex items-center space-x-8">
                    <NavLink to='/movies' className={Hover} activeClassName="text-subMain">
                        Movies
                    </NavLink>
                    <NavLink to='/about-us' className={Hover} activeClassName="text-subMain">
                        About Us
                    </NavLink>
                    <NavLink to='/contact-us' className={Hover} activeClassName="text-subMain">
                        Contact Us
                    </NavLink>
                    <NavLink to='/login' className={Hover} activeClassName="text-subMain">
                        Login
                    </NavLink>
                    <NavLink to='/favorite' className={Hover} activeClassName="text-subMain">
                        Favorites
                    </NavLink>
                </div>
                {/* search form */}
                <div className="col-span-3 flex items-center justify-end space-x-4 gap-3">
                    <form className="flex items-center overflow-hidden">
                        <button type="submit" className="text-white p-2">
                        <FaSearch className="text-white cursor-pointer" style={{ fontSize: '20px' }} />
                        </button>
                        <input type="text" placeholder="Search..." className="border-b-2 border-white bg-transparent text-white outline-none focus:border-subMain" />
                    </form>
                    <NavLink to='/kids' className={Hover} activeClassName="text-subMain" style={{ fontSize: '15px' }}>
                        KIDS
                    </NavLink>
                    <IoMdNotifications className="text-white cursor-pointer" style={{ fontSize: '20px' }} />
                    <PiGiftBold className="text-white cursor-pointer" style={{ fontSize: '20px' }} />
                    <div className="col-span-3 flex items-center justify-end space-x-1 gap-0">
                        <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt=""  className="w-full h-8 object-contain " />
                        <MdOutlineArrowDropDown style={{ fontSize: '20px' }}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
