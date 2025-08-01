

// app/doctors/page.tsx
import CTA from '@/components/CTA'
import BodyText from '@/components/ui/BodyText'
import HeaderText from '@/components/ui/HeaderText'
import Image from 'next/image'
import {RoughNotation} from 'react-rough-notation'
import ReactMarkdown from 'react-markdown'

// Inline markdown from uploaded files
const joeyMarkdown = `
Dr. Joseph Gulko joined Facial Surgery in July 2025 and is dedicated to delivering exceptional, compassionate care to every patient.

Originally from Philadelphia, PA, Dr. Gulko attended New York University, where he majored in economics and chemistry, graduating summa cum laude. He went on to earn his dental degree from Columbia University College of Dental Medicine, where he was recognized with the AAOMS Dental Implant Award for his outstanding clinical achievements.

### Education & Training
He then went on to complete his medical degree at UT Southwestern, one of the nation's top-ranked medical schools. He remained in Dallas to complete a general surgery internship and receive advanced training in both adult and pediatric anesthesia. His six-year oral and maxillofacial surgery residency at Parkland Hospital provided rigorous training under some of the most respected surgeons in the field.

### Clinical Interests
His clinical interests include:
- Complex dental implantology  
- Wisdom tooth extractions  
- Sedation and general anesthesia  
- Orthognathic (jaw) surgery  
- TMJ disorders  
- Facial trauma and reconstruction  
- Oral pathology  
- Treatment of osteonecrosis

Known for his attention to detail and patient-first approach, Dr. Gulko is dedicated to using the most up-to-date techniques to ensure the highest level of care.

### Personal Life
Outside the office, he enjoys spending time with his wife, Jen, their son, William, and their dog, Freddie. He's an avid hiker, tennis player, and always on the lookout for great restaurants.
`

const salMarkdown = `
Dr. Florio graduated from the State University of New York at Stony Brook in 1986. He then attended the Medical College of Virginia where he received a Doctor of Dental Surgery (DDS) degree in 1990. He continued his education after being accepted to the University of Texas Southwestern Medical Center dual degree program earning his Doctor of Medicine (MD) degree in 1993.

### Training & Education
He spent the next year completing an internship in General Surgery, then concluded his advanced training in Oral and Maxillofacial Surgery in 1996. His education included training in:
- Facial trauma  
- Facial reconstruction  
- Pathology  
- Dentofacial deformities  
- Anesthesia  
- Cosmetic surgery

He is certified in Basic Life Support, Advanced Cardiac Life Support, Pediatric Advanced Life Support, and Advanced Trauma Life Support.

### Professional Role
Dr. Florio is an attending surgeon in the residency training program at Yale New Haven Hospital within the department of Oral and Maxillofacial Surgery. He is the chairman of the Clinical Competency Committee, and a member of the Admissions Committee. He opened his private practice, The Facial Surgery Center located in Trumbull, CT in August of 1996.

### Professional Credentials
- Diplomate, American Board of Oral and Maxillofacial Surgery  
- Fellow, American Association of Oral and Maxillofacial Surgeons  
- Member, Connecticut Society of Oral and Maxillofacial Surgeons  
- Member, American Dental Association  
- Member, Connecticut State Dental Association  
- Member, Bridgeport Dental Association  
- Member, American Medical Association

### Personal Life
Dr. Florio resides in Fairfield County, CT with his wife and 2 children. He enjoys fishing, traveling, motorsports, and spending time outdoors with his friends and family.
`

interface Doctor {
    name: string
    role: string
    imageUrl: string
    bio: string
}

const doctors: Doctor[] = [
    {
        name: 'Dr. Sal Florio',
        role: 'Senior Designer',
        imageUrl: '/images/profiles/dr-sal-profile.webp',
        bio: salMarkdown,
    },
    {
        name: 'Dr. Joseph Gulko',
        role: 'Senior Designer',
        imageUrl: '/images/profiles/joey-profile.webp',
        bio: joeyMarkdown,
    },

]

export default function DoctorsPage() {
    return (
        <div className="min-h-screen pt-40 sm:pt-52 sm:w-5/6 mx-auto">
            <div className="flex flex-col items-center justify-center gap-4 mb-20 px-8 text-center">
                <HeaderText className="text-header-text font-serif font-medium">
                    Meet Our{' '}
                    <RoughNotation
                        multiline
                        type="underline"
                        show={true}
                        color="#FEB7B1"
                        animationDuration={1000}
                        iterations={1}
                        padding={1}
                        strokeWidth={8}
                    >
                        <span>Doctors</span>
                    </RoughNotation>
                </HeaderText>
                <BodyText className="text-center text-body-text max-w-3xl">
                    Our team of experienced doctors is dedicated to providing you with
                    the highest quality of care. With a focus on patient comfort and
                    advanced techniques, we strive to make your dental experience as
                    pleasant as possible.
                </BodyText>
            </div>

            <ul role="list" className="flex flex-col sm:flex-row mx-auto sm:mt-20 lg:gap-8">
                {doctors.map((person) => (
                    <li key={person.name} className="rounded-2xl px-8 py-10">
                        {/* <Image
                            alt="Facial Surgery Center"
                            width={208}
                            height={260}
                            src={person.imageUrl}
                            className="ring-4 ring-white object-cover shadow-lg mx-auto size-30 rounded-full md:size-72"
                        /> */}
                        <div className="w-40 h-40 md:w-72 md:h-72 mx-auto rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                            <Image
                                alt="Facial Surgery Center"
                                src={person.imageUrl}
                                width={208}
                                height={260}
                                className="object-cover w-full h-full"
                            />
                        </div>



                        <div className="text-center">
                            <HeaderText
                                variant="small"
                                className="my-6 sm:my-8 font-medium tracking-tight text-header-text font-serif"
                            >
                                {person.name}
                            </HeaderText>

                            <div className="text-left">
                                <ReactMarkdown
                                    components={{
                                        p: ({children}) => (
                                            <BodyText className="mb-4 text-body-text">
                                                {children}
                                            </BodyText>
                                        ),
                                        strong: ({children}) => (
                                            <strong className="font-medium">{children}</strong>
                                        ),
                                        ul: ({children}) => (
                                            <ul className="list-disc text-body-text list-inside my-4 space-y-1">
                                                <BodyText className="mb-4 text-body-text">
                                                    {children}
                                                </BodyText>
                                                
                                            </ul>
                                        ),
                                        // li: ({children}) => (
                                        //     <li className="text-body-text">{children}</li>
                                        // ),
                                        h3: ({children}) => (
                                            <HeaderText variant='small' as='h3' className="text-lg font-semibold mt-6 mb-2 text-header-text">
                                                {children}
                                            </HeaderText>
                                        ),
                                    }}
                                >
                                    {person.bio}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="flex flex-col items-center justify-center mt-20">
                <CTA />
            </div>
        </div>
    )
}
