import React from 'react'
import { useRouter } from 'next/router'

const Home = () => {

  const router = useRouter();

  return (
    <div className='w-full min-h-[calc(100vh-80px)] h-fit flex items-center px-10'>
      <div className="w-full min-h-[calc(100vh-150px)] h-fit border-2 p-10">
        <h1 className='text-5xl'>Our Products</h1>
        <div className="flex mt-4 gap-10 md:flex-row flex-col">
          {/* {card start} */}
          <div className="md:w-1/3 w-full h-[300px] rounded-lg duration-300 ease-in border-2 hover:scale-95 hover:bg-blue/60 hover:border-none" onClick={() =>{router.push('/todolist')}}>
            <img src="/task.svg" alt="task" className='p-4 w-full md:h-full h-2/3' />
            <h3 className='text-xl font-semibold m-4' >Task Managment App</h3>
          </div>
          {/* {card END} */}
          {/* {card start} */}
          <div className="md:w-1/3 w-full rounded-lg duration-300 ease-in h-fit border-2  hover:scale-95 hover:bg-blue/60 hover:border-none" onClick={() =>{router.push('/shoppingCart')}}>
            <img src="/shopping.svg" alt="task" className='p-4 w-full md:h-full h-2/3' />
            <h3 className='text-xl font-semibold m-4'>Shopping List App</h3>
          </div>
          {/* {card END} */}
          {/* {card start} */}
          <div className="md:w-1/3 w-full rounded-lg duration-300 ease-in h-[300px] border-2  hover:scale-95 hover:bg-blue/60 hover:border-none" onClick={() =>{router.push('/movieDB')}}>
            <img src="/movie.svg" alt="task" className='p-4 w-full md:h-full h-2/3' />
            <h3 className='text-xl font-semibold m-4' >Movie Database</h3>
          </div>
          {/* {card END} */}
        </div>
      </div>
    </div>
  )
}

export default Home