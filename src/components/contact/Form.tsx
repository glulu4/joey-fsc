'use client';

import {useState, ChangeEvent, FormEvent} from 'react';
import HeaderText from '../ui/HeaderText';

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
    number: string; // Optional field for phone number
}

export default function Form() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: '',
        number: '' // Initialize phone number field
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        // Validate required fields
        if (!formData.name) {
            alert("Please enter your name.");
            setIsLoading(false);
            return;
        }
        if (!formData.email) {
            alert("Please enter your email.");
            setIsLoading(false);
            return;
        }
        if (!formData.number) {
            alert("Please enter your phone number.");
            setIsLoading(false);
            return;
        }
        if (!formData.message) {
            alert("Please enter your message.");
            setIsLoading(false);
            return;
        }


        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({formData: formData}),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Something went wrong');
            }

            alert("Your message has been sent successfully!");

            // Reset form
            setFormData({
                name: '',
                email: '',
                message: '',
                number: '' // Reset phone number field
            });

            const data = await response.json();
            console.log("Form submitted:", data);

        } catch (error) {
            console.error("Error submitting the form:", error);
            alert('Failed to send message. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="px-6 py-20 bg-primary-teal rounded-2xl">
            <div className="mx-auto max-w-4xl">
                {/* Form Header */}
                <div className="mb-12 text-center">
                    <HeaderText className=" text-white font-medium font-serif">
                        Send us a Message
                    </HeaderText>
                </div>

                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    {/* Full Name */}
                    <div>
                        <label htmlFor="name" className="block text-lg font-semibold text-white">
                            Full Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="mt-2 block w-full rounded-md bg-white px-4 py-3 text-lg text-header-text outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primaryCyan"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-lg font-semibold text-white">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="mt-2 block w-full rounded-md bg-white px-4 py-3 text-lg text-header-text outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primaryCyan"
                            required
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="sm:col-span-2">
                        <label htmlFor="number" className="block text-lg font-semibold text-white">
                            Phone Number
                        </label>
                        <input
                            id="number"
                            name="number"
                            type="tel"
                            autoComplete="tel"
                            value={formData.number}
                            onChange={handleChange}
                            placeholder="(123) 456-7890"
                            className="mt-2 block w-full rounded-md bg-white px-4 py-3 text-lg text-header-text outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primaryCyan"
                        />
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-lg font-semibold text-white">
                            Message
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Enter your message..."
                                className="block w-full text-header-text rounded-md bg-white px-4 py-3 text-lg outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primaryCyan"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* HIPAA Disclaimer */}
                <div className="mt-8 p-4 bg-white/10 border border-white/20 rounded-md">
                    <p className="text-white text-sm">
                        <strong>Please be advised:</strong> This contact form is not HIPAA compliant. Please be cautious about including any protected health information (PHI) or sensitive medical details in your message.
                    </p>
                </div>

                {/* Submit Button */}
                <div className="mt-8 flex justify-center">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="rounded-md bg-white px-8 py-4 text-primary-teal text-lg font-semibold shadow-sm hover:bg-primaryCyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-teal disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {isLoading ? "Sending..." : "Send Message"}
                    </button>
                </div>
            </div>
        </form>
    );
}