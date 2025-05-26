// "use client";
// import clsx from "clsx";
// import React from "react";
// import HeaderText from "../ui/HeaderText";
// import BodyText from "../ui/BodyText";

// interface MapCardProps {
//     title: string;
//     description: string;
//     imageSrc: string;
//     className?: string;
// }

// export default function MapCard({
//     title,
//     description,
//     imageSrc,
//     className}: MapCardProps) {

//     const width = window.innerWidth * 0.5;
//     return (
//         <div
//             className={clsx(
//                 className,
//                 // make a fixed-height flex container so both children can size against it
//                 "flex w-4/6 mx-auto",
//                 "mt-8",

                
//             )}
//         >
//             {/* 1/2 width white card, full height */}
//             <div
//             style={{marginTop: "-80px", marginBottom: "50px"}}
//                 className={clsx(
//                     "bg-primary-teal text-white rounded-lg shadow-lg p-6",
//                     "w-full md:w-1/2",
//                     "z-20",
//                     "h-[500px]"
//                 )}
//             >
//                 <HeaderText className="text-3xl md:text-4xl font-bold  mb-4">
//                     {title}
//                 </HeaderText>
//                 <BodyText className="text-base md:text-lg  mb-6 leading-relaxed">
//                     {description}
//                 </BodyText>
//                 <button className="bg-transparent border-2 border-black font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition">
//                     Let’s Do It!
//                 </button>
//             </div>

//             {/* wider image card, same container-height, overlapping underneath */}
//             <div
//                 className={clsx(
//                     "rounded-lg shadow-lg overflow-hidden",
//                     "w-full md:w-2/3 ",
//                     // pull it left under the white card
//                     "z-10 md:-ml-24",
//                     "relative bg-white",
//                     "h-[500px]"
//                 )}
//             >
//                 <img
//                     src={imageSrc}
//                     alt="Tastebud Map Illustration"
//                     className="object-cover w-full h-full"
//                 />
//             </div>
//         </div>
//     );
// }




"use client";
import clsx from "clsx";
import React from "react";
import HeaderText from "../ui/HeaderText";
import BodyText from "../ui/BodyText";
import Image from "next/image";

interface MapCardProps {
    title: string;
    description: string;
    imageSrc: string;
    className?: string;
}

export default function MapCard({
    title,
    description,
    imageSrc,
    className,
}: MapCardProps) {
    return (
        <div
            className={clsx(
                className,
                "flex flex-col-reverse md:flex-row w-full md:w-4/5 mx-auto mt-8",
            )}
        >
            
            <div
                className={clsx(
                    "bg-primary-teal text-white rounded-lg shadow-lg p-6 mx-auto w-4/5 md:w-1/2",
                    "z-20",
                    "md:h-[500px] flex flex-col justify-around",
                    "relative",

                )}
                style={{marginTop: "-80px", marginBottom: "50px"}}
            >
                <HeaderText className="font-bold mb-4">
                    {title}
                </HeaderText>
                <BodyText className="mb-6">
                    {description}
                </BodyText>

            </div>

            {/* Image Section - Full width on mobile, half width on md, overlapping underneath */}
            <div
                className={clsx(
                    "rounded-lg shadow-lg overflow-hidden w-full md:w-2/3",
                    "z-10 md:-ml-24",
                    "relative",
                    "h-[500px]",
                    "bg-white"
                )}
            >
                <Image
                    width={500}   
                    height={500}
                    src={imageSrc}
                    alt="Tastebud Map Illustration"
                    className="object-scale-down w-full h-full"
                />
            </div>
        </div>
    );
}