'use client'

import { search  } from "@/redux/action";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
const SearchBar = ({setIsVisible}) => {
    const router = useRouter()
    const searchTerm = useSelector((state) => state.searchTerm)
    const dispatch = useDispatch()
    const [isearch, setIsearch] = useState(false);
    const searcRef = useRef(null);
    function showSearch(){
        if(isearch){
            setIsearch(false)
        }
        else{
            setIsearch(true)
        }
    }
    //Function will initiate the search process and rediract to search page with a query equal to search value
    async function handleSearch(event){
        if(event.key == 'Enter'){
            //this is a server action which will redirect to the search link
            // dispatch(searching(true))
            // navigateToSearch(searchTerm)
            //this will redirect to search link
            setIsVisible ? setIsVisible(false) : null
            router.push(`/excercises/search?query=${searchTerm}`)
        }
    }
  return (
    <div className='flex items-center sm:gap-2 gap-0 sm:flex-row flex-col'>
        <p onClick={showSearch} className='cursor-pointer'>Search</p>
        
            {isearch && (
                <div className='flex items-center gap-2 px-2 py-2'>
                    <input value={searchTerm} onKeyDown={handleSearch} onChange={(event) => dispatch(search(event.target.value))} ref={searcRef} className='rounded-xl outline-none border-none px-2 sm:w-full es:w-[180px]' type='search' />
                    <FaSearch className='cursor-pointer sm:block hidden' color='#000' size={20}/>
                </div>
                
            )}
            
    </div>
    
  )
}

export default SearchBar