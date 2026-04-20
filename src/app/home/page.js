import Navbar from "@/components/universal/Navbar";
import Hero from "@/components/home/Hero";
import AboutUsSection from "@/components/universal/AboutUs";
import HomeSection3 from "@/components/home/HomeSection3";
import Testimonials from "@/components/universal/Testimonials";
import HomeSection4 from "@/components/home/interactive-selector";
import Footer from "@/components/universal/Footer";
import ContactCTA from "@/components/universal/ContactCTA";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUsSection />
      <HomeSection3/>
      <HomeSection4/>
      <Testimonials/>
      <ContactCTA/>
      <Footer/>
    </>
  );
}
