"use client";

import { MessageCircle, Phone } from "lucide-react";

export default function FloatingActions() {
    const whatsappNumber = "917337503431";
    const message = encodeURIComponent("Hello! I want to book a car.");

    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
            {/* WhatsApp */}
            <a
                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 flex items-center justify-center"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle className="h-6 w-6" />
            </a>

            {/* Call Button */}
            <a
                href="tel:+917337503431"
                className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-transform hover:scale-110 flex items-center justify-center"
                aria-label="Call Now"
            >
                <Phone className="h-6 w-6" />
            </a>
        </div>
    );
}
