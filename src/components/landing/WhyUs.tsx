"use client"
import {DotLottieReact} from "@lottiefiles/dotlottie-react"
import HeaderText from "../ui/HeaderText"
import BodyText from "../ui/BodyText"
import { HandHelping, SmileIcon} from "lucide-react"
import {UserRectangle, Stethoscope} from "@phosphor-icons/react";

const incentives = [
    {
        name: 'Board-Certified Surgeons',
        Icon: Stethoscope,
        description: "Our procedures are performed by experienced, board-certified surgeons dedicated to safety and precision.",
        color: 'text-primaryYellow',
    },
    {
        name: 'Personalized Consultations',
        Icon: HandHelping,
        description: "We listen carefully to your goals and design a personalized treatment plan for you.",
        color: 'text-primary-teal',
    },
    {
        name: 'Superior Results',
        Icon: UserRectangle,
        description: `
        From wisdom tooth extraction to jaw surgery we use  advanced tools and equipment in state- of - the - art clinical settings to address our patients’ problems and maintain their oral health
        `,
        color: 'text-primaryOrange',
    },
]

export default function WhyUs() {
    return (
        <div className="py-16 bg-bg2"> 
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                    {/* <div className="grid grid-cols-1 items-center justify-center gap-x-16 gap-y-10 lg:grid-cols-2"> */}
                    <div className="text-center w-3/4 mx-auto">
                        <div className="self-center">
          <HeaderText variant="default" className="text-header-text font-serif font-normal">
                                Why patients choose The Facial Surgery Center
                            </HeaderText>
                            <BodyText className="mt-8 text-body-text">
                                At The Facial Surgery Center, we’re committed to excellence at every step. From your first consultation to final results, our team is focused on safety, artistry, and compassionate care.
                            </BodyText>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                        {incentives.map((incentive, idx) => (
                            <div
                                key={incentive.name}
                                className="flex flex-col items-center text-center"
                            >
                                <div>
                                    <incentive.Icon className={`size-16 ${incentive.color}`} />
                                </div>
                                <div className="mt-4">
                                    <BodyText as="h3" variant="default" className=" font-serif text-gray-900">
                                        {incentive.name}
                                    </BodyText>
                                    <BodyText as="h4" variant="small" className="mt-2 text-body-text">
                                        {incentive.description}
                                    </BodyText>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}
