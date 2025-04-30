// // import {config} from "@/config";
// // import Image from "next/image";
// // import React, {useState, useEffect, useRef} from "react";

// import {ChevronRight} from "lucide-react";



// // interface HeroProps {
// //     text?: string
// //     secText?: string;

// // }
// // const Hero = ({text, secText}: HeroProps) => {



// //     return (
// //         <div className="relative h-[95vh] w-full overflow-hidden z-0">
            
// //             <Image
// //                 className="absolute top-0 left-0 h-full w-full object-cover"
// //                 src="/images/doctor.jpg"
// //                 alt="ISSAC18"
// //                 width={1920}
// //                 height={1080}

// //             />

// //             {/* Overlay Content */}
// //             <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-col justify-center items-start pb-20 bg-black bg-opacity-50 text-white text-center px-6">
// //                 <div className="flex flex-col items-start px-6 md:px-16">

// //                     <h1 className="text-5xl text-left sm:text-5xl lg:text-6xl font-bold mb-4">
// //                         {config.name.name}
// //                     </h1>
// //                     <p className="font-serif text-left text-xl mb-6 max-w-4xl">
// //                         ISAACC18 is a dedicated international group of volunteer anesthesiologists and critical care physicians committed to supporting the Israeli Anesthesia and Critical Care community with clinical staffing, education, and collaborative academic partnerships that foster excellence in medical care in Israel and around the world.
// //                     </p>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Hero;



// export default function Hero() {
//     return (
//         <div className="relative isolate overflow-hidden bg-white">
//             <svg
//                 aria-hidden="true"
//                 className="absolute inset-0 -z-10 size-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
//             >
//                 <defs>
//                     <pattern
//                         x="50%"
//                         y={-1}
//                         id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
//                         width={200}
//                         height={200}
//                         patternUnits="userSpaceOnUse"
//                     >
//                         <path d="M.5 200V.5H200" fill="none" />
//                     </pattern>
//                 </defs>
//                 <rect fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" width="100%" height="100%" strokeWidth={0} />
//             </svg>
//             <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:justify-between lg:py-40">
//                 <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
//                     <img
//                         alt="Your Company"
//                         src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
//                         className="h-11"
//                     />
 
//                     <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
//                         Deploy to the cloud with confidence
//                     </h1>
//                     <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
//                         Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
//                         fugiat veniam occaecat.
//                     </p>
//                     <div className="mt-10 flex items-center gap-x-6">
//                         <a
//                             href="#"
//                             className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                         >
//                             Get started
//                         </a>
//                         <a href="#" className="text-sm/6 font-semibold text-gray-900">
//                             Learn more <span aria-hidden="true">→</span>
//                         </a>
//                     </div>
//                 </div>
//                 <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
//                     <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
//                         <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
//                             <img
//                                 alt="App screenshot"
//                                 src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
//                                 width={2432}
//                                 height={1442}
//                                 className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }



'use client'

import {config} from '@/config'
import {MoreHorizontal} from 'lucide-react'
import Image from 'next/image'
import {useState} from 'react'
// import {Dialog, DialogPanel} from '@headlessui/react'
// import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'

const navigation = [
    {name: 'Product', href: '#'},
    {name: 'Features', href: '#'},
    {name: 'Marketplace', href: '#'},
    {name: 'Company', href: '#'},
]

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="">
 
            <div className="relative isolate pt-14">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div className="py-24 sm:py-32 lg:pb-40">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                                {config.name.name}
                            </h1>
                            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                                fugiat veniam occaecat.
                            </p>
                        </div>
                        <div className="mt-16 flow-root sm:mt-24">
                            <div className="-m-2 rounded-xl bg-primary/5 p-2 ring-1 ring-primary/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
                                <Image
                                    alt="App screenshot"
                                    src={'/images/doctor.jpg'}
                                    width={2432}
                                    height={1442}
                                    className="rounded-md shadow-2xl ring-1 ring-primary/10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    />
                </div>
            </div>
        </div>
    )
}
