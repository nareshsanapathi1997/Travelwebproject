import Fleet from "@/components/Fleet";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";

export default function FleetPage() {
    return (
        <main>
            <div className="bg-slate-900 pt-32 pb-16 text-center text-white animate-fade-down">
                <h1 className="text-4xl font-bold mb-4">Our Premium Fleet</h1>
                <p className="text-xl text-gray-300">Choose the perfect vehicle for your journey.</p>
            </div>

            <Fleet />

            <section className="py-16 bg-white animate-fade-up [animation-delay:200ms]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Tariff Card</h2>
                    <div className="overflow-x-auto shadow-xl rounded-lg">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                            <thead className="bg-blue-600 text-white">
                                <tr>
                                    <th className="py-4 px-6 text-left">Vehicle Type</th>
                                    <th className="py-4 px-6 text-left">Seating Capacity</th>
                                    <th className="py-4 px-6 text-left">Per km Price (AC)</th>
                                    <th className="py-4 px-6 text-left">Driver Bata (Per Day)</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 divide-y divide-gray-200">
                                <tr className="hover:bg-blue-50 transition-colors">
                                    <td className="py-4 px-6 font-semibold">Swift Dzire / Etios</td>
                                    <td className="py-4 px-6">4 + 1</td>
                                    <td className="py-4 px-6">₹13</td>
                                    <td className="py-4 px-6">₹300</td>
                                </tr>
                                <tr className="hover:bg-blue-50 transition-colors">
                                    <td className="py-4 px-6 font-semibold">Toyota Innova</td>
                                    <td className="py-4 px-6">6 + 1</td>
                                    <td className="py-4 px-6">₹18</td>
                                    <td className="py-4 px-6">₹400</td>
                                </tr>
                                <tr className="hover:bg-blue-50 transition-colors">
                                    <td className="py-4 px-6 font-semibold">Innova Crysta</td>
                                    <td className="py-4 px-6">7 + 1</td>
                                    <td className="py-4 px-6">₹22</td>
                                    <td className="py-4 px-6">₹500</td>
                                </tr>
                                <tr className="hover:bg-blue-50 transition-colors">
                                    <td className="py-4 px-6 font-semibold">Tempo Traveller</td>
                                    <td className="py-4 px-6">12 / 14 / 17 Seats</td>
                                    <td className="py-4 px-6">₹26</td>
                                    <td className="py-4 px-6">₹600</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">* Toll, parking, and interstate permit charges extra as applicable.</p>
                </div>
            </section>

            <WhyChooseUs />
            <Contact />
        </main>
    );
}
