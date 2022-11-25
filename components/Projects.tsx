import React from 'react'
import { motion } from 'framer-motion'
import gambar from '../public/bakoelasa.jpg'
import Image from 'next/image'
import { projects } from '../utils/projects'
import { Projects } from '../model/projects'

type Props = {}

function Projects({ }: Props) {
    return (
        <motion.div 
        initial={{ opacity:0 }}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
        className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
            <div className='relative w-full flex flex-row overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#e28743]/80'>
                {
                    projects.map((data: Projects, index) =>
                        <div key={index} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:-44 h-screen">
                            <motion.img 
                            className='w-64 rounded'
                            initial={{x: -200, y: 40, opacity: 0}}
                            transition={{duration: 0.5}}
                            whileInView={{x:0, y: 0, opacity: 1}}
                            src={data.image} />
                            {/* <Image className='rounded' width={250} height={250} src={data.image} alt="Bakoelasa" /> */}
                            <div className='space-y-10 px-0 md:px-10 max-2-6xl'>
                                <h4 className='text-4xl font-semibold text-center'><span className='underline decoration-[#e28743]'>Project {index + 1} of {projects.length}:</span>{" "}{data.projectName}</h4>
                                <p className='text-sm md:text-lg text-center md:text-left '>{data.description}</p>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <a href={data.websiteLink}>
                                    <button className='px-6 py-2 mx-5 border border-gray-500 rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#e28743]/40 hover:text-[#e28743]/40'>View Website</button>
                                </a>
                                {data.githubLink.length > 1 &&
                                    <a href={data.githubLink} >
                                        <button className='px-6 py-2 mx-5 border border-gray-500 rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#e28743]/40 hover:text-[#e28743]/40'>View Github</button>
                                    </a>
                                }
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="w-full absolute top-[30%] bg-[#e28743]/10 left-0 h-[500px] -skew-y-12" />
        </motion.div>
    )
}

export default Projects