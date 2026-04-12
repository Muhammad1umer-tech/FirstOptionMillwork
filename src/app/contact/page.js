import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/footer";

export const metadata = {
  title: "Contact Us — First Option Millwork",
  description: "Get in touch with First Option Millwork for custom cabinetry and millwork projects.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  );
}
