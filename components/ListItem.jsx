import { back } from "@/assets/images"
import Image from "next/image"

const ListItem = () => {
  return (
    <div className='flex flex-col items-center justify-center px-24 py-8 listItem cursor-pointer rounded-xl slide-up'>
      <Image
        src={back}
        width={60}
      />
      <p className='text-primary font-poppins'>Back</p>
    </div>
  )
}

export default ListItem