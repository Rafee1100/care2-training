import SolutionCard from "@/components/SolutionCard";

import YaxisPositive from "@/components/animation/YaxisPositive";
import digitalMaturityImg from "../../../public/images/services/digital-maturity-assessment.png";
import digitalTransformation from "../../../public/images/services/digital-transformation-vector.png";
import projectConsulting from "../../../public/images/services/project-consulting.png";

const solutionsData = [
  {
    id: 1,
    title: "Student Visa Assistance – Your Gateway to Global Education",
    des: "Expert guidance for hassle-free student visa applications, ensuring smooth approvals and a stress-free path to studying abroad",
    url: "/professional-services#digitalMaturity",
    image: digitalMaturityImg,
  },
  {
    id: 2,
    title: "Work Abroad Opportunities – Build a Global Career",
    des: "Unlock international job prospects with our expert support in finding work abroad, handling applications, and navigating visa processes",
    url: "/professional-services#digitalTransformation",
    image: digitalTransformation,
  },
  {
    id: 3,
    title: "Living Abroad Consultancy – Make Your Move Seamless",
    des: "Comprehensive support for relocating abroad, including visa assistance, housing guidance, and cultural adaptation, ensuring a smooth transition to your new home",
    url: "/professional-services#projectConsulting",
    image: projectConsulting,
  },
];

export default function OurServices() {
  return (
    <div className="pt-[120px] container">
      <YaxisPositive classes="text-center">
        <span className=" uppercase bg-gradient-to-r from-[#005BEA] to-[#45D8FF] text-transparent  bg-clip-text text-xs leading-[18px] tracking-[0.4%]">
          PROFESSIONAL
        </span>
        <h3 className="text-[24px] leading-[36px] sm:text-[32px] text-[#152536] sm:leading-[48px]">
          Our Services
        </h3>
      </YaxisPositive>

      <div className="pt-[50px] grid md:grid-cols-2 lg:grid-cols-3 gap-5 pb-6">
        {solutionsData.map((solution: any) => (
          <SolutionCard
            key={solution.id}
            solution={solution}
            customClass="p-4"
          />
        ))}
      </div>
    </div>
  );
}
