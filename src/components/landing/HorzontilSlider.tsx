"use client";
import React, {useEffect, useRef, useState} from "react";
import {ChevronLeft, ChevronRight, ArrowRight} from "lucide-react";
import Image from "next/image";
import HeaderText from "../ui/HeaderText";
import BodyText from "../ui/BodyText";
import {serviceHrefMap} from "@/lib/service-href-map";

export const services = [
    {
        name: "Anesthesia",
        img: "/images/services/anesthesia/anesthesia.webp",
        slug: "anesthesia",
        href: serviceHrefMap["anesthesia"],
        description: "We offer safe and effective anesthesia options to ensure a comfortable surgical experience with minimal discomfort or anxiety.",
    },
    {
        name: "Bone Grafting",
        img: "/images/services/bone-graft/bone-graft.webp",
        slug: "bone-grafting",
        href: serviceHrefMap["dental-bone-grafting"],
        description: "Bone grafting restores bone structure in the jaw, often as preparation for dental implants or following trauma or disease.",
    },
    {
        name: "Botox",
        img: "/images/services/botox/botox.webp",
        slug: "botox-and-filler",
        href: serviceHrefMap["botox-and-filler"],
        description: "Botox and dermal fillers help smooth fine lines, reduce wrinkles, and restore youthful volume to facial features.",
    },
    {
        name: "Facial Trauma",
        img: "/images/services/facial-trauma/facial-trauma.webp",
        slug: "facial-trauma",
        href: serviceHrefMap["facial-trauma"],
        description: "We specialize in treating facial injuries, including fractures and lacerations, with precision and compassion.",
    },
    {
        name: "Genioplasty / Chin Surgery",
        img: "/images/services/genioplasty/genioplasty.webp",
        slug: "genioplasty",
        href: serviceHrefMap["genioplasty"],
        description: "Genioplasty enhances the chin's shape and projection to create facial balance and improve appearance or function.",
    },
    {
        name: "Dental Implants",
        img: "/images/services/implant/implants.webp",
        slug: "dental-implants",
        href: serviceHrefMap["dental-implants"],
        description: "Dental implants are a permanent solution for missing teeth, offering natural-looking results and long-term stability.",
    },
    {
        name: "Oral Pathology",
        img: "/images/services/oral-pathology/oral-pathology.webp",
        slug: "oral-pathology",
        href: serviceHrefMap["oral-pathology"],
        description: "We diagnose and treat oral diseases and abnormalities, including cysts, tumors, and lesions of the mouth and jaw.",
    },
    {
        name: "Orthognathic Surgery",
        img: "/images/services/orthognathic/orthognathic.webp",
        slug: "orthognathic-surgery",
        href: serviceHrefMap["orthognathic-surgery"],
        description: "Orthognathic (jaw) surgery corrects misaligned jaws to improve function, facial symmetry, and breathing.",
    },
    {
        name: "Sleep Apnea",
        img: "/images/services/sleep-apnea/sleep-apnea.webp",
        slug: "sleep-apnea",
        href: serviceHrefMap["sleep-apnea"],
        description: "We offer surgical solutions for obstructive sleep apnea to improve airflow, reduce snoring, and enhance sleep quality.",
    },
    {
        name: "TMJ",
        img: "/images/services/tmj/tmj.webp",
        slug: "tmj-disorder",
        href: serviceHrefMap["tmj-disorder"],
        description: "TMJ treatment relieves jaw pain, stiffness, and clicking caused by temporomandibular joint disorders.",
    },
    {
        name: "Tooth Extractions",
        img: "/images/services/tooth-extract/tooth-extract.webp",
        slug: "extractions",
        href: serviceHrefMap["tooth-extractions"],
        description: "We perform gentle, precise tooth extractions when teeth are damaged, decayed, or causing crowding.",
    },
    {
        name: "Wisdom Teeth",
        img: "/images/services/wisdom/wisdom-tooth.webp",
        slug: "wisdom-teeth-removal",
        href: serviceHrefMap["wisdom-teeth-removal"],
        description: "Wisdom tooth removal prevents crowding, pain, and infections by safely extracting third molars.",
    },
];

export default function HorizontalSlider() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [itemWidth, setItemWidth] = useState<number>(400);
    const [itemHeight, setItemHeight] = useState<number>(550);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const checkMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            const width = mobile ? window.innerWidth * 0.9 : 400;
            const height = mobile ? 520 : 550;
            setItemHeight(height);
            setItemWidth(width);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleScroll = (scrollAmount: number) => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += scrollAmount;
        }
    };

    return (
        <div className="flex flex-col items-center w-full px-4 py-12 bg-bg2">
            <div className="flex flex-row items-center justify-between w-full max-w-7xl mb-8">
                <div className="pb-4 sm:pb-12">
                    <HeaderText className="text-header-text mb-2 font-serif font-medium">
                        Services We Offer
                    </HeaderText>
                    <BodyText className="text-body-text-light">
                        Comprehensive care for all your oral and facial needs
                    </BodyText>
                </div>
                <div className="items-center gap-3 hidden sm:flex">
                    <button
                        onClick={() => handleScroll(-itemWidth)}
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary-teal hover:bg-primaryCyan flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                        onClick={() => handleScroll(itemWidth)}
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary-teal hover:bg-primaryCyan flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                </div>
            </div>

            <div
                ref={containerRef}
                className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-6 py-6 scrollbar-hide"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
            >
                {services.map((item, idx) => (
                    <a
                        href={item.href}
                        key={idx}
                        className="group bg-white snap-center shrink-0 rounded-3xl shadow-lg transition-all duration-300 flex flex-col overflow-hidden border border-slate-100 hover:border-primary-teal hover:-translate-y-2 hover:scale-[1.02]"
                        style={{
                            width: `${itemWidth}px`,
                            height: `${itemHeight}px`,
                        }}
                    >
                        {/* Image Section */}
                        <div className="relative h-64 overflow-hidden bg-bg">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Image
                                src={item.img}
                                alt={item.name}
                                width={400}
                                height={300}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                onError={(e) => {
                                    e.currentTarget.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23fbe8d8"/><text x="200" y="150" text-anchor="middle" dy=".3em" font-family="Arial" font-size="16" fill="%23565656">Medical Service</text></svg>`;
                                }}
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ArrowRight className="w-4 h-4 text-primary-teal" />
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 p-6 flex flex-col justify-between">
                            <div>
                                <HeaderText as="h3" variant="small" className="text-header-text mb-3 font-serif font-medium group-hover:text-primary-teal transition-colors duration-300">
                                    {item.name}
                                </HeaderText>
                                <BodyText as="h4" variant="small" className="text-body-text-light leading-relaxed line-clamp-4">
                                    {item.description}
                                </BodyText>
                            </div>

                            <div className="mt-4 pt-4 border-t border-misty-blue">
                                <div className="flex items-center text-primary-teal font-medium text-sm group-hover:text-primaryCyan transition-colors duration-300">
                                    <span>Learn More</span>
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .line-clamp-4 {
                    display: -webkit-box;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
}