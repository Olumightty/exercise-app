'use client'
import { useEffect, useState } from "react"
import { ExcersiceCard } from "."
import PaginationButtons from "./PaginationButtons"


const Suggestions = ({data}) => {
  //Implementation of Pagination on the client-side
  
  let pages = []
  const [currentPage, setCurrentPage] = useState(1) 
  const exercisePerPage = 3
  const lastExercise = currentPage * exercisePerPage
  //this checks if the data length + 3 (since there are 3 items per page) will accomodate the last index value, if last index value is to much for the data length then currentPage will be reset to 1
  if(lastExercise > data.length + 3){
    setCurrentPage(1)
  }
  const firstExercise = lastExercise - exercisePerPage
  const visibleData = data.slice(firstExercise, lastExercise)
  
  for(let i = 0; i<Math.ceil(data.length/exercisePerPage); i++){
    pages.push(i)
  }

  function changePage(newPage){
    if(newPage < 1 || newPage > pages.length){

    }
    else{
      setCurrentPage(newPage)
    }
    
  }
  
  return (
    <>
      <div className='lg:grid lg:grid-cols-3 gap-y-8 md:grid md:grid-cols-2 flex flex-col items-center mb-8'>
        {visibleData.map((da) => <ExcersiceCard key={da.id} id = {da.id} src={da.gifUrl} target={da.target} bodyPart={da.bodyPart} equipment={da.equipment} name={da.name}/>)}
      </div>
      <PaginationButtons buttonArray = {pages} changePage={changePage} currentPage={currentPage}/>
      
    </>
    
  )
}

export default Suggestions