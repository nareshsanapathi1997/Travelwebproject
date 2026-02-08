import { Plane, Map, Briefcase, Calendar } from "lucide-react";

const services = [
    {
        icon: <Plane className="h-10 w-10 text-blue-600" />,
        title: "Airport Transfers",
        description: "Reliable pickup and drop services to all major airports in South India. Punctuality guaranteed.",
    },
    {
        icon: <Map className="h-10 w-10 text-blue-600" />,
        title: "Outstation Trips",
        description: "Explore destinations like Kodaikanal, Ooty, Munnar, and Rameswaram with our experienced drivers.",
    },
    {
        icon: <Briefcase className="h-10 w-10 text-blue-600" />,
        title: "Corporate Rentals",
        description: "Premium cars for business meetings and corporate events with professional chauffeurs.",
    },
    {
        icon: <Calendar className="h-10 w-10 text-blue-600" />,
        title: "Wedding & Events",
        description: "Luxury fleets to make your special occasions even more memorable.",
    },
];

export default function Services() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Premium Services</h2>
                    <p className="mt-4 text-xl text-gray-600">Tailored travel solutions for every need.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                            <div className="mb-6 bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{service.title}</h3>
                            <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
