import { ExcerciseList, Suggestions } from "@/components";
import { getList, getSuggestions } from "@/lib/actions";
import { notFound } from "next/navigation";

export default async function Excercises(){
    const bodyPartData = await getList('bodyPart') //This fetches the initial list of bodyPart from the api and it is passed to the ExcerciseList
    const suggested = await getSuggestions() //Obtain data for 10 rand =om excercises

    if(!suggested){
        notFound();
    }
    return(
        <div className='sm:px-32 px-8 py-16 '>
            <ExcerciseList initialCategory={bodyPartData}/>
            <Suggestions data = {suggested}/>
        </div>
    )
}