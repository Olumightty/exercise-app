import Link from "next/link"

const Footer = () => {
  return (
    <div className='w-full flex justify-center items-center px-24 py-2'>
        <p className='text-dimGray opacity-60'>Made by <Link target="_blank" href='https://www.linkedin.com/in/olumide-ayoola-094023276/' className='text-primary opacity-100'>Ayoola Olumide</Link></p>
    </div>
  )
}

export default Footer