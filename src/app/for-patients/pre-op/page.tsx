import React from "react"
import HeaderText from "@/components/ui/HeaderText"
import BodyText from "@/components/ui/BodyText"
import Button from "@/components/Button"
import {config} from "@/config"

export default function PreOpPage() {
    return (
        <div className="px-6 py-16 max-w-4xl mx-auto space-y-16 pt-40">
            {/* Hero Section */}
            <section className="text-center space-y-4">
                <HeaderText className="font-semibold">
                    Pre-Op Surgical Instructions
                </HeaderText>
                <BodyText>
                    At {config.name.name}, we take a “no-surprises” approach to your care. Before you begin treatment, you’ll receive a written, itemized statement of fees for the treatments the doctor recommends. We’ll also provide information about your estimated insurance coverage, as well as your options to pay for amounts not covered by your medical or dental insurance plan. AOS offers advanced-level treatment to remedy your situation and improve the quality of your life. Insurance often covers a basic level of service. As a result, some of the treatments recommended by your doctor may not be covered by your insurance plan. We’ll let you know your estimated portion of costs prior to the commencement of treatment.
                </BodyText>
            </section>

            {/* Preparing Section */}
            <section className="space-y-6">
                <HeaderText className="text-2xl font-semibold">Preparing for Surgery at {config.name.name}</HeaderText>
                <BodyText>
                    When it comes to having oral surgery, it is important that you are prepared adequately and that you know what to expect. {config.name.name} provides pre-op surgical instructions in Austin, TX so that you know how to prepare for your next oral procedure. Our knowledgeable staff has put together informative instructions to help you get ready and feel confident in your treatment plan. We have put together this information so that your experience and the outcome of your treatment are the best they can be. We will walk you through the steps to prepare for your surgery so that you do not show up without knowing what to expect. When you follow our guidelines, you are guaranteed to have a successful treatment.
                </BodyText>
            </section>

            {/* General Pre-Operative Instructions */}
            <section className="space-y-6">
                <HeaderText className="text-2xl font-semibold">General Pre-Operative Instructions</HeaderText>
                <BodyText>
                    Whether you are having your wisdom teeth removed or you are having a general tooth extraction performed, it is necessary that you come into the office all ready to go. Our general pre-operative instructions will help you get ready for your appointment at {config.name.name}.
                </BodyText>
                <BodyText>
                    Be Prepared — Your operation will require some downtime whether it be a few hours or a few days. It is important that you have prepared to rest during this downtime, meaning that you have scheduled time off from work or school. Our doctor will review the post-operative procedures with you at the completion of your appointment. At this time, you should ask any questions you still have about your recuperation period.
                </BodyText>
                <BodyText>
                    Be Organized — If you are under the age of 18, you will need to have a parent or legal guardian with you during your surgery. If you are receiving oral sedation or IV sedation, you will need someone to drive you to and from your appointment. It is necessary that these accommodations are organized before you arrive at your appointment.
                </BodyText>
                <BodyText>
                    Be Equipped — During the procedure, we ask that your phone be turned off. If you prefer to listen to your own music during the operation, you can bring a music device with small headphones for you to use during your appointment. You should also arrive wearing loose-fitting clothing and comfortable footwear so that you remain relaxed during your procedure.
                </BodyText>
            </section>

            {/* Anesthesia & Sedation */}
            <section className="space-y-6">
                <HeaderText className="text-2xl font-semibold">Oral Surgery Instructions: Anesthesia and IV Sedation</HeaderText>

                <article className="space-y-4">
                    <HeaderText className="text-xl font-medium">Local Anesthesia</HeaderText>
                    <BodyText>
                        If you are receiving only local anesthesia, you will need to eat a light meal several hours prior to your appointment. You will be able to drive yourself to and from your appointment if you wish, but bringing someone for more extensive procedures may be the best choice.
                    </BodyText>
                </article>

                <article className="space-y-4">
                    <HeaderText className="text-xl font-medium">Oral Sedation</HeaderText>
                    <BodyText>
                        When you are given an oral sedative, you should not eat or drink anything for six hours before your appointment. You will also need someone to drive you to and from your appointment when given an oral sedative. This person will need to be present at the office during your surgery as well.
                    </BodyText>
                </article>

                <article className="space-y-4">
                    <HeaderText className="text-xl font-medium">Nitrous Oxide</HeaderText>
                    <BodyText>
                        Nitrous oxide, or laughing gas, is used in conjunction with a local anesthetic. This means that you will only be able to eat a light meal several hours before your appointment. It is not required to have someone drive you to and from your appointment, but you may wish to have someone drive you if undergoing a more extensive procedure.
                    </BodyText>
                </article>

                <article className="space-y-4">
                    <HeaderText className="text-xl font-medium">IV Anesthesia</HeaderText>
                    <BodyText>
                        When using IV sedatives, you will have to arrive at your appointment on an empty stomach. If your appointment is at or before 1:30 PM, you cannot eat or drink anything, including water, after midnight the night before your appointment. If your appointment is after 1:30 PM, you may eat a light breakfast no later than six hours before your surgery. You may only have six ounces of fluids with this breakfast, and they are limited to water, apple juice, and plain black coffee. You may not eat or drink anything else after this light breakfast. You will not be able to drive or operate any machinery for at least 24 hours after your surgery, so someone will need to drive you, stay with you during the procedure, and drive you home from your appointment. Do not drink alcohol the day before your appointment. You should wear comfortable and warm two-piece clothing with sleeves that can be easily pulled above the elbow. Your shoes should be closed-toe and comfortable. Jewelry and contacts should be removed prior to your procedure.
                    </BodyText>
                </article>
            </section>

            {/* Medication */}
            <section className="space-y-6">
                <HeaderText className="text-2xl font-semibold">Dental Surgery Pre-Op Instructions: Medications</HeaderText>
                <BodyText>
                    If our doctors prescribe you medications for your surgery, it is important that you have them filled prior to your surgical appointment. The medications should be taken as prescribed by our doctor. If you have been prescribed antibiotics, ibuprofen, or Peridex, you should start taking them the night before your surgery. The instructions will be listed on the prescription bottle. You should continue taking any and all medications that have been prescribed by other doctors. If you have to take medication on the day of your surgery, it is crucial that you use as little water as possible to swallow them. Following these instructions is necessary for a successful surgical operation.
                </BodyText>
            </section>

            {/* Downloads & CTA */}
            <section className="text-center space-y-4">
                <HeaderText className="text-2xl font-semibold">Pre-Operative Instructions</HeaderText>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button text="Download PDF" href="/downloads/pre-op-instructions.pdf" />
                    <Button text="Instrucciones (Español)" href="/downloads/instrucciones-preoperatorias.pdf" />
                </div>

                <BodyText>
                    Prepare for Your Procedure With {config.name.name} Today. {config.name.name} cares about its patients. With our Austin, TX pre-op surgical instructions, you can be confident that your next operation will go smoothly, no matter which of our twelve locations you are visiting. It is crucial that you are adequately prepared for your oral surgery. Our team has worked hard over the years to ensure our patients’ comfort and safety is our number one priority. After reviewing all of our dental surgery pre-op instructions, you can call our office with any questions you may have. Our doctors will make sure to go over these steps to ensure that everyone is on the same page.
                </BodyText>

                <Button text="Contact {config.name.name}" href="/contact" />
            </section>
        </div>
    )
}
