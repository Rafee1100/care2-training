"use client";
import XaxisNegative from "@/components/animation/XaxisNegative";
import DialogModal from "@/components/DialogModal";
import Image from "next/image";
import { useState } from "react";
import Ellipse29 from "../../../public/images/book-demo/Ellipse29.png";
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
  const handleBookDemoForm = async (e: any) => {
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
            <form onSubmit={handleBookDemoForm}>
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
                    Email address
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
                    className="bg-gradient-to-r from-[#005BEA] to-[#45D8FF] w-full h-[34px]   rounded-[4px]"
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
