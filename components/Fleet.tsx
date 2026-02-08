import { User, Briefcase } from "lucide-react";
import Image from "next/image";

const fleet = [
    {
        name: "Toyota Etios",
        type: "Sedan",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=600&auto=format&fit=crop",
        seats: 4,
        bags: 2,
        price: "₹12/km",
    },
    {
        name: "Toyota Innova Crysta",
        type: "Premium SUV",
        image: "https://images.unsplash.com/photo-1626847037657-fd3622613ce3?q=80&w=600&auto=format&fit=crop",
        seats: 7,
        bags: 4,
        price: "₹18/km",
    },
    {
        name: "Swift Dzire",
        type: "Compact Sedan",
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=600&auto=format&fit=crop",
        seats: 4,
        bags: 2,
        price: "₹11/km",
    },
    {
        name: "Tempo Traveller",
        type: "Van",
        image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=600&auto=format&fit=crop",
        seats: 12,
        bags: 10,
        price: "₹22/km",
    },
];

export default function Fleet() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Fleet</h2>
                    <p className="mt-4 text-xl text-gray-600">Choose the perfect ride for your journey.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {fleet.map((car, index) => (
                        <div key={index} className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 bg-white">
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={car.image}
                                    alt={car.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs font-bold px-3 py-1 bg-blue-100 text-blue-800 rounded-full uppercase tracking-wide">{car.type}</span>
                                    <span className="text-lg font-bold text-gray-900">{car.price}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{car.name}</h3>
                                <div className="flex items-center gap-6 text-gray-500 mb-6">
                                    <div className="flex items-center gap-2">
                                        <User className="h-4 w-4" />
                                        <span className="text-sm">{car.seats} Seats</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Briefcase className="h-4 w-4" />
                                        <span className="text-sm">{car.bags} Bags</span>
                                    </div>
                                </div>
                                <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
