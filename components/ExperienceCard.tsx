import Image from 'next/image'
import React from 'react'

type Props = {}

function ExperienceCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200'>
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Front-End Developer</h4>
                <p className='font-bold text-2xl mt-1'>PT.Inovasi Realita Nusantara</p>
                <div className='flex space-x-2 my-2'>
                    {/* tech used */}
                </div>
                <p className='uppercase py-5 text-gray-300'>Jun 2021 - Jun 2022</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Point</li>
                    <li>Point</li>
                    <li>Point</li>
                    <li>Point</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard