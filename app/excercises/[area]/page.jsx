import { categories, getASpecificType } from "@/lib/actions"
import { notFound } from "next/navigation"
import { Suggestions } from "@/components"
import { Suspense } from "react"



export async function generateMetadata({ params }) {
    return {
      title: params.area,
    }
  }

  
async function AwaitAOC({ params }){
    let data
    const category = await categories()
    //Since %20 is included as space in the website link, we must resolve it when fetching and carrying out our control flow
    if( category.bodyPart.includes(params.area.replace("%20", " "))){
        data = await getASpecificType("bodyPart", params.area)
    }
    else if(category.equipment.includes(params.area.replace("%20", " "))){
        data = await getASpecificType("equipment", params.area)
    }
    else if( category.target.includes(params.area.replace("%20", " "))){
        data = await getASpecificType("target", params.area)
    }
    else{
        notFound();
    }
    return(
        <Suggestions data={data}/>
        
    )
}

export default async function AOC({ params }){
    return(
        <div className='sm:px-32 px-8 py-16 '>
            <h1 className='text-dimGray font-poppins text-5xl mb-16 font-semibold'>{params.area.replace("%20", " ").toUpperCase()}</h1>
            <Suspense fallback={<p className='flash text-center text-primary font-poppins'>{`Loading ${params.area.replace("%20", " ")}...`}</p>}>
                <AwaitAOC params = {params}/>
            </Suspense>
        </div>
    )
    
}