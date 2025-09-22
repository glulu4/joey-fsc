import CTA from '@/components/CTA'
import BodyText from '@/components/ui/BodyText'
import HeaderText from '@/components/ui/HeaderText'
import Image from 'next/image'
import React from 'react'
import {RoughNotation} from 'react-rough-notation'

export default function page() {
    return (
        <div className="py-44">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center sm:mt-10">
                    <HeaderText className="text-header-text font-serif font-medium text-center">
                        <RoughNotation multiline type="underline" show={true} color='#FFBA01' animationDuration={1000} iterations={1} padding={1} strokeWidth={8}>
                            Meet Our Team
                        </RoughNotation>
                    </HeaderText>
                    <BodyText className="mt-6 text-body-text text-center">
                        Our dedicated office staff is the heart of the Facial Surgery Center. Coordinating care, guiding patients, and making every experience seamless. Their commitment, compassion, and attention to detail are what make it all possible.
                    </BodyText>
                </div>


                <Image
                
                width={1200}
                height={800}
                    className="mt-16 w-full rounded-2xl object-cover"
                    alt='Office team picture'
                    src="/images/about/office.webp"
                

                />

                <CTA />
            </div>


        </div>
    )
}