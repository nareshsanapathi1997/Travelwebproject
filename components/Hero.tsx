import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <div className="relative h-screen w-full bg-slate-900 flex items-center justify-center overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent z-10" />

            {/* Background Image */}
            <div className="absolute inset-0 z-0 animate-zoom-in">
                <Image
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1920&auto=format&fit=crop"
                    alt="Background"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
                <div className="animate-fade-up">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-6 backdrop-blur-sm">
                        #1 Travel Agency in Madurai
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-2xl leading-tight">
                        Journey with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Comfort</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Class</span>
                    </h1>
                </div>

                <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto drop-shadow-md animate-fade-up [animation-delay:200ms] leading-relaxed">
                    Experience the best car travel service in South India. Reliable, luxury, and affordable rides for every destination.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-up [animation-delay:400ms]">
                    <Link
                        href="/contact"
                        className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all hover:scale-105 shadow-xl hover:shadow-blue-600/30 flex items-center justify-center gap-2 group"
                    >
                        Book Your Ride
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                    <Link
                        href="/fleet"
                        className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all hover:scale-105 flex items-center justify-center"
                    >
                        View Fleet
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-float text-white/70">
                <ChevronDown className="h-10 w-10" />
            </div>
        </div>
    );
}
