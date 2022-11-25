import React from 'react'
import { motion } from "framer-motion"
import { SkillsList } from '../model/skillsList'

type Props = SkillsList

function Skill({ id, imageSource, percentage }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img src={imageSource}
            initial={{ 
                x: id <= 4 ? -100 : 100,
                opacity: 0 
            }}
            transition={{duration: 0.5}}
            whileInView={{ opacity: 1, x: 0 }}
            className="rounded-full border border-gray-500 object-cover w-14 h-14 md:h-24 md:w-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-14 w-14 md:h-24 md:w-24 xl:w-28 xl:h-28 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-xl md:text-3xl font-bold text-black opacity-100'>{percentage}</p>
                </div>
            </div>
        </div>
    )
}

export default Skill