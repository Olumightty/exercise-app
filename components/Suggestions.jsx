import { ExcersiceCard } from "."


const Suggestions = ({data}) => {
  return (
    <>
      <div className='lg:grid lg:grid-cols-3 gap-y-8 md:grid md:grid-cols-2 flex flex-col items-center'>
        {data.map((da) => <ExcersiceCard key={da.id} id = {da.id} src={da.gifUrl} target={da.target} bodyPart={da.bodyPart} equipment={da.equipment} name={da.name}/>)}
      </div>
    </>
    
  )
}

export default Suggestions