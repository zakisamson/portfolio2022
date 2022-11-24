import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { skillsList } from '../utils/skillsList'

type Props = {}

function Skills({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className=' flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] min-h-screen xl:px-10 justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Skills
            </h3>

            <h3 className='top-36 absolute uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for current proficiency</h3>

            <div className='grid grid-cols-4 gap-5'>
                {skillsList.map((data:any, index:any) => {
                    return (
                        <Skill key={index} id={data.id} imageSource={data.imageSource} percentage={data.percentage} />
                    )
                })}
            </div>
        </motion.div>
    )
}

export default Skills