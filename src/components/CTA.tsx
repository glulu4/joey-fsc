"use client"
import React, {useEffect} from 'react'
import HeaderText from './ui/HeaderText'
import BodyText from './ui/BodyText'
import Button from './Button'
import {RoughNotation} from 'react-rough-notation'
import { isMobile } from 'react-device-detect'

export default function CTA() {

  const [padding, setPadding] = React.useState(0)
  const [strokeWidth, setStrokeWidth] = React.useState(1)

  useEffect(() => {


    if (isMobile) {
      setPadding(4)
      setStrokeWidth(4)
    }
    else {
      setPadding(12)
      setStrokeWidth(8)
    }


  }, [])

  return (
    <div className='flex flex-col items-center justify-center py-32'>

      <div className='flex flex-col items-center justify-center w-10/12 sm:w-3/5 mx-auto text-center space-y-8'>
            <HeaderText className='text-header-text font-serif font-medium'>

              <span className=''>
            Schedule Your {' '}

              </span>
                
          <RoughNotation 
           type="underline" show={true} color='#69d9e3' animationDuration={1000} iterations={1} padding={2} strokeWidth={strokeWidth}>
                      Consultation 
                </RoughNotation>
          {' '}Today
            </HeaderText>
            <BodyText>
                We are here to help you with all  
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium velit optio corporis inventore voluptates reprehenderit quae, ex recusandae labore consequatur eum dolorem deserunt odio odit alias? Fugiat distinctio dolorum reiciendis!
            </BodyText>
        </div>

        <Button
        text='Schedule Today'
        href='/contact'
        className='mt-8'
        />
    </div>
  )
}
