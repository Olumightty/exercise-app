import { ExcerciseList, Suggestions } from "@/components";
import { getList, getSuggestions } from "@/lib/actions";
import { notFound } from "next/navigation";
import { Suspense } from "react";


async function GetSuggest(){
    const suggested = await getSuggestions() //Obtain data for 10 rand =om excercises

    if(!suggested){
        notFound();
    }

    return(
        <Suggestions data = {suggested}/>
    )
}
export default async function Excercises(){
    const bodyPartData = await getList('bodyPart') //This fetches the initial list of bodyPart from the api and it is passed to the ExcerciseList
    
    return(
        <div className='sm:px-32 px-8 py-16 '>
            <ExcerciseList initialCategory={bodyPartData}/>
            <h1 className='font-poppins text-dimGray text-4xl mb-16 mt-8 md:text-left text-center'>Discover New Exercises</h1>
            <Suspense fallback={<p className='flash text-center text-primary font-poppins'>Loading Suggestions...</p>}>
                <GetSuggest/>
            </Suspense>
            
        </div>
    )
}