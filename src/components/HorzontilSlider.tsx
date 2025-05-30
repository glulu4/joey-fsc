"use client";
import React, {useEffect, useRef, useState} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import HeaderText from "./ui/HeaderText";
import BodyText from "./ui/BodyText";
import Image from "next/image";
import {isMobile} from 'react-device-detect';

export const SAMPLE_DATA = [
    
{
   
    name: "Anesthesia",
    img: "/images/services/anesthesia.png",
        href: "/service/anesthesia",


},

    {
    name: "Bone Grafting",
    img: "/images/services/bone-graft.png",
        href: "/service/bone-grafting",
    
    },

    {
    name: "Botox",
    img: "/images/services/botox.png",
        href: "/service/botox-and-filler"
    },

    {
    name: "Facial Trauma",
    img: "/images/services/facial-trauma.png",
        href: "/service/facial-trauma",
    },
    {
    name: "Genioplasty / Chin Surgery",
    img: "/images/services/genioplasty.png",
        href: "/service/genioplasty",

    },
    {
        name: "Dental Implants",
        img: "/images/services/implants.png",
        href: "/service/dental-implants",
    },
    {
        name: "Oral Pathology",
        img: "/images/services/oral-pathology.png",
        href: "/service/oral-pathology",
    },
    {
        name: "Orthognathic Surgery",
        img: "/images/services/orthognathic.png",
        href: "/service/orthognathic-surgery",
    },
    {
        name: "Sleep Apnea",
    img: "/images/services/sleep-apnea.png",
        href: "/service/sleep-apnea",
    },
    {
        name: "TMJ",
        img: "/images/services/tmj.png",
        href: "/service/tmj",
    },

    {
        name: "Tooth Extractions",
        img: "/images/services/tooth-extract.png",
        href: "/service/extractions",
        
    },
    {
        name: "Wisdom Teeth",
        img: "/images/services/wisdom-tooth.png",
        href: "/service/wisdom-tooth",
    },



];


//1500;

export default function HorizontalSlider() {
    const containerRef = useRef<HTMLDivElement>(null);

    const [itemWidth, setItemWidth] = useState<number>(400);
    const [itemHeight, setItemHeight] = useState<number>(400);


    useEffect(() => {

        if (typeof window === "undefined") return;
        const width = isMobile ? window.innerWidth * 0.8 : window.innerWidth * 0.4;
        const height = window.innerHeight * 0.8;
        setItemHeight(height);

        setItemWidth(width);
    }, []);





    const handleScroll = (scrollAmount: number) => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += scrollAmount;
        }
    };

    return (
        <div className="flex flex-col items-center w-full px-4">

            <div className="flex flex-row items-center justify-between w-full ">
                <HeaderText className="font-medium text-header-text mb-12 font-serif px-6">
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
                    <a
                        href={item.href}  
                        key={idx}
                        className={` bg-background snap-center shrink-0 rounded-3xl shadow-md flex flex-col items-center justify-around text-center p-6`}
                        style={{
                            width: `${itemWidth}px`,
                            height: itemHeight + "px",
                        }}
                    >
                        <div className="self-start text-left w-3/4 space-y-6">
                            <HeaderText variant="small" className="text-header-text mb-12 font-serif" >
                               {item.name}
                            </HeaderText>          
                            <BodyText className="text-body-text ">
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

                    </a>
                ))}
            </div>


        </div>
    );
}
