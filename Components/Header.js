import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Header = () => {

    const router = useRouter();

  return (
    <div className='w-full h-[80px] flex items-center md:px-8 px-2 justify-between border-2'>
    <Image
    className='cursor-pointer md:p-0 p-4'
    onClick={() => router.push('/')}
    src={'/logo.png'}
        width={200}
        height={80}
        alt='logo'
    />
    <div className='flex gap-2'>
    <div className="button text-xl" onClick={() =>{router.push('/home')}}>
    Home
    </div>
    <div className=' border-2 border-blue p-2 hover:bg-blue hover:text-white transition-all duration-300 ease-in rounded-xl text-sm md:text-xl' >
      <a href="https://kunalshokeen.tech/" target='_blank' className="">Dev Contact</a>
    </div>
    </div>
    </div>
  )
}

export default Header