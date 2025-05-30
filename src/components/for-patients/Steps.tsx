import React from 'react';
import {CheckCircle, FileText, MessageCircle, Calendar} from 'lucide-react';
import HeaderText from '../ui/HeaderText';
import BodyText from '../ui/BodyText';

interface StepCardProps {
    step: number;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    content: React.ReactNode;
    isLast?: boolean;
}

const StepCard = ({step, icon: Icon, title, content, isLast = false}: StepCardProps) => (

    <div className="flex items-start">
        <div className="pb-20">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className='flex flex-row items-center justify-between mb-4'>


                    <div className="flex flex-col items-start gap-4 mb-4">
                        <span className="bg-primary-teal text-white text-sm font-semibold px-3 py-1 rounded-full mr-3">
                            STEP {step}
                        </span>
                        <HeaderText variant='small' className="text-header-text font-serif font-medium ">{title}</HeaderText>
                    </div>

                    {/* <div className="   sm:flex-shrink-0 sm:flex sm:flex-col sm:items-center">
                            <div className="w-16 h-16 bg-primaryYellow rounded-full flex items-center justify-center shadow-lg">
                                <Icon className="w-8 h-8 text-white" />
                            </div>
                        </div> */}

                </div>

                <div className="text-body-text-light space-y-4">
                    {content}
                </div>
            </div>
        </div>
    </div>
);

export default function AppointmentSteps() {
    const steps = [
        {
            step: 1,
            icon: FileText,
            title: "Consultation",
            content: (
                <div className="space-y-4">
                    <p className="leading-relaxed">
                        Whether you have a referral from your doctor or are visiting us directly, we&apos;ll start by getting to know you and your oral health history. You&apos;ll fill out a comprehensive registration form covering:
                    </p>
                    <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-primaryOrange rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Complete medical history and current health conditions</span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-primaryOrange rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>All medications and allergies</span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-primaryOrange rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Insurance coverage details</span>
                        </li>
                    </ul>
                    <p className="leading-relaxed">
                        If needed, we&apos;ll take diagnostic imaging like X-rays or CT scans right here in our office to get a complete picture of your oral health.
                    </p>
                </div>
            )
        },
        {
            step: 2,
            icon: CheckCircle,
            title: "Diagnosis",
            content: (
                <div className="space-y-4">
                    <p className="leading-relaxed">
                        Your oral surgeon will perform a thorough examination of your mouth, including all hard and soft tissues, as well as your jaw structure. This comprehensive assessment allows us to make an accurate diagnosis and understand exactly what you need.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-4">
                        <p className="text-blue-800 font-medium">
                            💡 This is where our expertise really shines - we take the time to understand your unique situation completely.
                        </p>
                    </div>
                </div>
            )
        },
        {
            step: 3,
            icon: MessageCircle,
            title: "Discuss Options",
            content: (
                <div className="space-y-4">
                    <p className="leading-relaxed">
                        Now comes the collaborative part! We&apos;ll present your treatment options and work together to find the best path forward. We&apos;ll cover:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <h4 className="font-semibold text-gray-800">Treatment Planning</h4>
                            <ul className="text-sm space-y-1">
                                <li>• Different treatment approaches</li>
                                <li>• Preparation instructions</li>
                                <li>• Recovery expectations</li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-semibold text-gray-800">Comfort Options</h4>
                            <ul className="text-sm space-y-1">
                                <li>• Sedation preferences</li>
                                <li>• Anesthesia options</li>
                                <li>• Pain management</li>
                            </ul>
                        </div>
                    </div>
                    <p className="leading-relaxed">
                        Once we agree on the best plan, we&apos;ll handle all the paperwork and insurance details, discuss costs, and get everything scheduled.
                    </p>
                </div>
            )
        },
        {
            step: 4,
            icon: Calendar,
            title: "Treatment",
            content: (
                <div className="space-y-4">
                    <p className="leading-relaxed">
                        Depending on your specific needs and medical history, we may be able to perform your procedure the same day, or we might schedule it for a future appointment to ensure optimal preparation and care.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 bg-green-50 rounded-lg p-4">
                            <h4 className="font-semibold text-green-800 mb-2">Same-Day Treatment</h4>
                            <p className="text-green-700 text-sm">For straightforward procedures with uncomplicated medical histories</p>
                        </div>
                        <div className="flex-1 bg-amber-50 rounded-lg p-4">
                            <h4 className="font-semibold text-amber-800 mb-2">Scheduled Treatment</h4>
                            <p className="text-amber-700 text-sm">For complex cases requiring additional preparation time</p>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section className="py-16 pt-52">
            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <HeaderText className="font-medium font-serif text-header-text  mb-6">
                        What to Expect During Your Visit
                    </HeaderText>
                    <BodyText className=" text-body-text leading-relaxed max-w-3xl mx-auto">
                        Our commitment to exceptional care means you&apos;ll work with the most qualified Oral and Maxillofacial Surgeons.
                        Here&apos;s what you can expect during your visit with us.
                    </BodyText>
                </div>

                {/* Steps */}
                <div className=" flex flex-col mx-auto items-center justify-center">
                    {steps.map((stepData, index) => (
                        <StepCard
                            key={stepData.step}
                            step={stepData.step}
                            icon={stepData.icon}
                            title={stepData.title}
                            content={stepData.content}
                            isLast={index === steps.length - 1}
                        />
                    ))}
                </div>


            </div>
        </section>
    );
}