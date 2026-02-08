import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";

export default function ServicesPage() {
    return (
        <main>
            <div className="bg-slate-900 pt-32 pb-16 text-center text-white animate-fade-down">
                <h1 className="text-4xl font-bold mb-4">Our Premium Services</h1>
                <p className="text-xl text-gray-300">Comprehensive travel solutions tailored for you.</p>
            </div>

            <Services />

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-lg text-gray-600 animate-fade-right">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Our Services Stand Out</h2>
                        <p>At Saivk Travels, we don't just transport you from point A to point B. We ensure your journey is comfortable, safe, and memorable.</p>
                        <ul className="list-disc pl-5 space-y-4 marker:text-blue-600">
                            <li><strong>Airport Transfers</strong>: We track your flight to ensure we are there when you land, zero waiting time.</li>
                            <li><strong>Corporate Travel</strong>: Monthly billing options and priority booking for business clients.</li>
                            <li><strong>Pilgrimage Tours</strong>: Specialized packages for Rameswaram, Madurai Meenakshi Amman Temple, and Palani with drivers who know the temple timings and rituals.</li>
                            <li><strong>Wedding Events</strong>: Luxury cars decorated for the bride and groom, and buses for guest transport.</li>
                        </ul>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop"
                        alt="Service Quality"
                        className="rounded-2xl shadow-xl w-full h-96 object-cover animate-fade-left hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </section>

            <Packages />
            <Testimonials />
        </main>
    );
}
