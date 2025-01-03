import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import Image from 'next/image'

const RecentProjects = () => {
    return (
        <div className='py-20 lg:mt-20' id='projects'>
            <h1 className='heading text-white'>
                A small selection of {' '}
                <span className='text-purple'>recent projects</span>
            </h1>
            <div className='flex flex-wrap items-center justify-center  gap-x-24 gap-y-8  mt-5'>
                {projects.map(({ id, title, des, img, iconLists, link }) => (
                    <div key={id} className='sm:h-[41rem] h-[32rem]  lg:min-h-[32.5rem] flex items-center justify-center
                     sm:w-[570px] w-[80vw]'>
                        <PinContainer title={link} href={link}>
                            <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden
                            sm:h-[40vh] h-[20vh]  mb-10 ' >
                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                    <Image src="/bg.png" alt="bg-img" width={100} height={100} />
                                </div>
                                <Image src={img} alt={title} layout={'responsive'} width={100} height={100}
                                    className='z-10 absolute bottom-0 top-0 overflow-hidden '
                                />
                            </div>
                            <h1 className='text-white font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                                {title}
                            </h1>
                            <p className='text-white lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                                {des}
                            </p>
                            <div className='flex items-center justify-between mt-7 mb-3'>
                                <div className='flex items-center'>
                                    {
                                        iconLists.map((icon,index)=>(
                                            <div key={icon} className='border border-white/[0.2] rounded-full bg-black-100
                                            lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center '
                                                style={{
                                                    transform:`translateX(-${5*index*2})`
                                                }}
                                            >
                                                <Image src={icon} alt={icon} width={10} height={10} layout='responsive' className='p-2' />
                                            </div>
                                        ))}
                                </div>
                                <div className='flex justify-center items-center'>
                                    <p className='flex lg:text-xl md:text-xs text-sm text-purple' >Check Live Site</p>
                                    <FaLocationArrow className='ms-3' color='#CBACF9' />
                                </div>
                            </div>

                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentProjects