'use client'

import { navigateToSearch } from "@/lib/actions";
import { search } from "@/redux/action";
import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
const SearchBar = () => {
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
            navigateToSearch(searchTerm)
        }
    }
  return (
    <div className='flex items-center gap-2'>
        <p onClick={showSearch} className='cursor-pointer'>Search</p>
        
            {isearch && (
                <div className='flex items-center gap-2 px-2 py-2'>
                    <input value={searchTerm} onKeyDown={handleSearch} onChange={(event) => dispatch(search(event.target.value))} ref={searcRef} className='rounded-xl outline-none border-none px-2' type='search' />
                    <FaSearch className='cursor-pointer' color='#000' size={20}/>
                </div>
                
            )}
            
    </div>
    
  )
}

export default SearchBar