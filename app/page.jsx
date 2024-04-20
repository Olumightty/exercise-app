import { bodyBuilding } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import { PoweredBy } from "@/components";

export default function Home() {
  return (
    <>
      <div className="bg-black px-24 py-8 flex md:flex-row flex-col-reverse items-center justify-center md:gap-16 gap-0">
          <div className='flex justify-center items-center'>
            <Image
              src={bodyBuilding}
              width='1000'
            />
          </div>
          <div className='md:ml-16 ml-0'>
            <h1 className='font-poppin md:text-6xl text-4xl font-bold heading'>Unleash Your Fitness Potential: Explore Endless Workout Options!</h1>
            <p className='text-secondary text-lg font-poppins my-8'>Discover new routines, master new skills, and achieve your fitness goals.</p>
            <p className='font-poppins text-dimGray mb-2'>Over 13,000 work-outs explore!!!</p>
            <Link href='/excercises' cl><button className='px-8 py-4 button-gradient rounded-lg font-poppins font-medium'>Explore Now</button></Link>
          </div>
      </div>
      <PoweredBy/>
    </>
    
    
  );
}
