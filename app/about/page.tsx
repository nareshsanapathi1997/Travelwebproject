import { Shield, Award, Users, Map, Heart, Compass } from "lucide-react";

export default function About() {
    return (
        <main>
            {/* 1. Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0 animate-zoom-in"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-up">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Journey</h1>
                    <p className="text-xl md:text-2xl text-gray-200">
                        From a single car in Madurai to South India's most trusted travel partner. This is the story of Saivk Travels.
                    </p>
                </div>
            </section>

            {/* 2. Our Story (Huge Data) */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-fade-right">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">A Legacy of Excellence Since 2010</h2>
                            <div className="prose prose-lg text-gray-600 space-y-6">
                                <p>
                                    Saivk Travels began with a simple mission: to provide safe, reliable, and affordable transportation for the people of Madurai. What started as a humble operation with just a single Ambassador car has now grown into a premium fleet serving thousands of happy customers across Tamil Nadu, Kerala, and Karnataka.
                                </p>
                                <p>
                                    Our founder, Mr. N. Sanapathi, envisioned a travel service where the journey was as memorable as the destination. He believed that a travel agency shouldn't just be about booking cars; it should be about creating experiences. This philosophy is deeply embedded in our DNA. Every driver we hire is not just skilled behind the wheel but is also a courteous host who knows the local routes, the best eateries, and the hidden gems of South India.
                                </p>
                                <p>
                                    Over the last decade, we have weathered challenges, embraced technology, and expanded our horizons. Today, we are proud to be the preferred travel partner for corporate giants, wedding planners, and families alike. Our fleet has evolved from classic sedans to modern SUVs and luxury coaches, ensuring that we have the perfect vehicle for every occasion.
                                </p>
                                <p>
                                    But one thing hasn't changed: our commitment to you. Whether it's a 3 AM airport pickup or a 10-day pilgrimage tour, we treat every trip with the same level of dedication and care that we did on day one.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 animate-fade-left">
                            <img
                                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=600&auto=format&fit=crop"
                                alt="Driving"
                                className="rounded-2xl shadow-lg mt-12 hover:scale-105 transition-transform duration-500"
                            />
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRzZ_Y2zDi-_ZxZUF5NlI40Oxjm1SywTEURQ&s"
                                alt="Car Fleet"
                                className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Stats Section */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="animate-fade-up [animation-delay:0ms]">
                            <div className="text-4xl font-bold mb-2">12+</div>
                            <div className="text-blue-100">Years Experience</div>
                        </div>
                        <div className="animate-fade-up [animation-delay:150ms]">
                            <div className="text-4xl font-bold mb-2">50k+</div>
                            <div className="text-blue-100">Happy Travelers</div>
                        </div>
                        <div className="animate-fade-up [animation-delay:300ms]">
                            <div className="text-4xl font-bold mb-2">100+</div>
                            <div className="text-blue-100">Luxury Vehicles</div>
                        </div>
                        <div className="animate-fade-up [animation-delay:450ms]">
                            <div className="text-4xl font-bold mb-2">24/7</div>
                            <div className="text-blue-100">Customer Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Core Values */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-fade-up">
                        <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
                        <p className="mt-4 text-xl text-gray-600">The principles that drive us every mile.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-500 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl animate-fade-up [animation-delay:0ms]">
                            <Shield className="h-12 w-12 text-blue-600 mb-6" />
                            <h3 className="text-xl font-bold mb-4">Safety First</h3>
                            <p className="text-gray-600">
                                We enforce strict safety protocols. Routine vehicle checks, GPS tracking, and background-verified drivers ensure your peace of mind.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-green-500 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl animate-fade-up [animation-delay:150ms]">
                            <Heart className="h-12 w-12 text-green-600 mb-6" />
                            <h3 className="text-xl font-bold mb-4">Customer Obsession</h3>
                            <p className="text-gray-600">
                                We don't just drive; we serve. We go the extra mile to accommodate special requests, from baby seats to wheelchair assistance.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-purple-500 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl animate-fade-up [animation-delay:300ms]">
                            <Compass className="h-12 w-12 text-purple-600 mb-6" />
                            <h3 className="text-xl font-bold mb-4">Integrity</h3>
                            <p className="text-gray-600">
                                Transparent pricing with no hidden charges. What you see is what you pay. Honesty is the fuel of our business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Team / Gallery */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-fade-up">
                        <h2 className="text-3xl font-bold text-gray-900">Life at Saivk Travels</h2>
                        <p className="mt-4 text-xl text-gray-600">More than just a workplace, we are a family.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=600&auto=format&fit=crop"
                            alt="Team Meeting"
                            className="rounded-xl shadow-md h-64 w-full object-cover hover:scale-105 transition-transform duration-300 animate-fade-up [animation-delay:0ms]"
                        />
                        <img
                            src="https://media.istockphoto.com/id/1283852667/photo/touch-of-fresh-moss-in-the-forest.jpg?s=2048x2048&w=is&k=20&c=0GQnyGr_AiQreuQSEamiqsoUhYlYLh94fO1fv1d2diA="
                            alt="Customer Service"
                            className="rounded-xl shadow-md h-64 w-full object-cover hover:scale-105 transition-transform duration-300 animate-fade-up [animation-delay:150ms]"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=600&auto=format&fit=crop"
                            alt="Driver Training"
                            className="rounded-xl shadow-md h-64 w-full object-cover hover:scale-105 transition-transform duration-300 animate-fade-up [animation-delay:300ms]"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
