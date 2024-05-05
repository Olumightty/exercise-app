'use client'
export default function Error(){
  return (
    <div className='px-24 py-16 w-full'>
        <h1 className='font-poppins text-dimGray  text-5xl font-bold'>Opps! Could Not Get Data</h1>
        <p className='font-poppins text-dimGray my-4'>If problems persist it may be due to:</p>
        <ul className='font-poppins text-primary list-disc'>
          <li>Invalid Request from your end.</li>
          <li>Poor Internet Connection, check connection and reload page</li>
          <li>We are having issues with API server, bear with us</li>
        </ul>
    </div>
  )
}
