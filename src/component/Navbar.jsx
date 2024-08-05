import React, { useState } from 'react'
// import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FiUser } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { LuFolderClosed } from "react-icons/lu";
import { CgShoppingBag } from "react-icons/cg";
import logo from '../assets/oscar_image/header-logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const[showmenu,setShowMenu] =useState(true)
  return (
    <nav className="bg-[#524BAD] z-20 sticky top-0 left-0 right-0 text-[#DFDFDF] pt-4 md:px-20 md:py-4">
      <div className="container mx-auto flex gap-y-3 flex-col ">
        <div className='w-full items-center px-3 md:px-0 justify-between flex border-b-2 border-white border-opacity-60 pb-4'>
        <div className="lg:flex hidden relative items-center">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-100"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </div>
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-transparent ml-10 w-full text-white placeholder:text-[10px] placeholder:font-normal placeholder-[#F7ECDBCC] placeholder:text-opacity-45 focus:outline-none"
          />
        </div>






        {/* <p className='text-[#F9F4E8] font-normal text-sm sm:text-xl md:text-3xl gafata_font lg:text-4xl'>OSCAR PRINITNG</p> */}
        <div><img className='cursor-pointer w-[70%] md:w-full' src={logo} alt="" /></div>
        <div className="lg:flex hidden items-center space-x-4 justify-end">
        <FiUser/>
        <FiHeart/>
        <div className='relative'>
        <CgShoppingBag/>
        <div className='absolute w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[8px] font-medium -top-2.5 -right-3'>
            0
        </div>
        </div>
        <LuFolderClosed/>
        </div>


        <div className='flex lg:hidden' >{showmenu ? <GiHamburgerMenu onClick={()=>setShowMenu(!showmenu)} size={24} /> : <RxCross2 onClick={()=>setShowMenu(!showmenu)} size={24} />}</div>
        </div>
        <div>
   
        {/* <div className="md:flex h-full md:flex-row hidden md:items-center md:justify-between text-xs lg:text-sm font-normal">
          <Link to="#" className="hover:text-white">BUSINESS CARDS</Link>
          <Link to="#" className="hover:text-white">POSTCARDS & PRINT ADVERTISING</Link>
          <Link to="#" className="hover:text-white">SIGNS, BANNERS & POSTERS</Link>
          <Link to="#" className="hover:text-white">LABELS, STICKERS & PACKAGING</Link>
          <Link to="#" className="hover:text-white">HOME & PHOTO GIFTS</Link>
          <Link to="#" className="hover:text-white">WEDDING</Link>
          <Link to="#" className="hover:text-white">CLOTHING & BAGS</Link>
          <Link to="#" className="hover:text-white">DESIGN & LOGO</Link>
        </div> */}


<div className={`flex lg:flex-row lg:items-center items-start px-8 gap-y-6 flex-col lg:max-h-auto lg:py-4 lg:justify-between text-xs lg:text-sm font-medium md:font-normal transition-all duration-300 ${showmenu ? 'max-h-0 overflow-hidden' : 'max-h-screen pb-6'}`}>
          <Link to="#" className="hover:text-white block">BUSINESS CARDS</Link>
          <Link to="#" className="hover:text-white block">POSTCARDS & PRINT ADVERTISING</Link>
          <Link to="#" className="hover:text-white block">SIGNS, BANNERS & POSTERS</Link>
          <Link to="#" className="hover:text-white block">LABELS, STICKERS & PACKAGING</Link>
          <Link to="#" className="hover:text-white block">HOME & PHOTO GIFTS</Link>
          <Link to="#" className="hover:text-white block">WEDDING</Link>
          <Link to="#" className="hover:text-white block">CLOTHING & BAGS</Link>
          <Link to="#" className="hover:text-white block">DESIGN & LOGO</Link>
        </div>
        </div>
      </div>
    </nav>
  )
}


export default Navbar