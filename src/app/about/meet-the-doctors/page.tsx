import CTA from '@/components/CTA'
import BodyText from '@/components/ui/BodyText'
import HeaderText from '@/components/ui/HeaderText'
import Image from 'next/image'
import React from 'react'
import {RoughNotation} from 'react-rough-notation'


const doctors = [
    {
        name: 'Dr. Jospeh Gulko',
        role: 'Senior Designer',
        imageUrl:"/images/profiles/joey-profile.webp",
        bio: `
Dr. Joseph Gulko joined Facial Surgery in July 2025 and is dedicated to delivering exceptional, compassionate care to every patient.

Originally from Philadelphia, PA, Dr. Gulko attended New York University, where he majored in economics and chemistry, graduating summa cum laude. He went on to earn his dental degree from Columbia University College of Dental Medicine, where he was recognized with the AAOMS Dental Implant Award for his outstanding clinical achievements.

He then went on to complete his medical degree at UT Southwestern, one of the nation’s top-ranked medical schools. He remained in Dallas to complete a general surgery internship and receive advanced training in both adult and pediatric anesthesia. His six-year oral and maxillofacial surgery residency at Parkland Hospital provided rigorous training under some of the most respected surgeons in the field.

His clinical interests include complex dental implantology, wisdom tooth extractions, sedation and general anesthesia, orthognathic (jaw) surgery, TMJ disorders, facial trauma and reconstruction, oral pathology, and the treatment of osteonecrosis.

Known for his attention to detail and patient-first approach, Dr. Gulko is dedicated to using the most up-to-date techniques to ensure the highest level of care.

Outside the office, he enjoys spending time with his wife, Jen, their son, William, and their dog, Freddie. He’s an avid hiker, tennis player, and always on the lookout for great restaurants.
        `,
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
      <div className='flex flex-col items-center justify-center pt-40 w-4/6 mx-auto py-16'>

    
          <div className='flex flex-col items-center justify-center gap-4 mb-20  text-center'>
            <HeaderText className='text-header-text font-serif font-medium'>
                Meet Our {" "}
                  <RoughNotation multiline type="underline" show={true} color='#FEB7B1' animationDuration={1000} iterations={1} padding={1} strokeWidth={8}>
                      <span>
                          Doctors
                      </span>
                  </RoughNotation>

  
            </HeaderText>

            <BodyText className='text-center text-body-text max-w-3xl'>
                Our team of experienced doctors is dedicated to providing you with  
                the highest quality of care. With a focus on patient comfort and advanced techniques, we strive to make your dental experience as pleasant as possible.
            </BodyText>
        </div>
        

          <ul
              role="list"
              className=" flex flex-col mx-auto mt-20  max-w-5xl lg:gap-8"
          >
              {doctors.map((person) => (
                  <li key={person.name} className="rounded-2xl  px-8 py-10">
                      <Image 
                      alt='Facial Surgery Center'
                        width={208}
                        height={260}
                       src={person.imageUrl} className="ring-4 ring-white shadow-lg mx-auto size-30 rounded-full md:size-72" />
                      
                      <div className='text-center'>
                          <HeaderText variant='small' className="mt-6 font-medium tracking-tight text-header-text font-serif pb-6">
                              {person.name}
                          </HeaderText>


                          {/* <BodyText className='text-body-text'>
                                {person.bio}
                          </BodyText> */}
                          <BodyText className="text-body-text space-y-2">
                              {person.bio
                                  .trim()
                                  .split('\n\n')
                                  .map((paragraph, idx) => (
                                      <p key={idx} className="mb-4">
                                          {paragraph.trim()}
                                      </p>
                                  ))}
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
