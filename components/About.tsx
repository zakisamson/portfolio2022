import React from 'react'
import { motion } from 'framer-motion'
import fotoBesar from "../public/fotoBesar.jpeg"

type Props = {}

function About({ }: Props) {
    return (
        <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
            <motion.img 
                src="https://avatars.githubusercontent.com/u/65299360?v=4" 
                alt="Zaki's about picture" 
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    opacity: 1, x: 0 
                }}
                viewport={{once: true}}
                className="-mb-20 md:mb-0 flex-shrink-0 h-36 w-36 md:w-52 md:h-52 mt-20 md:mt-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
            />
            <div className="space-y-5 md:space-y-10 px-0 md:px-10">
                <h4 className='text-xl md:text-4xl font-semibold'>{`Here's`} a <span className='underline decoration-[#e28743]'>little</span> summary about me</h4>
                <p className='text-base text-md'>Experienced Front End Developer with quite a history of working in the Information and Technology industry. Possess adept skills in HTML, CSS, Javascript, broad knowledge in React, Laravel, Codeigniter, and fluency in English. Strongly supported by an educational background in Politeknik Elektronika Negeri Surabaya majoring in Computer Engineering (Bachelor of Applied Science)</p>
            </div>
        </div>
    )
}

export default About