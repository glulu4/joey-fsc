import Content from '@/components/about/Content'
import CTA from '@/components/CTA'
import Location from '@/components/landing/Location'
import BodyText from '@/components/ui/BodyText'
import HeaderText from '@/components/ui/HeaderText'
import React from 'react'

export default function page() {
  return (
    <div className='mt-52'>
      <div className='mx-auto  w-4/6  text-center space-y-8'>
        <HeaderText className='text-header-text font-medium font-serif pb-6'>
          About The Facial Surgery Center
        </HeaderText>
        <BodyText className='text-body-text'>
          Welcome to The Facial Surgery Center, where we are dedicated to providing exceptional care and advanced surgical solutions for all your facial and oral health needs. Our team of experienced professionals is committed to ensuring your comfort and satisfaction throughout your treatment journey. With state-of-the-art facilities and a patient-centered approach, we strive to deliver the highest quality of care in a warm and welcoming environment.
        </BodyText>
      </div>
      <div className='mt-20'>
        {/* <OurValues /> */}
        <Content/>
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
