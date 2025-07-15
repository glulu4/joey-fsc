import React from "react"
import HeaderText from "@/components/ui/HeaderText"
import BodyText from "@/components/ui/BodyText"
import Button from "@/components/Button"
import {config} from "@/config"
import CTA from "@/components/CTA"
import {RoughNotation} from "react-rough-notation"
import {title} from "process"

const postGeneralInstructions = [
    {
        title: "Control Bleeding",
        content:
            "Keep firm pressure on the surgical site by gently biting on the provided gauze pack for 30–45 minutes. Replace the gauze as needed until bleeding subsides. Slight oozing is normal for the first 24 hours.",
    },
    {
        title: "Manage Swelling",
        content:
            "Apply an ice pack to the outside of your face over the surgical area for 20 minutes on, 20 minutes off, during the first 24 hours. After 24 hours, switch to warm, moist compresses if needed to help reduce swelling.",
    },
    {
        title: "Rest & Activity",
        content:
            "Rest quietly for the remainder of the day. Avoid bending over, heavy lifting, and vigorous exercise for at least 48 hours to prevent increased bleeding and swelling.",
    },

    {
        title: "No Straws",
        content:
            "Do not drink through a straw for at least one week. The suction can dislodge the blood clot and delay healing (dry socket).",
    },
    {
        title:"Smoking & Vaping",
        content:`
        The chemicals in tobacco/marijuana smoke and all vaping products are caustic and will significantly delay healing and increase post-operative pain, swelling, risk of infection, and risk of dry socket. Do not smoke or vape for at least two weeks after surgery.

        `
    }
]

const anesthesiaRecoveryInstructions = [
    {
        title: "Local Anesthesia",
        content:
            "Your lip and cheek may stay numb for up to 4 hours. Be careful not to bite or burn the tissues while sensation returns. You may resume normal activities once comfortable.",
    },
    {
        title: "Oral Sedation",
        content:
            "You will need someone to drive you home and stay with you for at least 6 hours after your procedure. Do not operate heavy machinery or make important decisions on the day of surgery.",
    },
    {
        title: "Nitrous Oxide",
        content:
            "Once the gas is turned off, you will breathe oxygen for a few minutes and can typically drive yourself home shortly after. Avoid alcohol and sedative medications for the rest of the day.",
    },
    {
        title: "IV Sedation",
        content:
            "You must have a responsible adult drive you home and stay with you for the rest of the day. Do not eat, drink, or smoke for 24 hours post-procedure. Rest and allow the sedation to fully wear off before resuming normal activities.",
    },
]

export default function PostOpPage() {
    return (
        <div className="px-6 py-16 max-w-5xl mx-auto space-y-16 pt-40">
            {/* Hero Section */}
            <section className="text-center space-y-4 py-20">
                <HeaderText className="font-medium font-serif text-header-text pb-6">
                    <RoughNotation
                        type="underline"
                        show={true}
                        color="#005D64"
                        animationDuration={1000}
                        iterations={1}
                        padding={2}
                        strokeWidth={8}
                    >
                        Post-Op Surgical Instructions
                    </RoughNotation>
                </HeaderText>
                <BodyText className="text-body-text max-w-3xl mx-auto">
                    At {config.name.name}, your comfort and recovery are our top priorities. Please
                    follow these guidelines carefully to promote healing and avoid complications.
                    If you have any questions or concerns, don’t hesitate to contact our office.
                </BodyText>

            </section>

            {/* General Post-Operative Instructions */}
            <section className="space-y-6">
                <HeaderText className="font-medium font-serif text-header-text py-4">
                    General Post-Operative Instructions
                </HeaderText>
                {postGeneralInstructions.map((item, index) => (
                    <BodyText className="text-body-text" key={index}>
                        <strong className="text-amber-700">{item.title} — </strong>
                        {item.content}
                    </BodyText>
                ))}
            </section>

            {/* Anesthesia & Sedation Recovery */}
            <section className="space-y-6">
                <HeaderText className="font-medium font-serif text-header-text pb-5">
                    Post-Op Anesthesia & Sedation Recovery
                </HeaderText>
                {anesthesiaRecoveryInstructions.map((item, index) => (
                    <article className="space-y-4" key={index}>
                        <HeaderText variant="small" className="font-medium font-serif text-header-text">
                            {item.title}
                        </HeaderText>
                        <BodyText className="text-body-text">{item.content}</BodyText>
                    </article>
                ))}
            </section>

            {/* Diet & Oral Hygiene */}
            <section className="space-y-6">
                <HeaderText className="font-medium font-serif text-header-text pb-5">
                    Diet & Oral Hygiene
                </HeaderText>
                <BodyText className="text-body-text">
                    <strong className="text-amber-700">Diet:</strong> Stick to soft, cool foods for the first 48–72 hours (e.g., yogurt,
                    applesauce, smoothies, mashed potatoes). Avoid hot, spicy, crunchy, or hard foods
                    that can irritate the surgical site.
                </BodyText>
                <BodyText className="text-body-text">
                    <strong className="text-amber-700">Oral Hygiene:</strong> Do not rinse or spit forcefully for the first 24 hours.
                    After that, gently rinse with warm salt water (½ tsp salt in 8 oz water) 3–4 times daily,
                    especially after meals. Brush your teeth gently, avoiding the surgical area.
                </BodyText>
            </section>

            {/* Medications */}
            <section className="space-y-6">
                <HeaderText className="font-medium font-serif text-header-text pb-5">
                    Medications
                </HeaderText>
                <BodyText className="text-body-text">
                    Take all prescribed medications as directed. Over-the-counter pain relievers like
                    ibuprofen may be used in between prescription doses to help control discomfort.
                    Do not exceed the recommended dosages. If antibiotics are prescribed, finish the
                    entire course to prevent infection.
                </BodyText>

                <BodyText className="text-body-text">
                    <strong className="text-amber-700">Probiotics:</strong> may prevent and relieve some of the common 
                    side effects of antibiotics such as nausea, upset stomach, and diarrhea. 
                    Probiotics are considered safe and are naturally contained in products 
                    such as yogurt. We recommend taking probiotics while you are taking 
                    the oral antibiotic pills we prescribe for you. Probiotics are 
                    available over-the-counter, come in several forms, and can be purchased
                    at your local pharmacy or supermarket. They should be taken at least 2 
                    hours before taking antibiotic medications. It is important that you 
                    notify your doctor if you experience side effects of antibiotics as 
                    this may be a sign of serious conditions that may require medical attention.
                </BodyText>
            </section>

            <CTA />
        </div>
    )
}
