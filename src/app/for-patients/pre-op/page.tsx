import React from "react"
import HeaderText from "@/components/ui/HeaderText"
import BodyText from "@/components/ui/BodyText"
import Button from "@/components/Button"
import {config} from "@/config"
import CTA from "@/components/CTA"
import {RoughNotation} from "react-rough-notation"

const generalInstructions = [
    {
        title: "Be Prepared",
        content:
            "Your operation will require some downtime whether it be a few hours or a few days. It is important that you have prepared to rest during this downtime, meaning that you have scheduled time off from work or school. Our doctor will review the post-operative procedures with you at the completion of your appointment. At this time, you should ask any questions you still have about your recuperation period.",
    },
    {
        title: "Be Organized",
        content:
            "If you are under the age of 18, you will need to have a parent or legal guardian with you during your surgery. If you are receiving oral sedation or IV sedation, you will need someone to drive you to and from your appointment. It is necessary that these accommodations are organized before you arrive at your appointment.",
    },
    {
        title: "Be Equipped",
        content:
            "During the procedure, we ask that your phone be turned off. If you prefer to listen to your own music during the operation, you can bring a music device with small headphones for you to use during your appointment. You should also arrive wearing loose-fitting clothing and comfortable footwear so that you remain relaxed during your procedure.",
    },
]

const anesthesiaInstructions = [
    {
        title: "Local Anesthesia",
        content:
            "If you are receiving only local anesthesia, you will need to eat a light meal several hours prior to your appointment. You will be able to drive yourself to and from your appointment if you wish, but bringing someone for more extensive procedures may be the best choice.",
    },
    {
        title: "Oral Sedation",
        content:
            "When you are given an oral sedative, you should not eat or drink anything for six hours before your appointment. You will also need someone to drive you to and from your appointment when given an oral sedative. This person will need to be present at the office during your surgery as well.",
    },
    {
        title: "Nitrous Oxide",
        content:
            "Nitrous oxide, or laughing gas, is used in conjunction with a local anesthetic. This means that you will only be able to eat a light meal several hours before your appointment. ",
    },
    {
        title: "IV Anesthesia",
        content:
            "When using IV sedatives, you will have to arrive at your appointment on an empty stomach. If your appointment is at or before 1:30 PM, you cannot eat or drink anything, including water, after midnight the night before your appointment. If your appointment is after 1:30 PM, you may eat a light breakfast no later than six hours before your surgery. You may only have six ounces of fluids with this breakfast, and they are limited to water, apple juice, and plain black coffee. You may not eat or drink anything else after this light breakfast. You will not be able to drive or operate any machinery for at least 24 hours after your surgery, so someone will need to drive you, stay with you during the procedure, and drive you home from your appointment. Do not drink alcohol the day before your appointment. You should wear comfortable and warm two-piece clothing with sleeves that can be easily pulled above the elbow. Your shoes should be closed-toe and comfortable. Jewelry and contacts should be removed prior to your procedure.",
    },
]

export default function PreOpPage() {
    return (
        <div className="px-6 py-16 max-w-5xl mx-auto space-y-16 pt-40">
            {/* Hero Section */}
            <section className="text-center space-y-4 py-20">
                <HeaderText className="font-medium font-serif text-header-text pb-6">
                    <RoughNotation
                        type="underline"
                        show={true}
                        color="#F4A261"
                        animationDuration={1000}
                        iterations={1}
                        padding={2}
                        strokeWidth={8}
                    >
                        Pre-Op Surgical Instructions
                    </RoughNotation>
                </HeaderText>
                <BodyText className="text-body-text max-w-3xl mx-auto">
                    At {config.name.name}, we take a “no-surprises” approach to your care. Before you begin treatment, you’ll receive a written, itemized statement of fees for the treatments the doctor recommends.
                    When it comes to having oral surgery, it is important that you are prepared adequately and that you know what to expect...

                </BodyText>
            </section>
            {/* General Pre-Operative Instructions */}
            <section className="space-y-6">
                <HeaderText className="font-medium font-serif text-header-text">General Pre-Operative Instructions</HeaderText>
                <BodyText className="text-body-text">
                    Whether you are having your wisdom teeth removed or you are having a general tooth extraction...
                </BodyText>
                {generalInstructions.map((item, index) => (
                    <BodyText className="text-body-text" key={index}>
                        <strong className="text-amber-600">{item.title} — </strong>
                        {item.content}
                    </BodyText>
                ))}
            </section>

            {/* Anesthesia & Sedation */}
            <section className="space-y-6">
                <HeaderText className="font-medium font-serif text-header-text pb-5">
                    Oral Surgery Instructions: Anesthesia and IV Sedation
                </HeaderText>
                {anesthesiaInstructions.map((item, index) => (
                    <article className="space-y-4" key={index}>
                        <HeaderText variant="small" className="font-medium font-serif text-header-text">{item.title}</HeaderText>
                        <BodyText className="text-body-text">{item.content}</BodyText>
                    </article>
                ))}
            </section>

            {/* Medication */}
            <section className="space-y-6">
                <HeaderText className="font-medium font-serif text-header-text pb-5">
                    Dental Surgery Pre-Op Instructions: Medications
                </HeaderText>
                <BodyText className="text-body-text">
                    If you are taking any medications, please inform our office before your surgery. Some medications may need to be adjusted or temporarily stopped before your procedure. This includes blood thinners, anticoagulants, and certain supplements.
                </BodyText>
            </section>


            <CTA />
        </div>
    )
}
