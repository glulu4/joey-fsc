"use client"
import {DotLottieReact} from "@lottiefiles/dotlottie-react"
import HeaderText from "../ui/HeaderText"
import BodyText from "../ui/BodyText"
import { Stethoscope, HandHelping, SmileIcon} from "lucide-react"

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
        description: "We listen carefully to your goals and design a personalized treatment plan that enhances your natural beauty.",
        color: 'text-primaryGreen',
    },
    {
        name: 'Natural-Looking Results',
        Icon: SmileIcon,
        description: "From subtle enhancements to transformative surgeries, our focus is always on balanced, natural-looking outcomes.",
        color: 'text-primaryBlue',
    },
]

export default function WhyUs() {
    return (
        <div className="">
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                    <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
                        <div>
                            <HeaderText variant="default" className="text-stone-700 font-semibold">
                                Why Patients Choose Facial Surgery Center
                            </HeaderText>
                            <BodyText className="mt-8 text-gray-500">
                                At Facial Surgery Center, we’re committed to excellence at every step. From your first consultation to final results, our team is focused on safety, artistry, and compassionate care.
                            </BodyText>
                        </div>
                        <DotLottieReact
                            src="lottie/surgeon"
                            loop
                            autoplay
                        />
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                        {incentives.map((incentive, idx) => (
                            <div key={incentive.name} className="sm:flex lg:block">
                                <div className="sm:shrink-0">
                                    <incentive.Icon className={`size-16 ${incentive.color} `} />
                                </div>
                                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                                    <BodyText variant="default" className=" font-medium text-gray-900">{incentive.name}</BodyText>
                                    <BodyText variant="small" className="mt-2  text-gray-500">{incentive.description}</BodyText>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
