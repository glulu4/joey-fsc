import React from 'react'
import HeaderText from '../ui/HeaderText'
import Image from 'next/image'
import BodyText from '../ui/BodyText'

import clsx from 'clsx'


interface AreasOfFocusProps {
  className?: string;
}

export default function AreasOfFocus({ className }: AreasOfFocusProps) {
  return (
    <div className={clsx(className,'px-10 sm:px-0 sm:w-full')}>

      <div className='mx-auto max-w-3xl'>
        <HeaderText className='text-center'>
          Areas We Treat
        </HeaderText>
        <BodyText className='text-center mt-4'>
          At Facial Surgery Center, we specialize in a wide range of surgical and non-surgical procedures to enhance your facial aesthetics. Our areas of focus include:
        </BodyText>

      </div>

        <Image
        src="/images/areas-of-focus.png"
        alt="Areas of Focus"
        width={700}
        height={700}
              className="object-cover mx-auto mt-10"
        priority
                />
    </div>
  )
}
