import { MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

const packages = [
    {
        title: "Madurai to Rameswaram",
        duration: "1 Day / 2 Days",
        image: "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=",
        price: "Starts ₹3,500",
    },
    {
        title: "Madurai to Kodaikanal",
        duration: "2 Days / 3 Nights",
        image: "https://media.istockphoto.com/id/483724081/photo/yosemite-valley-landscape-and-river-california.jpg?s=612x612&w=0&k=20&c=QQ7rvq0Qbfpkug1Wbd36PGqkOntoPFKWxiE4w4tV-NE=",
        price: "Starts ₹4,500",
    },
    {
        title: "Madurai to Munnar",
        duration: "3 Days / 2 Nights",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800&auto=format&fit=crop",
        price: "Starts ₹5,500",
    },
];

export default function Packages() {
    const whatsappNumber = "917337503431";

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Popular Tour Packages</h2>
                    <p className="mt-4 text-xl text-gray-600">Discover the beauty of South India with our curated trips.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white animate-fade-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="relative h-72 overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                <Image
                                    src={pkg.image}
                                    alt={pkg.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute bottom-4 right-4 z-20 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-blue-600 shadow-sm border border-white/50">
                                    {pkg.price}
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                                    <MapPin className="h-4 w-4 text-blue-500" />
                                    <span className="font-medium">Returns to Madurai</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{pkg.title}</h3>
                                <p className="text-gray-600 mb-8 font-medium bg-gray-50 inline-block px-3 py-1 rounded-lg">{pkg.duration}</p>

                                <a
                                    href={`https://wa.me/${whatsappNumber}?text=I am interested in ${pkg.title} package`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full block bg-blue-600 text-white text-center py-4 rounded-xl font-bold hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 group-hover:translate-y-1"
                                >
                                    Book Package <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
