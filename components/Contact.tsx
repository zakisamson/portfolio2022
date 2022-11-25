import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form"

type Props = {}

type Inputs = {
    name: string
    email: string
    subject: string
    message: string
}

function Contact({ }: Props) {
    const { register, handleSubmit } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:zakisamson@gmail.com?subject${formData.subject}&body=My name is ${formData.name}, ${formData.message}. (${formData.email})`
    }

    return (
        <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-200'>Contact</h3>
            <div className='flex flex-col w-80 md:w-auto space-y-10 p-10'>
                <h4 className='text-xl md:text-4xl font-semibold text-center'>I got what you need. <span className='underline decoration-[#e28743]'>{`Let's`} talk</span></h4>
                <div className='space-y-10'>
                    <div className='flex items-center space-x-5'>
                        <PhoneIcon className="h-7 w-7 animate-pulse text-[#e28743]" />
                        <p>08993144912</p>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <MapPinIcon className="h-7 w-7 animate-pulse text-[#e28743]" />
                        <p>Surabaya, Indonesia</p>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#e28743]" />
                        <p>zakisamson@gmail.com</p>
                    </div>
                </div>
                <form className='flex flex-col w-64 md:w-auto space-y-2 w-fit mx-auto' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col md:flex-row md:space-x-2 space-y-2 md:w-auto'>
                        <input {...register('name')} className='contactInput' type="text" placeholder="Name" />
                        <input {...register('email')} className='contactInput' type="email" placeholder="Email" />
                    </div>
                    <input {...register('subject')} className='contactInput' type="text" placeholder="Subject" />
                    <textarea {...register('message')} className='contactInput' placeholder='Message' />
                    <button className='bg-[#e28743] py-5 px-10 rounded-md text-black font-bold text-lg' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact