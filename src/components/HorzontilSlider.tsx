"use client";
import React, {useRef} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import HeaderText from "./ui/HeaderText";
import BodyText from "./ui/BodyText";
import Image from "next/image";

export const SAMPLE_DATA = [
    
    {id: "01", 
        color: "bg-lightPurple",

    },
    {id: "02", color: "bg-lightYellow"},
    {id: "03", color: "bg-lightBlue"},
    // {id: "04", color: "#017186"},
    // {id: "05", color: "#1a7f92"},
    // {id: "06", color: "#348d9e"},
    // {id: "07", color: "#4d9caa"},
    // {id: "08", color: "#67aab6"},
    // {id: "09", color: "#80b8c3"},
];

const ITEM_WIDTH = window.innerWidth * 0.6
//1500;

export default function HorizontalSlider() {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleScroll = (scrollAmount: number) => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += scrollAmount;
        }
    };

    return (
        <div className="flex flex-col items-center w-full px-4">

            <HeaderText className="text-left self-start text-stone-700 mb-6 px-6">
                Services We Offer
            </HeaderText>

            <div
                ref={containerRef}
                className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-6 py-6"
            >
                {SAMPLE_DATA.map((item) => (
                    <div
                        key={item.id}
                        className={`${item.color} snap-center shrink-0 rounded-3xl shadow-md flex flex-col items-center justify-center text-center p-6`}
                        style={{
                            minWidth: `${ITEM_WIDTH}px`,
                            height: window.innerHeight * 0.6,//"400px",
                        }}
                    >
                        <div className="self-start text-left w-1/2">
                            <BodyText variant="large" >
                                Item {item.id}
                            </BodyText>
                            <BodyText variant="small">
                                This card is fixed at 1000px wide but still swipes beautifully on
                                mobile.
                            </BodyText>
                        </div>
                        <div className="self-end">
                            <Image
                            width={200}
                            height={200}
                            alt="App screenshot"
                            src={'/icons/face.svg'}
                            className="w-full h-fullobject-cover"
                            />
                        </div>

                    </div>
                ))}
            </div>

            <div className="flex self-end items-center gap-4 mt-4">
                <button
                    onClick={() => handleScroll(-ITEM_WIDTH)}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-orange-700/75 flex items-center justify-center shadow-sm"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <button
                    onClick={() => handleScroll(ITEM_WIDTH)}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-orange-700/75 flex items-center justify-center shadow-sm"
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </button>
            </div>
        </div>
    );
}
