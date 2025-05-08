"use client"
import {Brain, Eye, Heart, Ear, Smile, Stethoscope, Syringe, ScanEye, LampCeilingIcon} from "lucide-react"

const services = [
    {name: "Neurology", icon: Brain},
    {name: "Ophthalmology", icon: Eye},
    {name: "Cardiology", icon: Heart},
    {name: "Pulmonology", icon: LampCeilingIcon},
    {name: "ENT", icon: Ear},
    {name: "Plastic Surgery", icon: Smile},
    {name: "General Surgery", icon: Stethoscope},
    {name: "Immunology", icon: Syringe},
    {name: "Radiology", icon: ScanEye},
]

export default function ServicesGrid() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Specialties</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center border rounded-xl p-6 hover:shadow-md hover:bg-lightPurple transition"
                        >
                            <service.icon className="w-10 h-10 text-primaryBlue mb-4" />
                            <span className="text-sm font-medium text-gray-700">{service.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
