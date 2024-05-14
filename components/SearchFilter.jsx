'use client'
import { useSearchParams } from "next/navigation"
import { Suggestions } from "."

const SearchFilter = ({data}) => {
    const searchParams = useSearchParams()
    const query = searchParams.get('query')
    //This will filter the the exercise array from data and only return exercises that is contained in the query
    const filteredData = data.filter((da, index) => {
        const searchByName = da.name.includes(query.trim())
        const searchByTarget = da.target.includes(query.trim())
        const searchByEquipment = da.equipment.includes(query.trim())
        const searchByBodyPart = da.bodyPart.includes(query.trim())

        return searchByName || searchByTarget || searchByEquipment || searchByBodyPart
    })


    return(
        <>
            {filteredData.length > 0 
                ? <Suggestions data={filteredData}/>
                : <p className='text-dimGray text-center text-3xl font-medium'>Search not found</p>
            }
           
        </>
        
    )
}

export default SearchFilter