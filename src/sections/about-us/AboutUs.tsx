import XaxisPositive from "@/components/animation/XaxisPositive";

export default function AboutUs() {
  return (
    <XaxisPositive classes="pt-[40px] container">
      <div className="text-right">
        <span className=" uppercase bg-gradient-to-r from-[#005BEA] to-[#45D8FF] text-transparent  bg-clip-text text-xs leading-[18px] tracking-[0.4%]">
          About Us
        </span>
        <h3 className="text-xl leading-[36px] sm:text-[32px] text-[#152536] sm:leading-[48px]">
        Care2 Training Consultancy
        </h3>
        <p className="text-xs sm:text-base text-[#6C757D] leading-[24px] pt-2">
          {`At Care2 Training Consultancy, we empower students and professionals to explore global opportunities. Our team provides tailored guidance for studying, working, or living abroad, ensuring a seamless experience. With deep expertise and a strong success rate, we simplify visa applications and connect you with the best international programs. Let us turn your aspirations into reality and open doors to a world of possibilities.`}
        </p>
      </div>
    </XaxisPositive>
  );
}
