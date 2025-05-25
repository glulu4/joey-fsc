// import {config} from "@/config";
// import Image from "next/image";
// import HeaderText from "../ui/HeaderText";
// export default function Example() {
//     return (
//         <div className="pt-40 overflow-hidden">


//             <div className="mx-auto w-5/6 px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
//                 <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">

//                     <HeaderText as="h1" variant="large" className="mt-10 text-stone-700 font-semibold">
//                         {config.name.name}
//                     </HeaderText>
//                     <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
//                         Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
//                         fugiat veniam occaecat.
//                     </p>
//                     {/* <div className="mt-10 flex items-center gap-x-6">
//                         <a
//                             href="#"
//                             className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
//                         >
//                             Get started
//                         </a>
//                         <a href="#" className="text-sm/6 font-semibold text-white">
//                             Learn more <span aria-hidden="true">→</span>
//                         </a>
//                     </div> */}
//                 </div>

//                 <div className="relative mx-auto mt-16 flex w-full max-w-3xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
//                     <div className="w-full lg:w-[76rem] flex-none">
//                         <div className="relative">
//                             <Image
//                                 alt="App screenshot"
//                                 src={'/images/doctor.jpg'}
//                                 width={2432}
//                                 height={1442}
//                                 className="w-full rounded-3xl bg-white/5 shadow-2xl ring-1 ring-white/10 object-cover"
//                             />
//                             <div className="absolute inset-0 rounded-3xl bg-black opacity-50 " />
//                         </div>
//                     </div>
//                 </div>

//                 {/* <div className="relative mx-auto mt-16 flex max-w-5xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
//                     <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
//                         <Image
//                             alt="App screenshot"
//                             src={'/images/doctor.jpg'}
//                             width={2432}
//                             height={1442}
//                             className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
//                         />
//                         <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
//                     </div>
//                 </div> */}
//             </div>
//         </div>
//     )
// }




// import Image from 'next/image';
// import React from 'react';

// interface HeroSectionProps {
//     imageUrl?: string;
//     imageAlt?: string;
//     headline?: string;
//     highlight?: string;
//     subcopy?: string;
//     ctaLabel?: string;
//     onCtaClick?: () => void;
// }

// const HeroSection: React.FC<HeroSectionProps> = ({
//     imageUrl,
//     imageAlt = 'Smiling person',
//     headline = 'Teeth Whitening:',
//     highlight = 'Brighter',
//     subcopy = 'Serving Central Texas for over 50 years, we put patients’ needs first, providing superior care in a safe and compassionate environment.',
//     ctaLabel = 'Schedule an Appointment →',
//     onCtaClick,
// }) => {
//     return (
//         <section className="bg-amber-50 py-44">
//             <div className="container mx-auto px-4">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

//                     {/* 1) Full-width headline */}
//                     <div className="col-span-1 lg:col-span-2 text-center max-w-2xl mx-auto">
//                         <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
//                             {headline}
//                             <br />
//                             <span>Brighter Days Start with a </span>
//                             <span className="text-amber-500">{highlight}</span>
//                             <span> Smile</span>
//                         </h1>
//                     </div>

//                     {/* 2) Image bottom-left */}
//                     <div className='w-full flex flex-col items-center lg:items-start justify-center space-y-6 sm:flex-row lg:space-x-6 lg:space-y-0 sm:justify-between'>
//                         <div className="w-full bg-slate-200">
//                             <Image
//                                 width={500}
//                                 height={500}
//                                 src="/images/smiling-woman.png"
//                                 alt={imageAlt}
//                                 className="w-full rounded-lg object-cover"
//                             />
//                         </div>

//                         {/* 3) Subcopy + CTA bottom-right */}
//                         <div className="flex flex-col items-start lg:items-end justify-center space-y-6">
//                             <p className="text-gray-700 max-w-md text-left lg:text-right">
//                                 {subcopy}
//                             </p>
//                             <button
//                                 type="button"
//                                 onClick={onCtaClick}
//                                 className="bg-teal-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-teal-700 transition"
//                             >
//                                 {ctaLabel}
//                             </button>
//                         </div>
//                     </div>


//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HeroSection;



import Image from 'next/image';
import React from 'react';
import BodyText from '../ui/BodyText';
import Button from '../Button';

interface HeroSectionProps {
    imageUrl?: string;
    imageAlt?: string;
    headline?: string;
    highlight?: string;
    subcopy?: string;
    ctaLabel?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    imageUrl = '/images/smiling-woman.png',
    imageAlt = 'Smiling person',
    highlight = 'New',
    subcopy = 'Serving Central Texas for over 50 years, we put patients’ needs first, providing superior care in a safe and compassionate environment.',
    ctaLabel = 'Schedule an Appointment',
}) => (
    <section className="pt-52 h-fit">
        {/* Decorative circle behind image */}

        <div className="">
            {/* Headline */}
            <div className="text-center sm:w-2/4 mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-gray-900 leading-tight">
                    Facial Surgery Center
                    <br />
                    <span className="font-light font-sans">Transform Your Confidence with a </span>
                    <span className="text-primaryYellow">{highlight}</span>
                    <span className="font-light"> Smile</span>
                </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-center px-12 justify-between h-full ">

                <div className='flex-[0.6]'>

                    <Image
                        src={imageUrl}
                        alt={imageAlt}
                        width={500}
                        height={500}
                        className="object-contain w-full h-full"
                    />
                </div>

                {/* Copy + CTA */}
                <div className="flex flex-col items-center md:items-start space-y-6 py-8">
                    <BodyText variant='default' className="text-gray-600 max-w-md text-center md:text-left">
                        {subcopy}
                    </BodyText>
                    {/* <button
                        type="button"
                        onClick={onCtaClick}
                        className="bg-primary-teal text-white font-semibold py-3 px-8 rounded-full hover:bg-teal-700 transition"
                    >
                        {ctaLabel}
                    </button> */}
                    <Button
                        text={ctaLabel}
                        href="#"
                    />
                </div>
            </div>
        </div>
    </section>
);

export default HeroSection;
