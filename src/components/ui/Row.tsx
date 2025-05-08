// "use client"
// // import React from 'react'

// import {ChevronRightIcon, Sparkles, Users} from "lucide-react";
// import Image from "next/image";

// interface RowProps {
//     title: string;
//     description: string;
//     imageSrc: string;   
// }

// export default function Row({

//     title,
//     description,
//     imageSrc
// }: RowProps) {
//     return (


//         <div className="mt-16 grid grid-cols-1 py-8 md:py-12 gap-12 lg:grid-cols-2 lg:items-center pt-9 sm:space-x-24 space-y-14 mx-auto">

//             <div className=" mx-10 sm:mx-0 max-w-xl lg:mx-0 lg:shrink-0 lg:pt-8 text-center sm:text-left">

//                 <div>

//                     <p className="mt-10 font-semibold  leading-none text-5xl  text-blue-950 sm:text-7xl">
//                         {title}
//                     </p>
//                 </div>

//                 <p className="mt-8 text-xl font-medium text-pretty text-gray-600 sm:text-2xl/8">
//                     {description}
//                 </p>

//             </div>
//             <div className="flex justify-center-center lg:text-left">
//                 <Image
//                     src={imageSrc}
//                     alt="Paragon Exterior Team"
//                     width={800}
//                     height={800}
//                     className="object-cover"
//                 />
//             </div>

//         </div>
//     )
// }



"use client";

import Image from "next/image";
import {DotLottieReact} from '@lottiefiles/dotlottie-react';

interface RowProps {
    title: string;
    description: string;
    imageSrc: string;
    reverse?: boolean;
    isImgLottie?: boolean;
}

export default function Row({title, description, imageSrc, reverse = false, isImgLottie = false}: RowProps) {
    return (
        <div
            className={`mt-16 py-8 md:py-12 space-y-14 lg:space-y-0 lg:py-24 mx-auto flex flex-col-reverse ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-12`}
        >
            <div className="mx-10  max-w-4xl text-center sm:text-left lg:text-left bg-slate-300">
                <p className="mt-10 font-semibold leading-none text-5xl text-blue-950 sm:text-7xl">
                    {title}
                </p>
                <p className="mt-8 text-xl font-medium text-pretty text-gray-600 sm:text-2xl/8">
                    {description}
                </p>
            </div>

            <div className="flex justify-center">
                {isImgLottie ? (
                    // <DotLottieReact
                    //     src={imageSrc}
                    //     loop
                    //     autoplay
                    //     className="w-full max-w-[800px] h-auto object-cover rounded-md shadow-lg"
                    // />
                    <DotLottieReact
                        src={imageSrc}
                        loop
                        autoplay
                    />
                ) : <Image
                    src={imageSrc}
                    alt={title}
                    width={800}
                    height={800}
                    className="object-cover rounded-md shadow-lg"
                />}
                {/* <Image
                    src={imageSrc}
                    alt={title}
                    width={800}
                    height={800}
                    className="object-cover rounded-md shadow-lg"
                /> */}


            </div>
        </div>
    );
}


