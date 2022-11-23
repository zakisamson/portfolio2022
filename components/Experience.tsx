import React from 'react'
import ExperienceCard from './ExperienceCard'

type Props = {}

function Experience({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-left md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center overflow-hidden">
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>
        <div className='w-full flex space-x-5'>
            <ExperienceCard />
        </div>
    </div>
  )
}

export default Experience