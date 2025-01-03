import React from 'react'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Image from 'next/image'

const Footer = () => {
  return (
        <footer className='w-full  pt-20 pb-10 ' id='contact'>

            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw] text-white'>
                    Ready to take 
                    <span className='text-purple'> your </span>
                    digital presence to next level?
                </h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how I can help you achieve your goals. </p>
                <a href="mailto:divilthkr3@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow/>}
                        position='right'
                    />
                </a>
            </div>
            <div className='flex mt-24 gap-3 md:gap-0 md:flex-row flex-col justify-between items-center  overflow-hidden  '>
                <p className='md:text-base text-sm md:font-normal font-light text-white-200'>Copyright ©️ 2024 Divil</p>
                <div className='flex items-center md:gap-3 gap-6 '>
                    {socialMedia.map((profile)=>(
                        <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter
                            backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-100 rounded-lg border border-black-300
                        ' >
                            <Image src={profile.img} alt={profile.img} width={20} height={20} />
                        </div>
                    ))}
                </div>
            </div>
           
        </footer>
  )
}

export default Footer