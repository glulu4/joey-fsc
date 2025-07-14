"use client";
import React, {useEffect, useRef, useState} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import HeaderText from "../ui/HeaderText";
import BodyText from "../ui/BodyText";
import Image from "next/image";
import {isMobile} from 'react-device-detect';

export const services = [
    {
        name: "Anesthesia",
        img: "/images/services/anesthesia/anesthesia.webp",
        href: "/service/anesthesia",
        description: "We offer safe and effective anesthesia options to ensure a comfortable surgical experience with minimal discomfort or anxiety.",
    },
    {
        name: "Bone Grafting",
        img: "/images/services/bone-graft/bone-graft.webp",
        href: "/service/bone-grafting",
        description: "Bone grafting restores bone structure in the jaw, often as preparation for dental implants or following trauma or disease.",
    },
    {
        name: "Botox",
        img: "/images/services/botox/botox.webp",
        href: "/service/botox-and-filler",
        description: "Botox and dermal fillers help smooth fine lines, reduce wrinkles, and restore youthful volume to facial features.",
    },
    {
        name: "Facial Trauma",
        img: "/images/services/facial-trauma/facial-trauma.webp",
        href: "/service/facial-trauma",
        description: "We specialize in treating facial injuries, including fractures and lacerations, with precision and compassion.",
    },
    {
        name: "Genioplasty / Chin Surgery",
        img: "/images/services/genioplasty/genioplasty.webp",
        href: "/service/genioplasty",
        description: "Genioplasty enhances the chin’s shape and projection to create facial balance and improve appearance or function.",
    },
    {
        name: "Dental Implants",
        img: "/images/services/implant/implants.webp",
        href: "/service/dental-implants",
        description: "Dental implants are a permanent solution for missing teeth, offering natural-looking results and long-term stability.",
    },
    {
        name: "Oral Pathology",
        img: "/images/services/oral-pathology/oral-pathology.webp",
        href: "/service/oral-pathology",
        description: "We diagnose and treat oral diseases and abnormalities, including cysts, tumors, and lesions of the mouth and jaw.",
    },
    {
        name: "Orthognathic Surgery",
        img: "/images/services/orthognathic/orthognathic.webp",
        href: "/service/orthognathic-surgery",
        description: "Orthognathic (jaw) surgery corrects misaligned jaws to improve function, facial symmetry, and breathing.",
    },
    {
        name: "Sleep Apnea",
        img: "/images/services/sleep-apnea/sleep-apnea.webp",
        href: "/service/sleep-apnea",
        description: "We offer surgical solutions for obstructive sleep apnea to improve airflow, reduce snoring, and enhance sleep quality.",
    },
    {
        name: "TMJ",
        img: "/images/services/tmj/tmj.webp",
        href: "/service/tmj",
        description: "TMJ treatment relieves jaw pain, stiffness, and clicking caused by temporomandibular joint disorders.",
    },
    {
        name: "Tooth Extractions",
        img: "/images/services/tooth-extract/tooth-extract.webp",
        href: "/service/extractions",
        description: "We perform gentle, precise tooth extractions when teeth are damaged, decayed, or causing crowding.",
    },
    {
        name: "Wisdom Teeth",
        img: "/images/services/wisdom/wisdom-tooth.webp",
        href: "/service/wisdom-tooth",
        description: "Wisdom tooth removal prevents crowding, pain, and infections by safely extracting third molars.",
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
                {services.map((item, idx) => (
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
                                {item.description}
                            </BodyText>

                        </div>
                        <div className="self-center">
                            <Image
                                width={200}
                                height={200}
                                alt="App screenshot"
                                src={item.img}
                                className="sm:w-full sm:h-full object-cover"
                                priority
                            />
                        </div>

                    </a>
                ))}

            </div>


        </div>
    );
}
