import { getAnExercise } from "@/lib/actions"
import Link from "next/link"
import { Suspense } from "react"

export async function generateMetadata({ params }) {
    return {
      title: 'Exercise ' + params.id,
    }
  }

async function AwaitDetails({ params }){
    const data = await getAnExercise(params.id)
    return(
        <div className='px-24 py-8'>
            <section className='flex flex-wrap gap-4 items-center slide-bottom'>
                <h1 className='text-5xl font-poppins text-dimGray font-bold'>{data.name.toUpperCase()}</h1>
                <Link href={`/excercises/${data.bodyPart}`}><p className='px-4 py-2 bg-navy rounded-2xl w-fit cursor-pointer hover:opacity-65 text-white'>{data.bodyPart}</p></Link>
                <Link href={`/excercises/${data.target}`}><p className='px-4 py-2 bg-navy rounded-2xl w-fit cursor-pointer hover:opacity-65 text-white'>{data.target}</p></Link>
                <Link href={`/excercises/${data.equipment}`}><p className='px-4 py-2 bg-navy rounded-2xl w-fit cursor-pointer hover:opacity-65 text-white'>{data.equipment}</p></Link>
            </section>
            <section className='flex items-center'>
                <div className='mt-8 mr-16 slide-right'>
                    <iframe width={360} height={360} src={data.gifUrl} frameborder="0"></iframe>
                    <h2 className='text-dimGray font-poppins list-disc mt-4 font-semibold'>Also Works the:</h2>
                    <div className='flex'>
                        {data.secondaryMuscles.map((secondaryMuscle, i) => <p className='text-primary font-poppins font-semibold mr-4' key={i}>{secondaryMuscle}</p>)}
                    </div>
                </div>
                <div className="slide-top">
                    <h3 className='text-primary font-poppins text-5xl font-bold'>Instructions:</h3>
                    <ul className='text-dimGray font-poppins font-semibold list-disc mt-8 flex flex-col gap-4'>
                        {data.instructions.map((instruct, i) => <li key={i}>{instruct}</li>)}
                    </ul>
                </div>
            </section>
            
            
        </div>
    )
}

export default async function ExerciseDetails({params}){
    return(
        <Suspense fallback={<p className='flash text-primary font-poppins text-xl text-center mt-16'>Loading...</p>}>
            <AwaitDetails params={params}/>
        </Suspense>
        
    )
   
}