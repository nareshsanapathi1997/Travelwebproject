import { ShieldCheck, Clock, Award, Users } from "lucide-react";

const features = [
    {
        icon: <ShieldCheck className="h-12 w-12 text-blue-600" />,
        title: "Safe & Sanitized",
        description: "Your safety is our priority. All cars are sanitized before every trip.",
    },
    {
        icon: <Clock className="h-12 w-12 text-blue-600" />,
        title: "Always On Time",
        description: "Punctuality is our hallmark. We value your time.",
    },
    {
        icon: <Award className="h-12 w-12 text-blue-600" />,
        title: "Expert Drivers",
        description: "Verified, experienced, and polite drivers for a smooth journey.",
    },
    {
        icon: <Users className="h-12 w-12 text-blue-600" />,
        title: "24/7 Support",
        description: "We are available round the clock to assist you.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-20 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose Saivk Travels?</h2>
                    <p className="mt-4 text-xl text-gray-600">We deliver the best travel experience in South India.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-xl border border-gray-100 animate-fade-up group"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="mb-6 bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-100">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
