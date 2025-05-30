import CTA from '@/components/CTA'
import BodyText from '@/components/ui/BodyText'
import HeaderText from '@/components/ui/HeaderText'
import Image from 'next/image'
import React from 'react'
import {RoughNotation} from 'react-rough-notation'


const people = [
    {
        name: 'Professor Ron E. Samet, MD',
        role: 'President',
        imageUrl: "/images/team/Samet_Ron.jpg",
        bio: `
Dr. Ron E. Samet is a full-time trauma anesthesiologist and the current Division Chief of Trauma Anesthesia at the R Adams Cowley Shock Trauma Center at the University of Maryland School of Medicine in Baltimore, Maryland, USA. He obtained his Medical Doctorate at the Yale University School of Medicine and completed an anesthesia residency at UMDNJ-RWJUH and a trauma anesthesia fellowship at Shock Trauma in Baltimore. Dr. Samet has been actively involved in the Israeli Anesthesia community for over a decade often attending and lecturing at the Israel Society of Anesthesiology Meetings.
        `,
    },
    {
        name: 'Dr. Dan Zeloof, MD',
        role: 'Vice President',
        imageUrl: "/images/team/dan-cropped.png",
        bio: `Dr. Zeloof is a general and cardiothoracic anesthesiologist working at both public and private hospitals in Sydney, Australia. Born and raised in the United Kingdom (UK), he attended medical school at the Imperial College School of Medicine in London and then moved to Australia where he completed an anesthesia residency at the Royal North Shore Hospital and fellowships in pre-hospital medicine and two further cardio-thoracic anaesthesia fellowships including at Royal Papworth Hospital in Cambridge, UK. He holds a Diploma of Clinical Ultrasound with the University of Melbourne and is board certified in Advanced Perioperative Transesophageal Echocardiography. He is a passionate educator and lectures for the University of Sydney School of Medicine. He is also the co-founder of the anaesthesia cognitive aid development group ASCAR.`,
    },



    {
        name: 'Professor Suzanne Karan, MD',
        role: 'Secretary',
        imageUrl: "/images/team/Suzanne-Karan.jpeg",
        bio: `Dr. Karan is a Professor of Anesthesiology at the
University of Rochester Medical Center in Rochester, New York, USA. She obtained her
Medical Doctorate from Downstate Medical School and completed an anesthesiology
residency and transplant anesthesiology fellowship at the University of Rochester. Dr.
Karan also completed a Foundation for Anesthesia Education and Research (FAER)
Fellowship in respiratory physiology and currently serves at the Vice Chair of Education,
Residency Program Director and Chief Clinical Coordinator at the University of
Rochester. Dr. Karan directs the Respiratory Physiology Laboratory and co-founded a
software start-up company, ThalamusGME, to address the graduate medical education
recruitment process. She has collaborated with the Israeli Anesthesia Community for
over a decade, spending a sabbatical at Hadassah Medical Center, and continuing to
volunteer and lecture at Israeli conferences and meetings.`,
    },

    {
        name: 'Dr. Leonardo Gendzel, MD',
        role: 'Treasurer',
        imageUrl: "/images/team/Leonardo-Gendzel.png",
        bio: `Dr. Gendzel is a board-certified Anesthesiologist and
Pediatric Anesthesiologist who currently practices at Levine Children's Hospital in
Charlotte, North Carolina, USA. Born and raised in Rio de Janeiro, Brazil, he attended
Fundação Técnico-Educacional Souza Marques Medical School in Brazil and then
migrated to the United States of America where he completed an anesthesiology
residency training at Yale University School of Medicine in Connecticut and a Pediatric
Anesthesia Fellowship at the Children’s Hospital of Pittsburgh in Pennsylvania. He
holds an Executive MBA from Drexel University, blending clinical excellence with a
strong background in healthcare leadership. He volunteered at Hadassah Ein Keren in
January 2024 and Rambam Medical Center in February 2024.`,
    },
    {
        name: 'Professor Yehuda Ginosar, MBBS',
        role: 'Officer',
        imageUrl: "/images/team/Yehuda Ginosar.jpeg",
        bio: `Dr. Ginosar is a Professor of Anesthesiology at the
Hebrew University and currently serves at the Director of the Mother and Child
Anesthesia Unit and the Director of the Anesthesia Research Unit at Hadassah Ein
Karem Medical Center in Jerusalem, Israel. He obtained his Medical Degree from the
University of London and completed a residency in Anesthesiology at Hadassah-
Hebrew University in Jerusalem and a Research Fellowship in Obstetric Anesthesia at
Stanford University in California. Dr. Ginosar served as Chair of the Israel Society of
Obstetric Anesthesiology for many years and has held other leadership roles within the
Israel Society of Anesthesiology. He currently chairs the Ethics Committee for the
European Society of Anaesthesiology and Intensive Care.`,
    },
    {
        name: 'Professor Joel Symons, MD',
        role: 'Officer',
        imageUrl: "/images/team/Joel Symons.jpeg",
        bio: `Dr. Joel Symons is an Associate Professor at The Alfred
Hospital in Melbourne, Australia, specializing in burn care, faciomaxillary anesthesia,
and Perioperative Medicine. He completed an Anesthesiology Fellowship at the
Australian and New Zealand College of Anaesthetists and a Master of Medicine at
Monash University. He is a board member of the Chapter of Perioperative Medicine and
Chair of the Content and Assessment Committee at the Australian and New Zealand
College of Anaesthetists. Since Oct 7, 2023, he has been an active anaesthesiology
volunteer in Israel and is seeking to develop collaborative partnerships in education and
clinical practice guidelines.`,
    },
    {
        name: 'Professor Ruthi Landau, MD',
        role: 'Officer',
        imageUrl: "/images/team/Ruth Landau.png",
        bio: `Dr. Landau is the Virginia Apgar Professor of
Anesthesiology at Columbia University and the Division Chief of Obstetric Anesthesia at
Columbia University Irving Medical Center in New York, USA. She obtained her Medical
Doctorate and completed her residency in Anesthesiology at the University of Geneva in
Switzerland. She completed a clinical and research fellowship in Obstetric Anesthesia at

Columbia University. Dr. Landau is a prolific clinician-scientist and serves as the Editor-
in-Chief of the International Journal of Obstetric Anesthesia. She is passionate about
international collaborations and regularly attends and presents at the Israel Society of
Anesthesiology meetings. She is a member of the Israeli Obstetric Anesthesia
Association and was awarded the distinction of Honorary Fellow of the Israel Society of
Anesthesiologists in 2024.`,
    },
    {
        name: 'Professor Barak Cohen, MD',
        role: 'Officer',
        imageUrl: "/images/team/Barak Cohen.png",
        bio: `Dr. Barak Cohen is a Professor of Anesthesiology at the Tel
Aviv Medical Center and currently serves as the Vice Chair and Director of Research
and Innovation for the Department of Anesthesia, Intensive Care, and Pain Medicine at
the Tel Aviv Medical Center. He obtained his Medical Doctorate from the Hebrew
University School of Medicine and served as a medical officer in the IDF. He completed
his anesthesia, intensive care and pain medicine residency at the Tel-Aviv Medical
Center and gained additional experience in prehospital care and national preparedness
to mass casualty events. He completed a clinical research fellowship in the Cleveland
Clinic’s Outcomes Research Department, serving as the department’s chief research
fellow. Dr. Cohen is currently the President of the Israeli Society of Anesthesiologists as
well as the chair of Forum 5 (devices and technologies) of the European Society of
Anesthesiology and Intensive Care’s (ESAIC) Scientific Committee, and a member of
the Outcomes Research Consortium.`
    }

   
]

export default function page() {
    return (
        <div className="py-44">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center sm:mt-10">
                    <HeaderText className="text-header-text font-serif font-medium text-center">
                        <RoughNotation multiline type="underline" show={true} color='#FFBA01' animationDuration={1000} iterations={1} padding={1} strokeWidth={8}>
                            Meet Our Team
                        </RoughNotation>
                    </HeaderText>
                    <BodyText className="mt-6 text-body-text text-center">
                        The team that makes Facial Surgery Center exceptional.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi in quasi facilis pariatur veniam accusantium debitis, ut molestiae! Ratione voluptas maiores repellat consequatur. Molestias facilis cumque ut vel qui?
                    </BodyText>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-1 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
                >
                    {people.map((person, idx) => (

                        <li
                            key={idx}
                            className="flex flex-col sm:flex-row sm:flex-wrap gap-6 items-start"
                        >
                            <Image
                                src={person.imageUrl}
                                alt={`Photo of ${person.name}`}
                                width={300}
                                height={400}
                                className="w-60 h-80 object-cover rounded-2xl shadow-md"
                            />


                            {/* Text */}
                            <div className="flex-1">
                                <HeaderText variant='small' className="text-header-text font-serif font-medium">
                                    {person.name}
                                </HeaderText>
                                <p className="text-body-text-light text-base font-medium">{person.role}</p>
                                <p className="mt-4 text-body-text text-base leading-relaxed">
                                    {person.bio}
                                </p>
                            </div>
                        </li>


                    ))}
                </ul>
                <CTA />
            </div>


        </div>
    )
}