import clsx from 'clsx'
import React from 'react'
import HeaderText from './ui/HeaderText'
import BodyText from './ui/BodyText'
import Button from './Button'

export default function Schedule() {
  return (
    <div className={clsx(
      'bg-primary-teal w-full h-full rounded-[36px] flex flex-col items-center justify-between',
      "sm:flex-row sm:justify-between sm:items-center ",
      "p-10 px-20"
    )}>

      {/* <div className='max-w-xl h-full flex flex-col items-start justify-between space-y-5'> */}
      <BodyText variant='large' className=' font-bold text-white'>
        Schedule an Appointment
      </BodyText>


      <a
        type="button"
        href="/contact"
        className={clsx(
          "bg-teal-600 text-white text-center font-semibold py-3 px-8 rounded-full hover:bg-teal-700 transition")}
      >
        Book Now
      </a>

      {/* <BodyText className='text-gray-600 max-w-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Doloremque, aliquid. Error veniam dolore quibusdam consequuntur aspernatur sunt impedit repellendus consequatur 
                    ullam possimus, necessitatibus cum cumque odio enim officia explicabo odit.
          </BodyText> */}

      {/* </div> */}
    </div>
  )
}
