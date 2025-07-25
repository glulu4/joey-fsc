// "use client";
// import TextInput from '@/components/TextInput';
// import clsx from 'clsx';
// import React, {useState} from 'react';
// import HeaderText from '../ui/HeaderText';
// // import Confetti from 'react-confetti-boom';

// export type MyFormData = {
//     name: string;
//     email: string;
//     message: string;
// };

// export default function Form() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [message, setMessage] = useState("");
//     const [errors, setErrors] = useState({email: "", message: ""});
//     const [success, setSuccess] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);

//     const handleSubmit = async () => {

//         // Reset success state and mark as loading
//         setSuccess(false);
//         setIsLoading(true);

//         // Validate required fields; if any are missing, show an alert and stop
//         if (!name) {
//             alert("Please enter your name.");
//             setIsLoading(false);
//             return;
//         }
//         if (!email) {
//             alert("Please enter your email.");
//             setIsLoading(false);
//             return;
//         }
//         if (!message) {
//             alert("Please enter your message.");
//             setIsLoading(false);
//             return;
//         }

//         // Build the form data
//         const formData: MyFormData = {name, email, message};
//         let submissionSuccessful = false;

//         try {
//             // Send the form data to the API
//             const response = await fetch("/api/contact", {
//                 method: "POST",
//                 headers: {"Content-Type": "application/json"},
//                 body: JSON.stringify({formData}),
//             });

//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }

//             const data = await response.json();
//             console.log("Form submitted:", data);
//             submissionSuccessful = true;
//             alert("Your message has been sent successfully!");
//         } catch (error) {
//             console.error("Error submitting the form:", error);
//             alert("Failed to send your message. Please try again later.");
//             setErrors({
//                 email: "Invalid email address",
//                 message: "Message is required",
//             });
//         } finally {
//             // Reset loading state and set success flag
//             setIsLoading(false);
//             setSuccess(submissionSuccessful);

//             // If successful, reset the form fields
//             if (submissionSuccessful) {
//                 setName("");
//                 setEmail("");
//                 setMessage("");
//             }
//         }
//     };

//     return (
//         <div className=" rounded-2xl py-20 px-8 bg-primary-teal">

//             <div className='mb-12 text-center'>
//                 <HeaderText className=' text-whitesmoke font-medium font-serif'>
//                     Contact Form
//                 </HeaderText>
//             </div>
//             <div className="flex flex-col space-y-12">
//                 {/* Name and Email Fields */}
//                 <div className="flex flex-col sm:flex-row gap-8">
//                     <div className="flex-1">
//                         <TextInput
//                             label="Full Name"
//                             value={name}
//                             setValue={setName}
//                             placeholder="John Doe"
//                             labelClassName='text-white'
//                             required
//                             type="text"
//                         />
//                     </div>
//                     <div className="flex-1">
//                         <TextInput
//                             label="Email"
//                             value={email}
//                             setValue={setEmail}
//                             labelClassName='text-white'
//                             placeholder="...@example.com"
//                             required
//                             type="email"
//                         />
//                         {errors.email && (
//                             <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//                         )}
//                     </div>
//                 </div>

//                 {/* Message Field */}
//                 <div className='flex flex-col'>
//                     <label className="text-md font-semibold text-bg2 mb-2 ">Message</label>
//                     <div className="relative flex items-center border border-gray-300 rounded-lg px-4 py-3 bg-whitesmoke  focus-within:ring-2 focus-within:ring-primaryGreenLight">


//                         <textarea

//                             rows={4}
//                             className={clsx(
//                                 "w-full text-lg font-semibold text-gray-600 bg-transparent focus:outline-none"
//                             )}

//                             value={message}
//                             onChange={(e) => setMessage(e.target.value)}
//                             placeholder="Enter your message"
//                             name="message"
//                             required

//                         />
//                         {errors.message && (
//                             <p className="mt-1 text-sm text-red-600">{errors.message}</p>
//                         )}
//                     </div>
//                 </div>


//                 {/* Submit Button */}
//                 <div className="flex justify-center ">
//                     <button
//                         onClick={handleSubmit}
//                         type="submit"
//                         className="bg-whitesmoke  text-primary-teal font-semibold py-3 px-6 rounded-lg hover:bg-primaryGreenLight transition-colors"
//                     >
//                         {isLoading ? "Loading" : "Send Message"}
//                     </button>
//                 </div>
//             </div>
//         </div>

//     );
// }



'use client';

import {useState, ChangeEvent, FormEvent} from 'react';
import HeaderText from '../ui/HeaderText';

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export default function Form() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: ''
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
                body: JSON.stringify({formData}),
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
                message: ''
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
                    <HeaderText className="text-header-text text-white font-medium font-serif">
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
                            className="mt-2 block w-full rounded-md bg-white px-4 py-3 text-lg text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primaryCyan"
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
                            className="mt-2 block w-full rounded-md bg-white px-4 py-3 text-lg text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primaryCyan"
                            required
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
                                className="block w-full rounded-md bg-white px-4 py-3 text-lg text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primaryCyan"
                                required
                            />
                        </div>
                    </div>
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