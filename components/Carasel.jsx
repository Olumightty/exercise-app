'use client'
import { useRef } from "react"
import { ListItem } from "."
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'

const Carasel = () => {
    const scrollRef = useRef();

    function scroll(direction){
        // switch(direction){
        //     case "right":
        //         scrollRef.current.scrollLeft +=600
        //     case "left":
        //         scrollRef.current.scrollLeft -=600
        //     default:
        //         null
        // }
        if(direction == "right"){
            scrollRef.current.scrollLeft +=600
        }
        else{
            scrollRef.current.scrollLeft -=600
        }
    }

  return (
    <div ref={scrollRef} className='flex items-center flex-nowrap sm:flex-row flex-col w-full px-4 py-4 overflow-x-hidden overflow-y-hidden'>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <BsArrowLeftCircle onClick={() => scroll("left")} className=' md:opacity-100 opacity-0 absolute  left-0 cursor-pointer' color="fff" size={40}/>
        <BsArrowRightCircle onClick={() => scroll("right")} className=' md:opacity-100 opacity-0 absolute right-0 cursor-pointer' color="fff" size={40}/>
      </div>
  )
}

export default Carasel