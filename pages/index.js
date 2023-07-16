import { useRouter } from 'next/router'
import Image from 'next/image'

export default function Home() {

const router = useRouter();

  return (
    <div className="w-full min-h-screen">
      <div className="w-full min-h-[calc(100vh-80px)] md:px-20 px-4 flex md:flex-row flex-col-reverse">
        {/* Left Container start */}
        <div className="md:flex-1 flex flex-col gap-4 justify-center py-10">
        <h1 className='md:text-5xl text-3xl leading-snug justify-center'>
        Empowering Your <span className='text-blue '>Productivity</span> with Seamless <span className='text-blue'>Task Management</span>.
        </h1>
        <div className="button max-w-[120px]" onClick={() =>{router.push('/home')}}>let&apos;s start</div>
        </div>
        {/* Left Container End */}

        {/* Right Container Start*/}
        <div className="flex justify-center items-center">
        <img src="/Development.svg" alt="banner.svg" className='md:w-full md:h-full p-4' />
        </div>
        {/* Right Container End*/}
      </div>
    </div>
  )
}
