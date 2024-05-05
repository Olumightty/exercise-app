import Link from "next/link"

const ExcersiceCard = ({ id, src, target, bodyPart, equipment, name }) => {
  return (
    <div className='p-4  w-fit bg-black excercise-card cursor-pointer relative'>
      <div className='relative'>
        <div className='absolute top-0 left-0 w-full h-full'></div>
        <iframe width={360} height={360} src={src} frameBorder="0"></iframe>
      </div>
      <div className='text-white'>
        <div className='flex items-center gap-4 my-4 flex-wrap'>
          <Link href={`/excercises/${target}`}><p className='px-4 py-2 bg-navy rounded-2xl w-fit cursor-pointer hover:opacity-65'>{target}</p></Link>
          <Link href={`/excercises/${bodyPart}`}><p className='px-4 py-2 bg-pink-300 rounded-2xl w-fit cursor-pointer hover:opacity-65'>{bodyPart}</p></Link>
          <Link href={`/excercises/${equipment}`}><p className='px-4 py-2 bg-compYell rounded-2xl w-fit cursor-pointer hover:opacity-65'>{equipment}</p></Link>
        </div>
        <Link href={`/excercises/exercise/${id}`}><h1 className='text-primary text-3xl max-w-xs hover:text-dimGray'>{name}</h1></Link>
        
      </div>
    </div>
  )
}

export default ExcersiceCard