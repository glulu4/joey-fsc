import React from 'react'
import Row from '../ui/Row'
import Image from 'next/image'
import HeaderText from '../ui/HeaderText'
import BodyText from '../ui/BodyText'

// #183c3c
// #a27b5c
export default function Location() {
  return (
    <div className="h-svh">

      <div className='flex flex-col sm:flex-row flex-1 items-center justify-center py-24 h-full'>

        <div className='flex flex-[0.45] w-full h-full flex-col justify-center items-center gap-10'>
          <HeaderText variant="default" className="text-header-text font-serif font-medium">

            Proudly Serving the Connecticut Community
          </HeaderText>
          <BodyText className='text-body-text'>
            Located in Trumbull, Connecticut, we are dedicated to providing exceptional care and advanced surgical solutions to our local community. Our team of experienced professionals is committed to enhancing your well-being and confidence through personalized treatment plans.
          </BodyText>
        </div>
        <div className='flex flex-[0.55] items-center justify-end  h-full w-full'>
          <p>
            <Image
              width={700}
              height={700}
              alt='Connecticut'
              className='object-cover w-full h-full'
              src={'/images/connecticut2.png'}

            />
          </p>
        </div>

      </div>
    </div>
  )
}
