import React from 'react'

import Image, { StaticImageData } from 'next/image'
import Button from './common/Button'
import OnlyRightArrowIcon from '../../../shared/icon/only-right-arrow'
import WatchIcon from '../../../shared/icon/watch-icon'

interface BlogCardProps{
    image: StaticImageData,
    title: string,
    date: string,
    relatedOne: string,
    relatedTwo: string
}

export default function BlogCard({image, title, date, relatedOne, relatedTwo}: BlogCardProps) {
  return (
    <div className='w-[380px] text-white'>
      <div>
        <Image src={image} width={380} height={300} alt='blog image'/>
        {/* title and date */}
        <div className='mt-5 flex justify-between'>
            <h3 className='text-lg'>{title}</h3>
            <div className='flex items-center gap-2'>
                <WatchIcon className='w-5 text-secondary_color'/>
                <p className='text-secondary_color'>{date}</p>
            </div>
        </div>
        {/* related to */}
        <div className='flex gap-5 my-2'>
            Related To: <div className='flex gap-3'>
            <Button title={relatedOne}/> <Button title={relatedTwo}/>
            </div>
        </div>
        {/* read more button */}
        <div className='inline-block text-primary_color font-semibold text-lg cursor-pointer'>
            <div className='flex items-center hover:text-white'>
            <p>Read More</p>
            <OnlyRightArrowIcon className='w-4 mt-1'/>
            </div>
        </div>
      </div>
    </div>
  )
}
