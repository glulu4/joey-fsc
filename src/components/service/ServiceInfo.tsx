import React from 'react'
import HeaderText from '../ui/HeaderText'
import Image from 'next/image'
import BodyText from '../ui/BodyText'
import {RoughNotation, RoughNotationGroup} from "react-rough-notation";


interface ServiceInfoProps {
    title1: string;
    title2: string;
    description1: string;
    description2: string;
    imageSrc1: string;
    imageSrc2: string;
    className?: string;
    infoHeader: string;
}

export default function ServiceInfo({
    infoHeader,
    title1,
    title2,
    description1,
    description2,
    imageSrc1,
    imageSrc2,
    className,
}: ServiceInfoProps) {
    return (
        <div className='flex flex-col items-center justify-center container space-y-12 p-4 py-12'>
            <HeaderText className='text-header-text font-serif font-medium'>
                {infoHeader}
            </HeaderText>

            {/* First Row */}
            <div className='flex flex-col-reverse lg:flex-row items-center justify-around w-full gap-8'>
                <div className='flex flex-col items-start  gap-8 text-left'>
                    <RoughNotation type="highlight" show={true} color="#FBBFCA" animationDuration={1000} iterations={1} padding={10} strokeWidth={4} >

                        <HeaderText className='text-header-text font-serif font-medium'>
                        {title1}
                    </HeaderText>
                    </RoughNotation>
                    <BodyText className='text-body-text max-w-2xl'>
                        {description1}
                    </BodyText>
                </div>

                <div className=''>
                    <Image
                        src={imageSrc1}
                        alt='Wisdom Teeth'
                        width={500}
                        height={500}
                        className='object-cover'
                    />
                </div>
            </div>

            {/* Second Row - Reversed on large screens */}
            <div className='flex flex-col lg:flex-row-reverse items-center justify-around w-full gap-8 '>
                <div className='flex flex-col items-end gap-8 text-right'>
                    <RoughNotation multiline type="box" show={true} color='orange' animationDuration={1000} iterations={1} padding={10} strokeWidth={4} >
                        <HeaderText className='text-header-text font-serif font-medium'>
                            {title2}
                        </HeaderText>
                    </RoughNotation>


                    <BodyText className='text-body-text  max-w-2xl'>
                        {description2}
                        </BodyText>
                </div>

                <div>
                    <Image
                        src={imageSrc2}
                        alt='Wisdom Teeth Removal'
                        width={500}
                        height={500}
                        className='object-cover'
                    />
                </div>
            </div>
        </div>
    )
}
