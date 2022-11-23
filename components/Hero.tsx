import Image from 'next/image'
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircle from './BackgroundCircle'
import profilePic from '../public/foto.jpeg'
import Link from 'next/link'

type Props = {}

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ['My name is Zaki Samson', 'Front End Developer', 'Game Enthusiast'],
        loop: true,
        delaySpeed: 1500
    })

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircle />
            <div className='relative md:mb-0 flex-shrink-0 w-32 h-32'>
                <Image src={profilePic} className=' rounded-full' objectFit='cover' alt="Zaki's profile picture"/>
            </div>
            {/* <img className='relative rounded-full mx-auto h-32 2-32 object-cover' src="https://media-exp1.licdn.com/dms/image/C4D03AQFRVdDrTDV7Tg/profile-displayphoto-shrink_100_100/0/1654474669288?e=1674691200&v=beta&t=N8YPSVPRSAeLSJTBnRcvclaZMuDqTQOLTAtW-aKS5tg" alt="Zaki's profile picture" /> */}
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Web Developer</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor="#e28743" />
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero