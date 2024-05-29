'use client'
import { IoIosFitness } from "react-icons/io";
import Link from "next/link";
import { SearchBar } from ".";
import { useState } from "react";
import { RxDropdownMenu, RxCross2 } from "react-icons/rx";

const NavLink = ({ setIsVisible }) => {
  return(
    <>
      <li><Link href='/'>Home</Link></li>
      <li><Link href='/excercises'>Exercises</Link></li>
      <li><SearchBar setIsVisible={setIsVisible}/></li>
      <li><Link href='/about'>About</Link></li>
    </>
  )
}

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className='flex flex-row justify-between items-center px-6 py-4 background-gradient'>
        <Link href='/'><IoIosFitness size={50}/></Link>
        <ul className='sm:flex flex-row nav-links items-center hidden'>
            <NavLink/>
        </ul>
        <div className="sm:hidden visible relative">
          {isVisible 
            ? <RxCross2 onClick={() => setIsVisible(false)} size={30}/>
            : <RxDropdownMenu onClick={() => setIsVisible(true)} size={30}/>
          }
          {isVisible && (
            <ul className="absolute bg-primary nav-link font-poppins font-medium mt-6 left-0 flex flex-col justify-center items-center z-10 py-2 px-4 transition">
              <NavLink setIsVisible={setIsVisible}/>
            </ul>
          )}
        </div>
        <Link target="_blank" href='https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb'><button className='px-6 py-2 border-none outline-none bg-black rounded-lg text-white'>Get Api</button></Link>
    </div>
  )
}

export default NavBar