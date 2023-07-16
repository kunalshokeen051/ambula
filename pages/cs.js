import React from 'react'
import { useRouter } from 'next/router';

const ComingSoon = () => {
 
    const router = useRouter();

    return (
        <div className='w-full flex bg-coming-soon bg-no-repeat bg-center justify-center items-center h-screen px-10'>
            <div className="flex flex-col gap-4 text-2xl items-center justify-center">
                <h1 className='text-8xl text-blue'>Coming Soon</h1>
                We are Working on Our Product So we request you to kindly visit our Website after Some Time.
                <div className="button"  onClick={() =>{router.push('/')}}>Go back to Homepage</div>
            </div>
        </div>
    )
}

export default ComingSoon