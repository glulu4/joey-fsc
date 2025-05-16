"use client";
import React, {useRef} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import HeaderText from "./ui/HeaderText";
import BodyText from "./ui/BodyText";
import Image from "next/image";
import {isMobile} from 'react-device-detect';

export const SAMPLE_DATA = [
    
{
    
    name: "Anesthesia",
    img: "/images/services/anesthesia.png",
},


    {
    name: "Bone Grafting",
    img: "/images/services/bone-graft.png",
    },
    {
    name: "Botox",
    img: "/images/services/botox.png",
    },
    {
    name: "Facial Trauma",
    img: "/images/services/facial-trauma.png",
    },
    {
    name: "Genioplasty / Chin Surgery",
    img: "/images/services/genioplasty.png",

    },
    {
        name: "Dental Implants",
        img: "/images/services/implants.png",
    },
    {
        name: "Oral Pathology",
        img: "/images/services/oral-pathology.png",
    },
    {
        name: "Orthognathic Surgery",
        img: "/images/services/orthognathic.png",
    },
    {
        name: "Sleep Apnea",
    img: "/images/services/sleep-apnea.png",
    },
    {
    name: "TMJ",
    img: "/images/services/tmj.png",
   
    },
    {
        name: "Tooth Extractions",
        img: "/images/services/tooth-extract.png",
        
    },
    {
        name: "Wisdom Teeth",
        img: "/images/services/wisdom-tooth.png",
    },



];


//1500;

export default function HorizontalSlider() {
    const containerRef = useRef<HTMLDivElement>(null);

    const [itemWidth, setItemWidth] = React.useState(() => {

        if (isMobile){
            return window.innerWidth * 0.8;
        }
        else{
            return window.innerWidth * 0.4;
        }
        
    });





    const handleScroll = (scrollAmount: number) => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += scrollAmount;
        }
    };

    return (
        <div className="flex flex-col items-center w-full px-4">

            <div className="flex flex-row items-center justify-between w-full ">
                <HeaderText className=" text-gray-950 px-6">
                    Services We Offer
                </HeaderText>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => handleScroll(-itemWidth)}
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-orange-700/75 flex items-center justify-center shadow-sm"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>

                    <button
                        onClick={() => handleScroll(itemWidth)}
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-orange-700/75 flex items-center justify-center shadow-sm"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                </div>
            </div>


            <div
                ref={containerRef}
                className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-6 py-6"
            >
                {SAMPLE_DATA.map((item, idx) => (
                    <div
                        key={idx}
                        className={` bg-background snap-center shrink-0 rounded-3xl shadow-md flex flex-col items-center justify-around text-center p-6`}
                        style={{
                            width: `${itemWidth}px`,
                            height: window.innerHeight * 0.8,//"400px",
                        }}
                    >
                        <div className="self-start text-left w-3/4 space-y-6">
                            <HeaderText variant="small" className="text-gray-950 font-semibold" >
                               {item.name}
                            </HeaderText>          
                            <BodyText className="text-gray-600 ">
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </BodyText>

                        </div>
                        <div className="self-center">
                            <Image
                            width={200}
                            height={200}
                            alt="App screenshot"
                            src={item.img}
                            className="w-full h-full object-cover"
                            priority
                            />
                        </div>

                    </div>
                ))}
            </div>


        </div>
    );
}
