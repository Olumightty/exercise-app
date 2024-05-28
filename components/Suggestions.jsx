'use client'
import { useState } from "react"
import { ExcersiceCard } from "."
import PaginationButtons from "./PaginationButtons"
import ReactPaginate from "react-paginate"


const Suggestions = ({data}) => {
  //Implementation of Pagination on the client-side
  
  // let pages = []
  const [currentPage, setCurrentPage] = useState(1) 
  const exercisePerPage = 3
  const lastExercise = currentPage * exercisePerPage
  //this checks if the data length + 3 (since there are 3 items per page) will accomodate the last index value, if last index value is to much for the data length then currentPage will be reset to 1
  if(lastExercise > data.length + 3){
    setCurrentPage(1)
  }
  const firstExercise = lastExercise - exercisePerPage
  const visibleData = data.slice(firstExercise, lastExercise)
  
  // for(let i = 0; i<Math.ceil(data.length/exercisePerPage); i++){
  //   pages.push(i)
  // }
  const pageCount = Math.ceil(data.length / exercisePerPage);

  function changePage(event){
    setCurrentPage(event.selected + 1)
    
  }
  
  return (
    <>
      <div className='lg:grid lg:grid-cols-3 gap-y-8 md:grid md:grid-cols-2 flex flex-col items-center mb-8'>
        {visibleData.map((da) => <ExcersiceCard key={da.id} id = {da.id} src={da.gifUrl} target={da.target} bodyPart={da.bodyPart} equipment={da.equipment} name={da.name}/>)}
      </div>
     <ReactPaginate
      breakLabel="..."
      nextLabel="Next >"
      onPageChange={changePage}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< Previous"
      renderOnZeroPageCount={null}
      containerClassName="flex justify-center items-center flex-wrap gap-1 shadow-lg shadow-primary/30"
      pageClassName="py-2 px-4"
      pageLinkClassName = 'text-dimGray hover:text-primary cursor-pointer'
      previousLinkClassName="py-2 px-4 text-dimGray hover:text-primary"
      activeClassName="border-primary border-b-2"
      activeLinkClassName="text-black"
      nextLinkClassName="py-2 px-4 text-dimGray hover:text-primary"
      breakClassName="text-dimGray"
      disabledLinkClassName="opacity-50"
     />
      
    </>
    
  )
}

export default Suggestions