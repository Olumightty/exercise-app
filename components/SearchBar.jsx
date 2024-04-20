'use client'

import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
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
  return (
    <div className='flex items-center gap-2'>
        <p onClick={showSearch} className='cursor-pointer'>Search</p>
        
            {isearch && (
                <div className='flex items-center gap-2 px-2 py-2'>
                    <input ref={searcRef} className='rounded-xl outline-none border-none px-2' type='search' />
                    <FaSearch className='cursor-pointer' color='#000' size={20}/>
                </div>
                
            )}
            
    </div>
    
  )
}

export default SearchBar