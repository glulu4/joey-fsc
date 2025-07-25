// // "use client";

// // import Form from '@/components/contact/Form';
// // import TextInput from '@/components/TextInput';
// // import BodyText from '@/components/ui/BodyText';
// // import HeaderText from '@/components/ui/HeaderText';
// // import {Clock2Icon, MapIcon, PhoneIcon} from 'lucide-react';
// // import React, {useState} from 'react';
// // // import Confetti from 'react-confetti-boom';

// // const icons = [
// //     {
// //         icon: MapIcon,
// //         label: "Address",
// //         value: "1234 Street Name, City, State, Zip"
// //     },
// //     {
// //         icon: PhoneIcon,
// //         label: "Phone",
// //         value: "(123) 456-7890"
// //     },
// //     {
// //         icon: Clock2Icon,
// //         label: "Hours",
// //         value: "Mon-Fri: 9am - 5pm"
// //     }
// // ]

// // const Map: React.FC = () => {

// //     return (
// //         <iframe
// //         className=' rounded-lg shadow-lg'
// //             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.399512160105!2d-73.23389912364132!3d41.29643917131148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e80834ce524f6b%3A0x789b6c094af08b8!2sFacial%20Surgery%20Center!5e1!3m2!1sen!2sus!4v1752710091224!5m2!1sen!2sus"
// //             width="600"
// //             height="450"
// //             allowFullScreen
// //             loading="lazy"
// //             referrerPolicy="no-referrer-when-downgrade">

// //         </iframe>
// //     )
// // }

// // export default function Page() {

// //     return (
// //         <div className="min-h-screen">

// //             <main className="flex-1 flex flex-col sm:flex-row items-center justify-between pt-40 mx-auto w-5/6 gap-10">


// //                 <div className='text-left '>
// //                     <HeaderText className="text-header-text font-medium font-serif  pt-10 md:pt-24">
// //                         Contact Us
// //                     </HeaderText>

// //                     <BodyText className="mt-4  text-body-text max-w-3xl mx-auto py-2 pt-8">
// //                         Someone from our team will get back to you as soon as possible. Please fill out the form below and we will reach out to you shortly.
// //                     </BodyText>
// //                     <BodyText className="mt-4  text-body-text max-w-3xl mx-auto p2-8">
// //                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
// //                         Perferendis maiores quae optio eius a ut eos corrupti
// //                         perspiciatis hic dolores, amet quod accusamus quis odit
// //                         ex accusantium id? Repellendus, provident.
// //                     </BodyText>


// //                     <div className='pt-4'>
// //                         {icons.map((item, idx) => (
// //                             <div key={idx} className="flex items-center space-x-4 mt-4">
// //                                 <item.icon className="text-primary-teal w-8 h-8" />
// //                                 <div>
// //                                     <BodyText className="text-md font-semibold text-primaryGreenDark">{item.label}</BodyText>
// //                                     <BodyText variant='small' className="text-gray-600">{item.value}</BodyText>
// //                                 </div>
// //                             </div>
// //                         ))}


// //                     </div>
// //                 </div>

// //                 <div className=' px-8'>
// //                     <Map />
// //                 </div>
// //             </main>
// //         </div>
// //     );
// // }


// "use client";
// import Form from '@/components/contact/Form';
// import CTA from '@/components/CTA';
// import TextInput from '@/components/TextInput';
// import BodyText from '@/components/ui/BodyText';
// import HeaderText from '@/components/ui/HeaderText';
// import clsx from 'clsx';
// import {Clock2Icon, MapIcon, PhoneIcon} from 'lucide-react';
// import React, {useState} from 'react';

// const icons = [
//     {
//         icon: MapIcon,
//         label: "Address",
//         value: "115 Technology Dr b101, Trumbull, CT 06611",
//         color: "text-primaryCyan"
//     },
//     {
//         icon: PhoneIcon,
//         label: "Phone",
//         value: "(123) 456-7890",
//         color: "text-primaryOrange"
//     },
//     {
//         icon: Clock2Icon,
//         label: "Hours",
//         value: "Mon-Fri: 9am - 5pm",
//         color: "text-primaryPink"
//     }
// ];

// const Map: React.FC = () => {
//     return (
//         <div className="w-full h-0 pb-[75%] relative rounded-lg overflow-hidden shadow-lg">
//             <iframe
//                 className="absolute top-0 left-0 w-full h-full"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.399512160105!2d-73.23389912364132!3d41.29643917131148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e80834ce524f6b%3A0x789b6c094af08b8!2sFacial%20Surgery%20Center!5e1!3m2!1sen!2sus!4v1752710091224!5m2!1sen!2sus"
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//             />
//         </div>
//     );
// };

// export default function Page() {
//     return (
//         <div className="min-h-screen pt-24">
//             <main className="w-5/6 mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 lg:pt-40">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//                     {/* Content Section */}
//                     <div className="space-y-6">
//                         <HeaderText className="text-header-text mb-6 font-medium font-serif ">
//                             Contact Us
//                         </HeaderText>

//                         <div className="space-y-4 max-w-xl">
//                             <BodyText className="text-body-text leading-relaxed">
//                                 Someone from our team will get back to you as soon as possible. Please fill out the form below and we will reach out to you shortly.
//                             </BodyText>

//                             <BodyText className="text-body-text leading-relaxed">
//                                 At The Facial Surgery Center, we value your feedback and inquiries. Whether you have questions about our services or need assistance, we're here to help.
//                             </BodyText>
//                         </div>

//                         {/* Contact Info */}
//                         <div className="space-y-4 pt-6">
//                             {icons.map((item, idx) => (
//                                 <div key={idx} className="flex items-start space-x-4 p-4 rounded-lg">
//                                     <item.icon className={clsx( item.color, "w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 mt-1")} />
//                                     <div className="min-w-0 flex-1">
//                                         <BodyText className=" font-semibold mb-1">
//                                             {item.label}
//                                         </BodyText>
//                                         <BodyText variant="small" className="text-gray-600  break-words">
//                                             {item.value}
//                                         </BodyText>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Form Section */}
//                     <div className="  p-8 rounded-2xl ">
//                         <Form />
//                     </div>
//                     {/* Map Section */}
//                     {/* <div className="w-full order-first lg:order-last">
//                         <div className="sticky top-8">
//                             <Form/>
//                         </div>
//                     </div> */}
//                 </div>
//             </main>

//             <main className="w-5/6 mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 lg:pt-40">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//                     {/* Content Section */}
//                     {/* Map Section */}
//                     <div className="w-full order-last lg:order-first">
//                         <div className="sticky top-8">
//                             <Map />
//                         </div>
//                     </div>
//                     <div className="space-y-6 text-right">
//                         <HeaderText className="text-header-text mb-6 font-medium font-serif ">
//                             Directions
//                         </HeaderText>

//                         <div className="space-y-4 ">
//                             <BodyText className="text-body-text leading-relaxed">
//                                 Our office is conveniently located in Trumbull, CT. You can find us at 115 Technology Dr b101, Trumbull, CT 06611. We are easily accessible by car and public transportation.
//                             </BodyText>

//                             <BodyText className="text-body-text leading-relaxed">
//                                 If you have any trouble finding us, please don't hesitate to reach out via phone or email. We look forward to welcoming you to our office.
//                             </BodyText>
//                         </div>


//                     </div>



//                 </div>
//             </main>


//             <CTA/>
//         </div>
//     );
// }


import Form from '@/components/contact/Form';
import CTA from '@/components/CTA';
import BodyText from '@/components/ui/BodyText';
import HeaderText from '@/components/ui/HeaderText';
import clsx from 'clsx';
import {Clock2Icon, MapIcon, PhoneIcon} from 'lucide-react';
import React from 'react';

const contactInfo = [
    {
        icon: MapIcon,
        label: "Address",
        value: "115 Technology Dr b101, Trumbull, CT 06611",
        color: "text-primaryCyan"
    },
    {
        icon: PhoneIcon,
        label: "Phone",
        value: "(123) 456-7890",
        color: "text-primaryOrange"
    },
    {
        icon: Clock2Icon,
        label: "Hours",
        value: "Mon-Fri: 9am - 5pm",
        color: "text-primaryPink"
    }
];

export const metadata = {
    title: 'Contact Us - The Facial Surgery Center',
}

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            {/* Top section with content and map */}
            <div className="mx-auto max-w-7xl pt-16 sm:pt-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left side content */}
                    <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-20">
                        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">


                        <HeaderText className="text-header-text mb-6 font-medium font-serif ">
                            Contact Us
                        </HeaderText>


                            <div className="mt-6 space-y-4">
                                <BodyText className="text-xl text-gray-600">
                                    At The Facial Surgery Center, we value your feedback and inquiries.
                                    Whether you have questions about our services or need assistance, we&apos;re here to help.
                                </BodyText>

                                <BodyText className="text-xl text-gray-600">
                                    Someone from our team will get back to you as soon as possible.
                                    Please fill out the form and we will reach out to you shortly.
                                </BodyText>
                            </div>

                            {/* Contact information */}
                            <dl className="mt-10 space-y-4 text-lg text-gray-600">
                                {contactInfo.map((item, idx) => (
                                    <div key={idx} className="flex gap-x-4">
                                        <dt className="flex-none">
                                            <span className="sr-only">{item.label}</span>
                                            <item.icon aria-hidden="true" className={clsx("h-7 w-6", item.color)} />
                                        </dt>
                                        <dd>
                                            <div className="font-semibold text-gray-900">{item.label}</div>
                                            <div className="text-gray-600">{item.value}</div>
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>

                    {/* Right side map */}
                    <div className="relative px-6 pb-20 sm:pt-32 lg:px-8 lg:py-20">
                        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                            <div className="w-full h-0 pb-[75%] relative rounded-lg overflow-hidden">
                                <iframe
                                    className="rounded-lg shadow-lg border-0 absolute top-0 left-0 w-full h-full"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.399512160105!2d-73.23389912364132!3d41.29643917131148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e80834ce524f6b%3A0x789b6c094af08b8!2sFacial%20Surgery%20Center!5e1!3m2!1sen!2sus!4v1752710091224!5m2!1sen!2sus"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Full width form section */}
                <div className="w-full px-8 sm:px-0 mb-20 py-12">
                    <Form />
                </div>
            </div>

            {/* CTA Section
            <div className="mt-20">
                <CTA />
            </div> */}
        </div>
    );
}