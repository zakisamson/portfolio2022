import React from 'react'
import { motion } from "framer-motion"
import { SkillsList } from '../model/skillsList'

type Props = SkillsList

function Skill({ id, imageSource, percentage }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img src={imageSource}
            initial={{ 
                x: id <= 4 ? -200 : 200,
                opacity: 0 
            }}
            transition={{duration: 0.5}}
            whileInView={{ opacity: 1, x: 0 }}
            className="rounded-full border border-gray-500 object-cover w-20 h-20 md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:h-28 md:w-28 xl:w-32 xl:h-32 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>{percentage}</p>
                </div>
            </div>
        </div>
    )
}

export default Skill