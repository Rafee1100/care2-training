import AboutUs from "@/sections/about-us/AboutUs";
import WhyChoseUs from "@/sections/about-us/WhyChoseUs";
import Image from "next/image";
import Ellipse47 from "../../../public/images/about-us/Ellipse47.png";

export default function page() {
  return (
    <div className="overflow-hidden mb-12">
      <Image
        src={Ellipse47}
        alt="Image"
        className="absolute left-0 -z-10 -top-[40px]"
      />

      <AboutUs />
      <WhyChoseUs />
    </div>
  );
}
