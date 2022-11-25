import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import { Experiences } from '../model/experience'

type Props = Experiences

function ExperienceCard({ jobTitle, companyName, techUsed, dateStarted, dateEnded, points }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] snap-center bg-[#292929] p-5 hover:opacity-100 opacity-40 transition-opacity duration-200'>
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>{jobTitle}</h4>
                <p className='font-bold text-2xl mt-1'>{companyName}</p>
                <div className='flex space-x-2 my-2'>
                    {techUsed && techUsed.map(({ id, url }) => {
                        return (
                            <motion.img
                                src={url}
                                key={id}
                                initial={{ opacity: 0 }}
                                animate={{opacity: 1}}
                                transition={{ duration: 1 }}

                                className='rounded-full border border-gray-500 object-cover w-10 h-10 md:h-12 md:w-12 xl:w-14 xl:h-14 filter group-hover:grayscale transition duration-300 ease-in-out' />
                        )
                    })}
                </div>
                <p className='uppercase py-5 text-gray-300'>{dateStarted} - {dateEnded}</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    {points && points.map(({ id, point }) => {
                        return (
                            <li key={id}>{point}</li>
                        )
                    })}
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard