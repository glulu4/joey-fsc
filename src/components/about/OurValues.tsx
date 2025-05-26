import {Bolt, CircleArrowDownIcon, Search} from 'lucide-react';
import React from 'react';
import HeaderText from '../ui/HeaderText';
import BodyText from '../ui/BodyText';

export default function OurValues() {
    const features = [
        {
            name: 'Expertise',
            description: 'Our board-certified surgeons combine years of specialized training with cutting-edge techniques to restore facial function and aesthetics.',
            icon: Bolt,
        },
        {
            name: 'Compassion',
            description: 'We prioritize your comfort and well-being at every step, offering personalized support and clear communication throughout your treatment journey.',
            icon: CircleArrowDownIcon,
        },
        {
            name: 'Precision',
            description: 'Using advanced imaging and minimally invasive methods, we ensure accurate outcomes and faster recovery for facial reconstruction.',
            icon: Search,
        },
    ];

    return (
        <div className="flex items-center justify-center">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <HeaderText className="font-medium font-serif tracking-tight">
                        Restoring Confidence, One Face at a Time
                    </HeaderText>
                    <BodyText className="mt-6 text-gray-600">
                        At the Facial Reconstruction Center, our mission is to provide state-of-the-art surgical care with compassion and precision. From initial consultation to post-operative support, we’re dedicated to helping you regain function and confidence.
                    </BodyText>
                </div>

                {/* Features */}
                <div className="mt-20 grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {features.map(({name, description, icon: Icon}) => (
                        <div key={name} className="flex flex-col items-start text-left">
                            <div className="bg-primary-teal flex flex-col items-center mb-4 justify-center mx-auto text-white px-8 py-2 rounded-full shadow-lg">
                                <Icon className="text-3xl text-center mr-4" />
                                <HeaderText variant='small'>{name}</HeaderText>
                            </div>
                            <BodyText className="text-gray-600 text-center leading-7">{description}</BodyText>
                        </div>
                    ))}
                </div>

                {/* Quote */}
                <div className="mt-24 border-t border-gray-200 pt-16 text-center max-w-3xl mx-auto">
                    <blockquote className="text-2xl font-semibold text-primaryGreenDark">
                        “Our commitment is to blend surgical excellence with compassionate care, ensuring every patient’s journey is as seamless and supportive as possible.”
                    </blockquote>
                </div>
            </div>
        </div>
    );
}
