import React from 'react'

const Aboutus = () => {
    return (
        <div>
            <div className='mb-[75px] mt-20'>
                <h1 className='text-center font-normal text-7xl mb-3'>About Us</h1>
                <div className='w-[165px] h-[8px] rounded-xl bg-gradient-to-r from-[#0091ff] to-[#9cfeff]  m-auto'></div>
            </div>

            <div className='bg-[#ddf8f8c2] w-4/5 m-auto px-4 md:px-12 py-11 text-center transform transition-transform hover:scale-110 duration-300 ease-in-out  mb-20'>
                <div className='flex flex-col md:flex-row justify-between'>

                    <div className='md:w-2/5'>
                        <h3 className='text-3xl font-medium mb-8 mt-16'>Welcome To LENS</h3>
                        <p className='text-lg'>We put our hearts, souls, and sweat into designing and developing custom AI-powered solutions for your business so you don't have to.</p>
                        <a href="./about">
                            <button className='border border-black text-black py-2 px-4 md:py-3 md:px-6 text-lg mt-7 cursor-pointer rounded-lg'>
                                <div>Learn More</div>
                            </button>
                        </a>
                    </div>
                    <div className='mt-8 md:mt-0'>
                        <img className='w-full md:w-[430px] h-[395px] rounded-lg object-cover' alt="about" src='https://lenscorp.ai/_next/image?url=%2FImages%2FaboutLatest.webp&w=640&q=75' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Aboutus
