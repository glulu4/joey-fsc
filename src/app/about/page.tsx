import OurValues from '@/components/about/OurValues'
import CTA from '@/components/CTA'
import Location from '@/components/landing/Location'
import MapCard from '@/components/service/MapCard'
import BodyText from '@/components/ui/BodyText'
import HeaderText from '@/components/ui/HeaderText'
import React from 'react'

export default function page() {
  return (
    <div className='mt-52'>

      <div className='mx-auto max-w-3xl text-center space-y-8'>

        <HeaderText className='text-primary-teal text-4xl md:text-6xl font-semibold'>
          About Facial Surgery Center
        </HeaderText>

        <BodyText>
          Welcome to Facial Surgery Center, where we are dedicated to providing exceptional care and advanced surgical solutions for all your facial and oral health needs. Our team of experienced professionals is committed to ensuring your comfort and satisfaction throughout your treatment journey. With state-of-the-art facilities and a patient-centered approach, we strive to deliver the highest quality of care in a warm and welcoming environment.
        </BodyText>


      </div>


      <div className='mt-52 flex flex-col items-center justify-center gap-8'>
        <MapCard

          title='Our Location'
          description='lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          imageSrc='/images/about/about-fsc-icon.png'
        />
      </div>


      <div className='mt-52'>
        <OurValues />
      </div>

      <div className="container">
        <Location />
      </div>
      

      <div>
        <CTA/>
      </div>
    </div>
  )
}
