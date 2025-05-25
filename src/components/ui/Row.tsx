// "use client";

// import Image from "next/image";
// import {DotLottieReact} from '@lottiefiles/dotlottie-react';
// import HeaderText from "./HeaderText";
// import BodyText from "./BodyText";

// interface RowProps {
//     title: string;
//     description: string;
//     imageSrc: string;
//     reverse?: boolean;
//     isImgLottie?: boolean;
//     className?: string;

// }

// export default function Row({title, description, imageSrc, reverse = false, isImgLottie = false, className}: RowProps) {
//     return (
//         <div
//             className={`${className} flex flex-col-reverse ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center justify-between w-full`}
//         >
//             <div className="flex-[0.6] max-w-xl justify-start text-left  ">
//                 <HeaderText className="mt-10 font-semibold text-gray-950">
//                     {title}
//                 </HeaderText>
//                 <BodyText className="mt-10 font-medium text-gray-600">
//                     {description}
//                 </BodyText>
//             </div>

//             <div className="flex justify-center flex-[0.4]">
//                 {isImgLottie ? (

//                     <DotLottieReact
//                         src={imageSrc}
//                         loop
//                         autoplay
//                     />
//                 ) : <Image
//                     src={imageSrc}
//                     alt={title}
//                     width={500}
//                     height={500}
//                     className="object-fill "
//                 />}

//             </div>
//         </div>
//     );
// }


"use client";

import Image from "next/image";
import {DotLottieReact} from "@lottiefiles/dotlottie-react";
import HeaderText from "./HeaderText";
import BodyText from "./BodyText";

interface RowProps {
    title: string;
    description: string;
    imageSrc: string;
    reverse?: boolean;
    isImgLottie?: boolean;
    className?: string;
    /** Tailwind color class for the header text */
    headerColor?: string;
    /** Tailwind color class for the body text */
    bodyColor?: string;
}

export default function Row({
    title,
    description,
    imageSrc,
    reverse = false,
    isImgLottie = false,
    className = "",
    headerColor = "text-gray-950",
    bodyColor = "text-gray-600",
}: RowProps) {
    return (
        <div
            className={`${className} container flex flex-col-reverse ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center justify-between w-full`}
        >
            <div className="flex-[0.6] max-w-xl justify-start text-left">
                <HeaderText variant="small" className={`mt-10 font-semibold ${headerColor}`}>
                    {title}
                </HeaderText>
                <BodyText className={`mt-10 font-medium ${bodyColor}`}>
                    {description}
                </BodyText>
            </div>

            <div className="flex justify-center flex-[0.4]">
                {isImgLottie ? (
                    <DotLottieReact src={imageSrc} loop autoplay />
                ) : (
                    <Image
                        src={imageSrc}
                        alt={title}
                        width={500}
                        height={500}
                            className="object-fill  rounded-xl shadow-xl ring-1 ring-gray-400/10"
                    />
                )}
            </div>
        </div>
    );
}
