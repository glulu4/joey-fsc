import React from 'react'
import HeaderText from './ui/HeaderText'
import BodyText from './ui/BodyText'
import Button from './Button'
import {RoughNotation} from 'react-rough-notation'

export default function CTA() {
  return (
    <div className='flex flex-col items-center justify-center py-32 '>

        <div className='flex flex-col items-center justify-center w-2/4 mx-auto text-center space-y-8'>
            <HeaderText className='text-gray-950 font-semibold'>
                Schedule Your {' '}
                
          <RoughNotation multiline type="circle" show={true} color='#69d9e3' animationDuration={1000} iterations={1} padding={5} strokeWidth={8}>
                Consultation 
          </RoughNotation>
                Today
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
