import CTA from '@/components/CTA'
import BodyText from '@/components/ui/BodyText'
import HeaderText from '@/components/ui/HeaderText'
import Image from 'next/image'
import React from 'react'
import {RoughNotation} from 'react-rough-notation'


const doctors = [
    {
        name: 'Leonard Krasner',
        role: 'Senior Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',

            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    {
        name: 'Leonard Krasner',
        role: 'Senior Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

    },
// More people...
  ]

export default function page() {
  return (
      <div className='flex flex-col items-center justify-center pt-40 w-3/4 mx-auto'>

    
          <div className='flex flex-col items-center justify-center gap-4 mb-20  text-center'>
            <HeaderText className='text-gray-950 font-semibold'>
                Meet Our {" "}
                  <RoughNotation multiline type="underline" show={true} color='#FEB7B1' animationDuration={1000} iterations={1} padding={1} strokeWidth={8}>
                      <span>
                          Doctors
                      </span>
                  </RoughNotation>

  
            </HeaderText>

            <BodyText className='text-center text-gray-600 max-w-3xl'>
                Our team of experienced doctors is dedicated to providing you with  
                the highest quality of care. With a focus on patient comfort and advanced techniques, we strive to make your dental experience as pleasant as possible.
            </BodyText>
        </div>
        

          <ul
              role="list"
              className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:grid-cols-2 lg:gap-8"
          >
              {doctors.map((person) => (
                  <li key={person.name} className="rounded-2xl bg-white px-8 py-10">
                      <Image 
                      alt='Facial Surgery Center'
                        width={208}
                        height={260}
                       src={person.imageUrl} className="ring-4 ring-white shadow-lg mx-auto size-30 rounded-full md:size-72" />
                      
                      <div className='text-center'>
                          <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-black">
                              {person.name}
                          </h3>
                          <BodyText className="text-sm/6 text-gray-800">
                          {person.role}
                          </BodyText>

                          <BodyText variant='small' className='text-gray-600'>
                                {person.bio}
                          </BodyText>

                      </div>


                  </li>
              ))}
          </ul>

<div className='flex flex-col items-center justify-center mt-20'>
              <CTA />

</div>


    </div>
  )
}
