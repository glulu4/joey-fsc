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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla deleniti distinctio officiis veritatis laborum suscipit totam ipsum officia, quis optio, quasi numquam, a ipsa. Asperiores, deleniti. Vero earum odit est.
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
