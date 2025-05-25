
// // "use client";

// // import Image from "next/image";
// // import {useTransform, motion, useScroll, MotionValue} from "framer-motion";
// // import {useRef} from "react";
// // import clsx from "clsx";

// // interface CardProps {
// //     imgSrc: string;
// //     i: number;
// //     progress: MotionValue<number>;
// //     range: number[];
// //     targetScale: number;

// //     title: string;
// //     description: string;
// //     // src: string;
// //     // url: string;
// //     color: string;

// // }

// // const Card = ({i, imgSrc, progress, range, targetScale, title, description, color}: CardProps) => {
// //     const container = useRef(null);
// //     const {scrollYProgress} = useScroll({
// //         target: container,
// //         offset: ["start end", "start start"],
// //     });

// //     const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
// //     const scale = useTransform(progress, range, [1, targetScale]);


// //     console.log("imgSrc", imgSrc);
    
// //     return (
// //         <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
// //             <motion.div
// //                 style={{backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)`}}
// //                 className={clsx(
// //                     "flex flex-col relative -top-[25%]  min-h-[500px] max-w-7xl mx-auto rounded-3xl p-14 origin-top")}
// //             >
// //                 <h2 className="text-center m-0 text-base">{title}</h2>
// //                 <div className="flex h-full mt-[50px] gap-[50px]">
// //                     <div className="w-[40%] relative top-[10%]">
// //                         <p className="text-base text-wrap  first-letter:font-['Title']">
// //                             {description}
// //                             </p>
// //                         <span className="flex items-center gap-[5px]">

// //                             <svg
// //                                 width="22"
// //                                 height="12"
// //                                 viewBox="0 0 22 12"
// //                                 fill="none"
// //                                 xmlns="http://www.w3.org/2000/svg"
// //                             >
// //                                 <path
// //                                     d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
// //                                     fill="black"
// //                                 />
// //                             </svg>
// //                         </span>
// //                     </div>
// //                     <div className="relative w-[60%] h-full rounded-[25px] overflow-hidden">
// //                         {/* <motion.div className="w-full h-full" style={{scale: imageScale}}> */}
// //                             <img  src={imgSrc} alt="image" className="object-cover" />
// //                         {/* </motion.div> */}
// //                     </div>
// //                 </div>
// //             </motion.div>
// //         </div>
// //     );
// // };

// // export default Card;

// "use client";
// import Image from "next/image";
// import {useTransform, motion, useScroll, MotionValue} from "framer-motion";
// import {useRef} from "react";
// import clsx from "clsx";

// interface CardProps {
//     imgSrc: string;
//     i: number;
//     progress: MotionValue<number>;
//     range: number[];
//     targetScale: number;
//     title: string;
//     description: string;
//     color: string;
// }

// const Card = ({i, imgSrc, progress, range, targetScale, title, description, color}: CardProps) => {
//     const container = useRef(null);
//     const {scrollYProgress} = useScroll({
//         target: container,
//         offset: ["start end", "start start"],
//     });

//     const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
//     const scale = useTransform(progress, range, [1, targetScale]);

//     return (
//         // <div ref={container} className="min-h-screen flex items-center justify-center sticky top-0 px-4 sm:px-6 lg:px-8">
//         <div ref={container} className="min-h-screen flex items-center justify-center sticky top-20 sm:top-24 lg:top-28 px-4 sm:px-6 lg:px-8">

//         <motion.div
//                 style={{
//                     backgroundColor: color,
//                     scale,
//                     top: `calc(-5vh + ${i * 15}px)` // Reduced stacking on mobile
//                 }}
//                 className={clsx(
//                     "flex flex-col relative w-full max-w-7xl mx-auto rounded-2xl sm:rounded-3xl origin-top",
//                     "min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]", // Responsive heights
//                     "p-6 sm:p-8 md:p-12 lg:p-14", // Responsive padding
//                     "-top-[15%] sm:-top-[20%] lg:-top-[25%]" // Responsive positioning
//                 )}
//             >
//                 {/* Title */}
//                 <h2 className="text-center m-0 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8">
//                     {title}
//                 </h2>

//                 {/* Content Container */}
//                 <div className="flex flex-col lg:flex-row h-full gap-6 sm:gap-8 lg:gap-12 flex-1">
//                     {/* Text Content */}
//                     <div className="w-full lg:w-[40%] flex flex-col justify-center order-2 lg:order-1">
//                         <div className="space-y-4 sm:space-y-6">
//                             <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-800 first-letter:text-2xl first-letter:font-bold first-letter:mr-1">
//                                 {description}
//                             </p>

//                             {/* Arrow Icon */}
//                             <div className="flex items-center">
//                                 <span className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors cursor-pointer group">
//                                     <span className="text-sm font-medium">Learn More</span>
//                                     <svg
//                                         width="20"
//                                         height="12"
//                                         viewBox="0 0 22 12"
//                                         fill="none"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="group-hover:translate-x-1 transition-transform duration-200"
//                                     >
//                                         <path
//                                             d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
//                                             fill="currentColor"
//                                         />
//                                     </svg>
//                                 </span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Image Container */}
//                     <div className="relative w-full lg:w-[60%] h-48 sm:h-64 md:h-80 lg:h-full rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden order-1 lg:order-2 shadow-lg">
//                         <motion.div
//                             className="w-full h-full"
//                             style={{scale: imageScale}}
//                         >
//                             <img
//                                 src={imgSrc}
//                                 alt={title}
//                                 className="object-cover w-full h-full"
//                                 loading="lazy"
//                             />
//                         </motion.div>
//                     </div>
//                 </div>
//             </motion.div>
//         </div>
//     );
// };

// export default Card;



"use client";
import Image from "next/image";
import {useTransform, motion, useScroll, MotionValue} from "framer-motion";
import {useRef} from "react";
import clsx from "clsx";
import HeaderText from "../ui/HeaderText";
import {Button} from "../ui/button";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

interface CardProps {
    imgSrc: string;
    i: number;
    progress: MotionValue<number>;
    range: number[];
    targetScale: number;
    title: string;
    description: string;
    color: string;
}

const Card = ({i, imgSrc, progress, range, targetScale, title, description, color}: CardProps) => {
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ["start end", "start start"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        // <div ref={container} className="min-h-[50vh] flex items-center justify-center sticky top-0 px-4 sm:px-6 lg:px-8">
        <div ref={container} className="min-h-screen flex items-center justify-center sticky top-20 sm:top-24 lg:top-28 px-4 sm:px-6 lg:px-8">

            <motion.div
                style={{
                    backgroundColor: color,
                    scale,
                    top: `calc(-5vh + ${i * 15}px)` // Reduced stacking on mobile
                }}
                className={clsx(
                    "flex flex-col relative w-full max-w-5xl mx-auto rounded-2xl sm:rounded-3xl origin-top",
                    "min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]", // Responsive heights
                    "p-6 sm:p-8 md:p-12 lg:p-14", // Responsive padding
                    "-top-[15%] sm:-top-[20%] lg:-top-[25%]" // Responsive positioning
                )}
            >
                {/* Title */}
                <HeaderText className="text-white text-left m-0 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8">
                    {title}
                </HeaderText>

                {/* Content Container */}
                <div className="flex flex-col lg:flex-row h-full gap-6 sm:gap-8 lg:gap-12 flex-1">
                    {/* Text Content */}
                    <div className="w-full lg:w-[40%] flex flex-col justify-center order-2 lg:order-1">
                        <div className="space-y-4 sm:space-y-6">
                            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-300 first-letter:text-2xl first-letter:font-bold first-letter:mr-1">
                                {description}
                            </p>

                            {/* Arrow Icon */}
                            <div className="">
                                <Button
                                    className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-none px-8 py-6 text-base font-medium tracking-wide hover:scale-105 hover:shadow-2xl"
                                    size="lg"
                                    asChild
                                >
  
                                </Button>
                            </div>

                        </div>
                    </div>

                    {/* Image Container */}
                    <div className=" relative w-full lg:w-[60%] h-48 sm:h-64 md:h-80 lg:h-full rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden order-1 lg:order-2 shadow-lg">
                        <motion.div
                            className="w-full h-full"
                            style={{scale: imageScale}}
                        >
                            <img
                                src={imgSrc}
                                alt={title}
                                className="object-cover w-full h-full"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Card;