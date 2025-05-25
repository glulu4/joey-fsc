import clsx from 'clsx'
import React from 'react'
import HeaderText from '../ui/HeaderText'
import BodyText from '../ui/BodyText';

interface ServiceHeroProps {
    title: string;
    description: string;
    imageSrc: string;
    className?: string;
}

export default function ServiceHero({
    title,
    description,
    imageSrc,
    className,

}:ServiceHeroProps) {
  return (
    <div className={clsx(
        'bg-primaryCyan/30 w-full h-full  rounded-[48px] flex flex-col items-center justify-center',
        "sm:flex-row sm:justify-between sm:items-center",
        "p-10 px-20",
        "shadow-md",
        )}>

        <div className='max-w-xl h-full flex flex-col items-start justify-between space-y-5'>
            <HeaderText variant='large'>
                {title}
            </HeaderText>

            <BodyText>
                {description}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Doloremque, aliquid. Error veniam dolore quibusdam consequuntur aspernatur sunt impedit repellendus consequatur 
                ullam possimus, necessitatibus cum cumque odio enim officia explicabo odit.
            </BodyText>
        </div>

        <div>
            <img
                src={imageSrc}
                alt={title}
                className='w-full h-full object-cover rounded-[48px] sm:w-[500px] sm:h-[500px]'
            />
        </div>

        
        
    </div>
  )
}
