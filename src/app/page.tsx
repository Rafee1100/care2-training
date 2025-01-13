import AboutUs from "@/sections/about-us/AboutUs";
import WhyChoseUs from "@/sections/about-us/WhyChoseUs";
import ContactUs from "@/sections/contact-us/page";
import HeroSections from "@/sections/homepage/HeroSections";
import OurServices from "@/sections/homepage/OurServices";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSections />
      <AboutUs/>
      <OurServices />
      <WhyChoseUs/>
      <ContactUs/>
    </main>
  );
}
