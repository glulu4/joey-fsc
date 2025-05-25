import React from 'react'
import HeaderText from '../ui/HeaderText'
import Image from 'next/image'
import BodyText from '../ui/BodyText'

import clsx from 'clsx'
import {RoughNotation} from 'react-rough-notation'


interface AreasOfFocusProps {
  className?: string;
}

export default function AreasOfFocus({ className }: AreasOfFocusProps) {
  return (
    <div className={clsx(className,'px-10 sm:px-0 sm:w-full')}>

      <div className='mx-auto max-w-3xl'>


            <HeaderText className='text-center mb-12'>
            <RoughNotation multiline type="underline" show={true} color='#ff8e1d' animationDuration={1000} iterations={1} padding={1} strokeWidth={8}>

              Areas We Treat
          </RoughNotation>

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
