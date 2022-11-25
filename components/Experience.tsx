import React from 'react'
import ExperienceCard from './ExperienceCard'
import { experiences } from '../utils/experiences'
import { Experiences } from '../model/experience'

type Props = {}

function Experience({ }: Props) {
  return (
    <div className="h-screen flex flex-col relative text-left md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center overflow-hidden">
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-200'>Experience</h3>
      <div className='w-full flex justify-center items-center space-x-5'>
        {
          experiences.map((data:Experiences, index: number) => 
            <ExperienceCard {...data} key={index} />
          )
        }
      </div>
    </div>
  )
}

export default Experience