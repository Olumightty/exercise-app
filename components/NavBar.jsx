'use client'
import { IoIosFitness } from "react-icons/io";
import Link from "next/link";
import { SearchBar } from ".";


const NavBar = () => {
  return (
    <div className='flex flex-row justify-between items-center px-6 py-4 background-gradient'>
        <Link href='/'><IoIosFitness size={50}/></Link>
        <ul className='flex flex-row nav-links items-center'>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/excercises'>Exercises</Link></li>
            <li><SearchBar/></li>
            <li><Link href='/about'>About</Link></li>
        </ul>
        <Link target="_blank" href='https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb'><button className='px-6 py-2 border-none outline-none bg-black rounded-lg text-white'>Get Api</button></Link>
    </div>
  )
}

export default NavBar