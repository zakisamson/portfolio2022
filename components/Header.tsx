import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

function Header({ }: Props) {
    return (
        <header className='sticky top-0 flex flex-items justify-between max-w-7xl mx-auto z-20 xl:items-center p-5'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1
                }}
                className='flex flex-row items-center'>
                <SocialIcon fgColor="gray" bgColor="transparent" url="https://www.linkedin.com/in/yusuf-zaki-samson/" />
                <SocialIcon fgColor="gray" bgColor="transparent" url="https://github.com/zakisamson" />
                <SocialIcon fgColor="gray" bgColor="transparent" url="https://gitlab.com/zakisamson" />
                <SocialIcon fgColor="gray" bgColor="transparent" url="https://www.instagram.com/zakisamson/" />
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1
                }}
                className="flex flex-row items-center text-gray-300 cursor-pointer">
                <a href="#contactMe">
                    <SocialIcon network='email' className='cursor-pointer' fgColor="gray" bgColor="transparent" />
                    <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
                </a>
            </motion.div>
        </header>
    )
}

export default Header