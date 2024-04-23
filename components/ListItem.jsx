import { back } from "@/assets/images"
import Image from "next/image"

const ListItem = ({title}) => {
  return (
    <div className='flex flex-col items-center justify-center px-24 py-8 listItem cursor-pointer rounded-xl slide-up'>
      <p className='text-primary font-poppins text-center'>{title.toUpperCase()}</p>
    </div>
  )
}

export default ListItem