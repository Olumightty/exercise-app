import { Carasel } from "."


const ExcerciseList = () => {
  return (
    <div>
      <div className='flex items-center justify-start mb-16'>
        <h1 className='font-poppins text-lg text-dimGray mr-4'>Find Excercises</h1>
        <select  name="" id="" className='rounded-lg bg-navy text-primary outline-none px-2 py-2'>
            <option value="bodyPart">Body Part</option>
            <option value="equipment">Equipment</option>
            <option value="target">Target</option>
        </select>
      </div>
      <div className='relative'>
        <Carasel/>
      </div>
      
    </div>
  )
}

export default ExcerciseList