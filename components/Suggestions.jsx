import { ExcersiceCard } from "."


const Suggestions = ({data}) => {
  return (
    <>
      <h1 className='font-poppins text-dimGray text-4xl mb-16 mt-8 md:text-left text-center'>Discover New Exercises</h1>
      <div className='lg:grid lg:grid-cols-3 gap-y-8 md:grid md:grid-cols-2 flex flex-col items-center'>
        {data.map((da) => <ExcersiceCard key={da.id} id = {da.id} src={da.gifUrl} target={da.target} bodyPart={da.bodyPart} equipment={da.equipment} name={da.name}/>)}
      </div>
    </>
    
  )
}

export default Suggestions