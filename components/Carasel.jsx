'use client'
import { useRef } from "react"
import { ListItem } from "."
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import Link from "next/link"
import { notFound } from "next/navigation"

const Carasel = ({ data }) => {
    const scrollRef = useRef();
    if(!data){
        notFound();
    }

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
    <div ref={scrollRef} className='flex items-center flex-nowrap sm:grid sm:grid-cols-2 md:flex md:flex-row flex-col w-full px-4 py-4 overflow-x-scroll overflow-y-hidden no-scroll'>
        {data.map((da,i) => <Link key={i} href={`/exercises/${da}`}><ListItem title={da}/></Link>)}
        <BsArrowLeftCircle onClick={() => scroll("left")} className=' md:opacity-100 opacity-0 absolute  left-0 cursor-pointer' color="fff" size={40}/>
        <BsArrowRightCircle onClick={() => scroll("right")} className=' md:opacity-100 opacity-0 absolute right-0 cursor-pointer' color="fff" size={40}/>
      </div>
  )
}

export default Carasel