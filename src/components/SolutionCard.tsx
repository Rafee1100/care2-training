"use client";
import Image from "next/image";
import Link from "next/link";
import RotateAnimation from "./animation/RotateAnimation";

export default function SolutionCard({ solution, customClass }: any) {
  return (
    <RotateAnimation
      classes={`${customClass} bg-white border rounded-xl border-[#CED4DA] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center gap-6`}
    >
      <div>
        <Image
          width={solution?.width}
          src={solution?.image}
          alt="Alt Image"
          placeholder="blur"
        />
      </div>
      <div className="flex items-center justify-center gap-2 flex-col">
        <h6 className="text-center text-xs leading-[24px] sm:text-xl text-[#152536] font-medium sm:leading-[30px]">
          {solution?.title}
        </h6>
        <p className="text-[#6C757D] text-sm leading-7 tracking-[0.25%] text-center">
          {solution?.des}
        </p>
      </div>
      <Link href={solution?.url} className=" flex items-center gap-2">
        <svg
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 5.14783H11.5M11.5 5.14783L7 0.647827M11.5 5.14783L7 9.64783"
            stroke="url(#paint0_linear_836_963)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_836_963"
              x1="11.5"
              y1="9.64783"
              x2="-0.16404"
              y2="5.70969"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#45D8FF" />
              <stop offset="0.891573" stopColor="#005BEA" />
            </linearGradient>
          </defs>
        </svg>

        <span className="bg-gradient-to-r from-[#005BEA] to-[#45D8FF] text-transparent font-medium  bg-clip-text text-sm leading-[21px] tracking-[1.25%]">
          {solution?.btnText ? solution?.btnText : "Learn more"}
        </span>
      </Link>
    </RotateAnimation>
  );
}
