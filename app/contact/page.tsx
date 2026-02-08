import Contact from "@/components/Contact";

export default function ContactPage() {
    return (
        <main>
            <div className="bg-slate-900 pt-32 pb-16 text-center text-white animate-fade-down">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-xl text-gray-300">We are here to help you 24/7.</p>
            </div>
            <Contact />
        </main>
    );
}
