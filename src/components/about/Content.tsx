import React from "react";
import Image from "next/image";

import HeaderText from "@/components/ui/HeaderText";
import BodyText from "@/components/ui/BodyText";

export default function Content() {
    return (
        <div className="overflow-hidden pt-16 sm:pt-24">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">

                {/* ---------- Page Title & Intro ---------- */}
                <h1 className="sr-only">About The Facial Surgery Center</h1>
                <HeaderText
                    as="h2"
                    className="my-4 font-medium font-serif tracking-tight text-header-text"
                >
                    On a mission
                </HeaderText>

                <BodyText className="mt-6 text-xl/8 text-body-text">
                    At The Facial Surgery Center we believe every person deserves to look
                    and feel their best. Our mission is to enhance well-being and
                    confidence through tailored surgical plans, cutting-edge technology,
                    and genuine compassion. From first consultation to final follow-up,
                    our board-certified team is dedicated to safe, transparent, patient-
                    first care.
                </BodyText>

                {/* ---------- What We Do & Image Gallery ---------- */}
                <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
                    {/* --- Text Column --- */}
                    <div className="lg:pr-8">
                        <HeaderText
                            as="h3"
                            variant="small"
                            className="font-medium font-serif tracking-tight text-header-text"
                        >
                            What we do
                        </HeaderText>

                        <BodyText className="mt-6 text-base/7 text-body-text">
                            Our surgeons blend artistry with science to restore both form and
                            function. Procedures range from complex orthognathic surgery and
                            trauma reconstruction to minimally invasive cosmetic treatments
                            such as Botox® and dermal fillers. Every plan is built on 3-D
                            imaging, virtual surgical simulation, and evidence-based
                            protocols—delivering predictable, life-changing results.
                        </BodyText>

                        <BodyText className="mt-8 text-base/7 text-body-text">
                            Continuous education keeps us at the forefront of innovation. We
                            actively publish, teach, and adopt proven advances so our
                            patients benefit from shorter recovery times and superior
                            outcomes.
                        </BodyText>
                    </div>

                    {/* --- Masonry Image Grid --- */}
                    <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                        <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">

                            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                                <Image
                                    src="/images/about/grid/consult.webp"
                                    alt="Surgeon consulting with a patient"
                                    width={560}
                                    height={560}
                                    className="size-full object-cover"
                                    priority
                                />
                            </div>

                            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                                <Image
                                    src="/images/about/grid/suite.webp"
                                    alt="State-of-the-art operating suite"
                                    width={560}
                                    height={560}
                                    className="size-full object-cover"
                                />
                            </div>

                            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                                <Image
                                    src="/images/about/grid/team.webp"
                                    alt="Multidisciplinary surgical team"
                                    width={560}
                                    height={560}
                                    className="size-full object-cover"
                                />
                            </div>

                            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                                <Image
                                    src="/images/about/grid/3d.webp"
                                    alt="3-D imaging technology in use"
                                    width={560}
                                    height={560}
                                    className="size-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* --- Values Column --- */}
                    <div className="max-lg:mt-16">
                        <HeaderText
                            as="h3"
                            variant="small"
                            className="font-medium font-serif tracking-tight text-header-text"
                        >
                            Our values
                        </HeaderText>

                        <BodyText className="mt-6">
                            We live three core principles:
                        </BodyText>

                        <ul className="mt-4 list-disc space-y-1 pl-6 text-base/7 text-body-text">
                            <li>
                                <strong className="text-header-text">Integrity&nbsp;—&nbsp;</strong>
                                Honest recommendations and transparent pricing.
                            </li>
                            <li>
                                <strong className="text-header-text">Excellence&nbsp;—&nbsp;</strong>
                                Board-certified expertise and meticulous technique.
                            </li>
                            <li>
                                <strong className="text-header-text">Respect&nbsp;—&nbsp;</strong>
                                Cultural sensitivity and compassionate, patient-centered care.
                            </li>
                        </ul>

                        <BodyText className="mt-8 text-base/7 text-body-text">
                            These values guide every decision, from clinical protocols to
                            community outreach.
                        </BodyText>
                    </div>
                </section>

                {/* ---------- Innovation & Excellence ---------- */}
                <div className="lg:pr-8 py-12">
                    <HeaderText
                        as="h3"
                        variant="small"
                        className="font-medium font-serif tracking-tight text-header-text"
                    >
                        Innovation &amp; excellence
                    </HeaderText>

                    <BodyText className="mt-6 text-base/7 text-body-text">
                        Technology transforms possibilities. Our practice features
                        in-office CBCT scanning, digital impressions, and custom
                        3-D-printed guides that improve accuracy and shorten chair-time.
                        We collaborate with restorative dentists and medical specialists
                        to ensure seamless, holistic care.
                    </BodyText>

                    <BodyText className="mt-8 text-base/7 text-body-text">
                        Above all, we measure success by our patients’ stories—renewed
                        confidence, restored function, and a better quality of life.
                    </BodyText>
                </div>

                {/* ---------- Optional CTA ---------- */}
                {/* <div className="mt-16 text-center">
          <Button text="Meet our surgeons" href="/team" />
        </div> */}

            </div>
        </div>
    );
}
