"use client";
import XaxisNegative from "@/components/animation/XaxisNegative";
import DialogModal from "@/components/DialogModal";
import Image from "next/image";
import { useState } from "react";
import Ellipse29 from "../../../public/images/book-demo/Ellipse29.png";
import Ellipse42 from "../../../public/images/book-demo/Ellipse42.png";
import Ellipse43 from "../../../public/images/book-demo/Ellipse43.png";
import Group1000008874_1 from "../../../public/images/book-demo/Group1000008874_1.png";
import Group1000008874_2 from "../../../public/images/book-demo/Group1000008874_2.png";

export default function Page() {
  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    phone: "",
    additionalInformation: "",
  });
  const [loading, setLoading] = useState(false);
  const handleBookContactForm = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
    } catch (err: any) {}
  };

  return (
    <>
      <div className="overflow-hidden mb-12">
        <Image
          src={Ellipse29}
          alt="Img"
          className="absolute -top-[223px] right-0 -z-10"
        />
        <Image
          src={Group1000008874_1}
          alt="Img"
          className="absolute top-[244px] right-0 -z-10"
        />
        <XaxisNegative classes="pt-[36px] container ">
          <div className="max-w-[862px] mx-auto flex flex-col gap-y-6">
            <h3 className="text-xl leading-[30px] font-medium text-[#152536]">
              Contact us
            </h3>
            <form onSubmit={handleBookContactForm}>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-7 text-[#6C757D]"
                  >
                    Name
                    <span className="text-red-500 pl-1">*</span>
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="name"
                      className="h-[36px] bg-white w-full text-xs leading-[18px] px-3 py-2 shadow-[0px_1px_4px_0px_#0000001A] rounded-[4px]  bg-transparent text-[#6C757D] placeholder:text-[#CED4DA] placeholder:text-xs focus:outline-0"
                      placeholder="e.g.john Doe"
                      required
                      value={formInfo?.name}
                      onChange={(e: any) =>
                        setFormInfo((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-7 text-[#6C757D]"
                  >
                    Email
                    <span className="text-red-500 pl-1">*</span>
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email"
                      required
                      className="h-[36px] bg-white w-full text-xs leading-[18px] px-3 py-2 shadow-[0px_1px_4px_0px_#0000001A] rounded-[4px]  bg-transparent text-[#6C757D] placeholder:text-[#CED4DA] placeholder:text-xs focus:outline-0"
                      placeholder="e.g. your.name@domain.com"
                      value={formInfo?.email}
                      onChange={(e: any) =>
                        setFormInfo((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="number"
                    className="block text-sm font-medium leading-7 text-[#6C757D]"
                  >
                    Contact number
                    <span className="text-red-500 pl-1">*</span>
                  </label>
                  <div className="mt-1">
                    <input
                      type="number"
                      id="number"
                      required
                      className="h-[36px] bg-white w-full text-xs leading-[18px] px-3 py-2 shadow-[0px_1px_4px_0px_#0000001A] rounded-[4px]  bg-transparent text-[#6C757D] placeholder:text-[#CED4DA] placeholder:text-xs focus:outline-0"
                      placeholder="e.g.999 999 9999"
                      value={formInfo?.phone}
                      onChange={(e: any) =>
                        setFormInfo((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none z-20">
                      <svg
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 7.74981L8 6.99981V10.2498M3.75 6.99979H5.5L4.5 8.24979C4.66443 8.24979 4.82631 8.29034 4.97133 8.36783C5.11635 8.44533 5.24001 8.55739 5.33139 8.69409C5.42276 8.8308 5.47901 8.98792 5.49516 9.15155C5.51132 9.31518 5.48687 9.48027 5.424 9.63219C5.36112 9.78412 5.26175 9.9182 5.13469 10.0226C5.00763 10.1269 4.85679 10.1983 4.69554 10.2305C4.53429 10.2626 4.3676 10.2545 4.21023 10.2069C4.05286 10.1592 3.90966 10.0735 3.79332 9.95733M0.5 4.5H11.5M9 0.5V2.5M3 0.5V2.5M1 1.5H11C11.2761 1.5 11.5 1.72386 11.5 2V12C11.5 12.2761 11.2761 12.5 11 12.5H1C0.723858 12.5 0.5 12.2761 0.5 12V2C0.5 1.72386 0.723858 1.5 1 1.5Z"
                          stroke="#CED4DA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="additional_information"
                    className="block text-sm font-medium leading-7 text-[#6C757D]"
                  >
                    Additional Information
                    <span className="text-red-500 pl-1">*</span>
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="additional_information"
                      rows={3}
                      required
                      value={formInfo?.additionalInformation}
                      onChange={(e: any) =>
                        setFormInfo((prev) => ({
                          ...prev,
                          additionalInformation: e.target.value,
                        }))
                      }
                      placeholder="We would love to learn more about you..."
                      className="w-full bg-white text-xs leading-[18px] px-3 py-2 shadow-[0px_1px_4px_0px_#0000001A] rounded-[4px]  bg-transparent text-[#6C757D] placeholder:text-[#CED4DA] placeholder:text-xs focus:outline-0"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <button
                    disabled={loading}
                    type="submit"
                    className="bg-gradient-to-r from-[#0D1A73] to-[#45D8FF] w-full h-[34px]   rounded-[4px]"
                  >
                    <span className="text-white uppercase text-sm leading-7 tracking-[1.25%]">
                      {loading ? "Processing.." : "SEND"}
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </XaxisNegative>
        <Image
          src={Group1000008874_2}
          alt="Img"
          className="absolute top-[244px] left-0 -z-10"
        />
        <Image
          src={Ellipse43}
          alt="Img"
          className="absolute -top-[107px] left-0 -z-10"
        />
        <Image
          src={Ellipse42}
          alt="Img"
          className="absolute -top-[39px] left-0 -z-10"
        />
      </div>
      <DialogModal open={open} setOpen={setOpen}>
        <div className="p-5 min-h-[200px] flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-y-6">
            <p className="text-[#152536] text-center font-medium text-xs md:text-base md:leading-[21px]">
              {message}
            </p>
          </div>
        </div>
      </DialogModal>
    </>
  );
}
