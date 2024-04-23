import Link from "next/link"

const ExcersiceCard = ({ id, src, target, bodyPart, equipment, name }) => {
  return (
    <div className='p-4  w-fit bg-black excercise-card cursor-pointer relative'>
      <div className='relative'>
        <div className='absolute top-0 left-0 w-full h-full'></div>
        <iframe width={360} height={360} src={src} frameborder="0"></iframe>
      </div>
      <div className='text-white'>
        <div className='flex items-center gap-4 my-4 flex-wrap'>
          <p className='px-4 py-2 bg-navy rounded-2xl w-fit cursor-pointer'>{target}</p>
          <p className='px-4 py-2 bg-pink-300 rounded-2xl w-fit cursor-pointer'>{bodyPart}</p>
          <p className='px-4 py-2 bg-compYell rounded-2xl w-fit cursor-pointer'>{equipment}</p>
        </div>
        <Link href={`/exercises/exercise/${id}`}><h1 className='text-primary text-3xl max-w-xs hover:text-dimGray'>{name}</h1></Link>
        
      </div>
    </div>
  )
}

export default ExcersiceCard