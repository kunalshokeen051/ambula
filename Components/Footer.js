import { useRouter } from 'next/router'
import React from 'react'

const Footer = () => {

  const router = useRouter();

  return (
    <div className='w-full bg-black/70 md:h-[80px] py-4 h-fit'>
      <div className="flex h-full items-center">
        <div className="flex md:flex-row flex-col items-center px-4 md:gap-10 gap-4 h-full w-1/2 text-white text-xl">
          <h3  onClick={() =>{router.push("/home")}} className='hover:text-blue cursor-pointer transition-all duration-300 '>Our Products</h3>
          <h3 onClick={() =>{router.push("/about")}}  className='hover:text-blue cursor-pointer transition-all duration-300 '>About</h3>
          <h3 onClick={() =>{router.push("/contactus")}}  className='hover:text-blue cursor-pointer transition-all duration-300 '>Contact US</h3>
          </div>
          <div className="flex-1 h-full md:text-2xl text-xl break-words flex justify-end px-4 items-center text-white/60">
          © 2023 • Ambula Health • Task-Managment Software
          </div>
          </div >
        </div>
        )
}

        export default Footer