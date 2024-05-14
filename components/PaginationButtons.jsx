'use client'
import React from 'react'

const PaginationButtons = ({ buttonArray, changePage, currentPage }) => {
  return (
    <div className='flex justify-center items-center flex-wrap gap-1'>
        <button onClick={() => changePage(currentPage - 1)} className='py-2 px-4 border-dimGray border-2 text-dimGray mr-2'>Prev</button>
        {buttonArray.map((_,index) => <button key={index + 1} onClick={() => changePage(index + 1)} className={`py-2 px-4  mr-2 ${index + 1 == currentPage ? 'bg-primary text-black border-primary border-2' : 'hover:text-primary hover:border-primary border-dimGray border-2 text-dimGray'}`}>{index + 1}</button>)}
        <button onClick={() => changePage(currentPage + 1)} className='py-2 px-4 bg-primary text-black mr-2 border-primary border-2'>Next</button>
    </div>
  )
}

export default PaginationButtons