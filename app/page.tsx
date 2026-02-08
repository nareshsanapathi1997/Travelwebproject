import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Fleet from "@/components/Fleet";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main>
            <Hero />
            <Services />
            <Packages />
            <Fleet />
            <WhyChooseUs />
            <Testimonials />
            <Contact />
        </main>
    );
}
