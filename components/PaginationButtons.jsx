'use client'
import React from 'react'

const PaginationButtons = ({ buttonArray, changePage, currentPage }) => {
  return (
    <div className='flex justify-center items-center '>
        <button onClick={() => changePage(currentPage - 1)} className='py-2 px-4 border-dimGray border-2 text-dimGray mr-2'>Prev</button>
        {buttonArray.map((_,index) => <button onClick={() => changePage(index + 1)} className={`py-2 px-4 border-dimGray border-2 text-dimGray mr-2 ${index + 1 == currentPage ? 'bg-primary text-black border-primary' : 'hover:text-primary'}`}>{index + 1}</button>)}
        <button onClick={() => changePage(currentPage + 1)} className='py-2 px-4 bg-primary text-black mr-2 border-primary border-2'>Next</button>
    </div>
  )
}

export default PaginationButtons