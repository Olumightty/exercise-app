'use client'
import { useEffect, useState } from "react"
import { Carasel } from "."
import { notFound } from "next/navigation"



const ExcerciseList = ({ category }) => {
  const [listOfCategories, setListOfCategories] = useState([])

  useEffect(() => {
    setListOfCategories(category.bodyPart);
  }, [])

 async function getCategory  (event){
    switch (event.target.value) {
      case 'bodyPart':
        setListOfCategories(category.bodyPart);
        break;
      case 'target':
        setListOfCategories(category.target)
        break;
      case 'equipment':
        setListOfCategories(category.equipment)
        break;
      default:
        notFound();
    }
    
  }
  return (
    <div>
      <div className='flex items-center justify-start mb-16'>
        <h1 className='font-poppins text-lg text-dimGray mr-4'>Find Exercises</h1>
        <select onChange={getCategory}  name="category" id="category" className='rounded-lg bg-navy text-primary outline-none px-2 py-2'>
            <option value="bodyPart">Body Part</option>
            <option value="equipment">Equipment</option>
            <option value="target">Target</option>
        </select>
      </div>
      <div className='relative'>
          <Carasel data={listOfCategories}/>
      </div>
      
    </div>
  )
}

export default ExcerciseList