
"use client";

import React from "react";
import clsx from "clsx";
import {InputHTMLAttributes} from "react";
interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    value: string;
    setValue: (val: string) => void;
    type?: "text" | "email" | "tel"; // Supports text, email, and phone
    placeholder?: string;
    icon?: React.ReactNode; // Optional icon (e.g., email or phone icon)
    required?: boolean;
    textarea?: boolean; // Optional textarea
    rows?: number; // Number of rows for textarea
    className?: string; // Optional className for additional styling
    labelClassName?: string; // Optional className for label
}

export default function TextInput({label, value, setValue, type = "text", placeholder, className, labelClassName, icon, ...props}: TextInputProps) {
    return (
        <div className="flex flex-col w-full">
            {/* Label */}
            <label className={clsx(labelClassName, "text-md font-semibold mb-2")}>{label}</label>

            {/* Input Wrapper */}
            <div className="relative flex items-center border border-gray-300 rounded-lg px-4 py-3 bg-whitesmoke focus-within:ring-2 focus-within:ring-primaryGreenLight">
                {/* Optional Icon */}
                {icon && <span className="text-gray-500 mr-2">{icon}</span>}

                {/* Input Field */}
                <input
                    {...props}
                    required
                    type={type}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={placeholder || ""}
                    className={clsx(
                        className,
                        "w-full text-lg font-semibold text-gray-600 bg-transparent focus:outline-none"
                    )}
                    pattern={type === "email" ? "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" : undefined} // Email validation
                />
            </div>
        </div>
    );
}
