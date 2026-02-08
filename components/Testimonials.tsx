import { Star } from "lucide-react";
import Image from "next/image";


// ... (testimonials data remains the same)
const testimonials = [
    {
        name: "Rajesh Kumar",
        date: "2 days ago",
        content: "Excellent service! The car was spotless and the driver was very professional. Highly recommended for corporate travel.",
        rating: 5,
        initial: "R",
        color: "bg-red-500",
    },
    {
        name: "Priya Sundar",
        date: "1 week ago",
        content: "We booked a tempo traveller for our family trip to Ooty. Comfortable journey and helpful driver.",
        rating: 5,
        initial: "P",
        color: "bg-purple-500",
    },
    {
        name: "Karthik R",
        date: "1 month ago",
        content: "I've been using Saivk Travels for 2 years now. Always on time and very reasonable rates.",
        rating: 5,
        initial: "K",
        color: "bg-green-500",
    },
    {
        name: "Amit Patel",
        date: "2 months ago",
        content: "Best cab service in Madurai. Driver stopped at good restaurants and was very polite.",
        rating: 5,
        initial: "A",
        color: "bg-blue-500",
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 animate-fade-in-up">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                            <span className="text-blue-600">Google</span> Reviews
                        </h2>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="text-xl font-bold text-gray-800">5.0</span>
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-current" />
                                ))}
                            </div>
                            <span className="text-gray-500 text-sm">(128 Reviews)</span>
                        </div>
                    </div>

                    <a
                        href="https://www.google.com/search?q=saivk+travels+madurai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-md flex items-center gap-2"
                    >
                        Write a Review
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {testimonials.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col h-full"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`h-10 w-10 rounded-full ${review.color} text-white flex items-center justify-center font-bold`}>
                                    {review.initial}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-sm">{review.name}</h4>
                                    <p className="text-gray-400 text-xs">{review.date}</p>
                                </div>
                                <Image
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                                    alt="Google"
                                    width={20}
                                    height={20}
                                    className="ml-auto opacity-70"
                                />
                            </div>

                            <div className="flex text-yellow-400 mb-3">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                                "{review.content}"
                            </p>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}
