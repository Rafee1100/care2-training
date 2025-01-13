"use client";

import XaxisPositive from "@/components/animation/XaxisPositive";

const ourUSP = [
  {
    title: "Expert Guidance: ",
    description:
      "Years of experience in student visas, work abroad, and relocation consultancy.",
  },
  {
    title: "Personalized Support: ",
    description: "Tailored solutions to meet individual needs and aspirations.",
  },
  {
    title: "Proven Success: ",
    description:
      "A strong track record of helping clients achieve their global goals.",
  },
  {
    title: "End-to-End Assistance: ",
    description: "Comprehensive help from documentation to final approvals.",
  },
  {
    title: "Global Network: ",
    description:
      "Partnerships with top institutions and organizations worldwide.",
  },
  {
    title: "Affordable Services: ",
    description: "Quality consultancy at competitive prices.",
  },
  {
    title: "Dedicated Team: ",
    description:
      "A committed team that ensures a smooth and stress-free process.",
  },
];

export default function WhyChoseUs() {

  return (
    <>
      <div className="pt-[120px] container mb-5">
        <div className="flex flex-col sm:flex-row  gap-3">
          <XaxisPositive classes="pt-[40px] container">
            <div className="text-center">
              <span className=" uppercase bg-gradient-to-r from-[#0D1A73] to-[#45D8FF] text-transparent  bg-clip-text text-xs leading-[18px] tracking-[0.4%]">
               Why Choose
              </span>
              <h3 className="text-xl leading-[36px] sm:text-[32px] text-[#152536] sm:leading-[48px] text-left">
                Care2 Training Consultancy
              </h3>
              <div className="text-xs sm:text-base text-[#6C757D] leading-[24px] text-justify sm:text-left">
                <ul role="list" className="mt-2 space-y-1">
                  {ourUSP.map((usp) => (
                    <li key={usp.title}>
                      <span className="font-bold">{usp.title}</span>
                      <span>{usp.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </XaxisPositive>
        </div>
      </div>
    </>
  );
}
