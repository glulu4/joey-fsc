import React from 'react'

// className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8"



interface BodyTextProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'small' | 'default' | 'large';
    as?: keyof JSX.IntrinsicElements; // 'h1' | 'h2' | 'h3' | 'p' | etc.
}

export default function BodyText({
    children,
    className = "",
    variant = 'default',
    as: Tag = 'h2' // default to <h2>
}: BodyTextProps) {
    const variants = {
        small: "text-sm sm:text-base",
        default: "text-lg sm:text-xl/8",//"text-4xl font-extrabold tracking-tight sm:text-5xl",
        large: "text-2xl sm:text-3xl"
    }

    return (
        <Tag className={`${variants[variant]} ${className} text-prettymtracking-tight`}>
            {children}
        </Tag>
    );
}
