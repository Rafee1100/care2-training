"use client";
import DialogModal from "@/components/DialogModal";
import { useState } from "react";

export default function TopBanner() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="py-4 md:py-0 md:h-[95px] md:max-h-[95px] flex items-center bg-amber-500">
        <div className="container flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="text-center md:text-left">
            <h4 className="text-white font-medium text-base lg:text-xl md:leading-[30px]">
              Get yourself aligned with the modern and evolving technologies today!!!
            </h4>
            <p className="text-white font-medium text-xs md:text-sm md:leading-[21px]">
              Get upto 50% discount on courses
            </p>
          </div>
          <div>
            <button
              className="bg-white w-[133px] min-w-[133px] h-[36px]  rounded-[4px]"
              onClick={() => setOpen(true)}
            >
              <span className="bg-gradient-to-r from-[#FFBF00] to-[#FF5733] text-transparent  bg-clip-text text-sm leading-7 tracking-[0.25%]">
                Learn more
              </span>
            </button>
          </div>
        </div>
      </div>
      <DialogModal open={open} setOpen={setOpen}>
        <div className="p-5 min-h-[200px] flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-y-6">
            <p className="text-[#152536] text-center font-medium text-xs md:text-base md:leading-[21px]">
            AI and ML are driving the future of innovation, making them essential skills for high-demand careers. Investing in these courses helps students master data-driven decision-making, automation, and problem-solving, boosting their employability in a competitive job market. Stay ahead by learning technologies that are shaping tomorrow.
            </p>
            <div>
              <a
                href=""
                target="_blank"
              >
                <button className="bg-gradient-to-r from-[#005BEA] to-[#45D8FF] w-[104px] min-w-[104px] h-[34px]   rounded-[4px]">
                  <span className="text-white text-sm leading-7 tracking-[1.25%]">
                    Sign up
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </DialogModal>
    </>
  );
}
