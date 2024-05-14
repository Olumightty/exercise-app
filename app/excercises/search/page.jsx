
import { Suggestions } from "@/components"
import SearchFilter from "@/components/SearchFilter"
import { getSuggestions } from "@/lib/actions"
import { Suspense } from "react"


async function AwaitAllData(){
    const data = await getSuggestions('all')

    return(
        <SearchFilter data={data}/>
    )
}

export default async function SearchExercise(){
    
    

    
    return(
        <div className="px-24 py-8">
            <Suspense fallback={<p className="flash text-primary text-center">Searching...</p>}>
                <AwaitAllData/>
            </Suspense>
            
        </div>
        
    )
}